'use client';

import { Product } from '../../app/types/product';
import ProductCard from './ProductCard';
import styles from './ProductList.module.scss';

type Props = {
    products: Product[];
};

export default function ProductList({ products }: Props) {
    if (!products || products.length === 0) {
        return <p>商品がありません</p>;
    }

    return (
        <div className={styles.product_list}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}