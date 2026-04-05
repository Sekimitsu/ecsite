import Image from 'next/image'
import styles from './Products.module.scss'
import Link from 'next/link'

function Products() {
    return (
        <section className={styles.products}>
            <div className={styles.products_container}>
                <h2 className={styles.products_title}>PRODUCTS LIST</h2>
                
                <div className={styles.products_scroll}>
                    <div className={styles.products_list}>
                        <div className={styles.products_item}>
                            <Image className={styles.products_item_image} src="/products_item1.webp" alt="" width={400} height={400} />
                            <div className={styles.products_item_wrap}>
                                <p className={styles.products_item_title}>アイテムアイテム</p>
                                <p className={styles.products_item_text}>
                                    テキストが入ります。テキストが入ります。テキストが入ります。
                                    テキストが入ります。
                                </p>
                            </div>
                        </div>
                        <div className={styles.products_item}>
                            <Image className={styles.products_item_image} src="/products_item2.webp" alt="" width={400} height={400} />
                            <div className={styles.products_item_wrap}>
                                <p className={styles.products_item_title}>アイテムアイテム</p>
                                <p className={styles.products_item_text}>
                                    テキストが入ります。テキストが入ります。テキストが入ります。
                                    テキストが入ります。
                                </p>
                            </div>
                        </div>
                        <div className={styles.products_item}>
                            <Image className={styles.products_item_image} src="/products_item1.webp" alt="" width={400} height={400} />
                            <div className={styles.products_item_wrap}>
                                <p className={styles.products_item_title}>アイテムアイテム</p>
                                <p className={styles.products_item_text}>
                                    テキストが入ります。テキストが入ります。テキストが入ります。
                                    テキストが入ります。
                                </p>
                            </div>
                        </div>
                        <div className={styles.products_item}>
                            <Image className={styles.products_item_image} src="/products_item2.webp" alt="" width={400} height={400} />
                            <div className={styles.products_item_wrap}>
                                <p className={styles.products_item_title}>アイテムアイテム</p>
                                <p className={styles.products_item_text}>
                                    テキストが入ります。テキストが入ります。テキストが入ります。
                                    テキストが入ります。
                                </p>
                            </div>
                        </div>
                        <div className={styles.products_item}>
                            <Image className={styles.products_item_image} src="/products_item3.webp" alt="" width={400} height={400} />
                            <div className={styles.products_item_wrap}>
                                <p className={styles.products_item_title}>アイテムアイテム</p>
                                <p className={styles.products_item_text}>
                                    テキストが入ります。テキストが入ります。テキストが入ります。
                                    テキストが入ります。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Link href="/products" className={styles.products_link}>
                    VIEW PRODUCTS
                </Link>
            </div>
        </section>
    )
}

export default Products