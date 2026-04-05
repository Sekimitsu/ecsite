// app/products/page.tsx
import { getProducts } from '@/app/lib/microcms';
import styles from './page.module.scss';
export const dynamic = 'force-dynamic';
import ProductList from '@/components/product/ProductList';
import LowerMv from '@/components/sections/LowerMv/LowerMv';

export default async function Page() {
    const products = await getProducts();

    return (
        <>
            <LowerMv title="PRODUCTS LIST" />
            <section className={styles.products}>
                <div className={styles.products_container}>
                    <h2 className={styles.products_title}>PRODUCTS</h2>
                    <div className={styles.products_search}>

                    </div>
                    <ProductList products={products} />
                </div>
            </section>
        </>
    );
}