import type { Product } from '@/app/types/product';

type MicroCMSListResponse<T> = {
  contents: T[];
  totalCount: number;
};

/** microCMS の API レスポンス（商品 API のフィールド名に合わせて調整してください） */
type MicroCMSProductContent = {
  id: string;
  title: string;
  type: string;
  slug: string;
  price: number;
  description?: string | { html?: string };
  /** 単一メディア or 複数メディア（microCMS の「複数画像」は配列で返る） */
  image:
    | { url: string; width?: number; height?: number }
    | { url: string; width?: number; height?: number }[];
  /** BASE の商品・決済ページなど購入用 URL */
  baseUrl: string;
};

function getServiceEndpoint(): string {
  const domain = process.env.MICROCMS_SERVICE_DOMAIN;
  if (!domain) {
    throw new Error(
      'MICROCMS_SERVICE_DOMAIN が未設定です（例: your-service-id のみ、.microcms.io は含めない）',
    );
  }
  const trimmed = domain.replace(/^https?:\/\//, '').replace(/\.microcms\.io.*$/, '');
  return `https://${trimmed}.microcms.io/api/v1`;
}

function getApiKey(): string {
  const key = process.env.MICROCMS_API_KEY;
  if (!key) {
    throw new Error('MICROCMS_API_KEY が未設定です');
  }
  return key;
}

async function microcmsFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${getServiceEndpoint()}${path}`, {
    ...init,
    headers: {
      'X-MICROCMS-API-KEY': getApiKey(),
      ...init?.headers,
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`microCMS API error ${res.status}: ${body.slice(0, 200)}`);
  }

  return res.json() as Promise<T>;
}

function toDescription(raw: MicroCMSProductContent['description']): string {
  if (raw == null) return '';
  if (typeof raw === 'string') return raw;
  if (typeof raw === 'object' && 'html' in raw && typeof raw.html === 'string') {
    return raw.html;
  }
  return '';
}

function toImageArray(
  raw: MicroCMSProductContent['image'],
): Product['image'] {
  const items = Array.isArray(raw) ? raw : [raw];
  return items
    .filter((img): img is { url: string; width?: number; height?: number } => Boolean(img?.url))
    .map((img) => ({
      url: img.url,
      width: img.width ?? 800,
      height: img.height ?? 800,
    }));
}

function toProduct(raw: MicroCMSProductContent): Product {
  return {
    id: raw.id,
    title: raw.title,
    type: raw.type ?? '',
    slug: raw.slug,
    price: raw.price,
    description: toDescription(raw.description),
    image: toImageArray(raw.image),
    baseUrl: raw.baseUrl,
  };
}

/** 商品一覧（microCMS の `products` API） */
export async function getProducts(): Promise<Product[]> {
  const data = await microcmsFetch<MicroCMSListResponse<MicroCMSProductContent>>('/products');
  return data.contents.map(toProduct);
}

/** slug で 1 件（詳細ページ用）。microCMS のフィルタ API を使用 */
export async function getProductBySlug(slug: string): Promise<Product | null> {
  const filters = encodeURIComponent(`slug[equals]${slug}`);
  const data = await microcmsFetch<MicroCMSListResponse<MicroCMSProductContent>>(
    `/products?filters=${filters}&limit=1`,
  );
  const raw = data.contents[0];
  return raw ? toProduct(raw) : null;
}
