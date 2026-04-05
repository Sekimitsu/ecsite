import Link from 'next/link';
import { Product } from '../../app/types/product';
import styles from './ProductDetail.module.scss';
import LowerMv from '../sections/LowerMv/LowerMv';
import ProductImageCarousel from './ProductImageCarousel';

type Props = {
    product: Product;
};

export default function ProductDetail({ product }: Props) {
    const isHtmlDescription = product.description.trim().startsWith('<');

    return (
        <>
            <LowerMv title="PRODUCT DETAIL" />
            <div className={styles.product_detail}>
                <article className={styles.product_detail_item}>
                    <div className={styles.product_detail_item_head}>
                        <h1 className={styles.product_detail_item_title}>{product.title} / {product.type}</h1>
                        <p className={styles.product_detail_price}>¥{product.price.toLocaleString()}</p>
                    </div>
                    <div className={styles.product_detail_image}>
                        <ProductImageCarousel
                            key={`${product.slug}-${product.image.map((img) => img.url).join('|')}`}
                            images={product.image}
                            title={product.title}
                        />
                    </div>
                    {isHtmlDescription ? (
                        <div
                        className={styles.product_detail_body}
                        dangerouslySetInnerHTML={{ __html: product.description }}
                        />
                    ) : (
                        <p className={styles.product_detail_body}>{product.description}</p>
                    )}

                    <div className={styles.product_detail_buttons}>
                        <a className={styles.product_detail_button} href={product.baseUrl} target="_blank" rel="noopener noreferrer">
                            購入する
                        </a>
                        <Link className={styles.product_detail_button} href="/products">商品一覧へ</Link>
                    </div>
                </article>
            </div>
        </>
    );
}
