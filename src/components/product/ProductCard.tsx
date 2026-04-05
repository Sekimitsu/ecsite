import Link from 'next/link';
import { Product } from '../../app/types/product';
import styles from './ProductList.module.scss';
import Image from 'next/image';

export default function ProductCard({ product }: { product: Product }) {
    const thumb = product.image[0];

    return (
        <Link href={`/products/${product.slug}`} className={styles.product_card}>
            {thumb ? (
                <Image className={styles.product_card_image} src={thumb.url} alt={product.title} width={thumb.width} height={thumb.height} />
            ) : null}
            <h3 className={styles.product_card_title}>{product.title} / {product.type}</h3>
            <p className={styles.product_card_price}>¥{product.price.toLocaleString()}</p>
        </Link>
    );
}