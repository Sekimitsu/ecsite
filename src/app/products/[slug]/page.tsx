import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/app/lib/microcms';
import ProductDetail from '@/components/product/ProductDetail';

export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
