import Image from 'next/image'
import styles from './News.module.scss'

function News() {
    return (
        <div className={styles.news}>
            <Image className={styles.news_frame} src="/white_frame.webp" alt="" width={2000} height={100} />

            <div className={styles.news_container}>
                <h2 className={styles.news_title}>SHOP NEWS</h2>
                <div className={styles.news_content}>
                    <div className={styles.news_content_object}>
                        <p>
                            NEWS<br />
                            TOPICS<br />
                            EVENT
                        </p>
                    </div>
                    <div className={styles.news_list}>
                        <div className={styles.news_item}>
                            <p className={styles.news_item_head}>
                                <span className={styles.news_item_title_type}>NEWS</span>
                                <span className={styles.news_item_title_date}>2026.04.01</span>
                            </p>
                            <p className={styles.news_item_text}>年末年始の配送スケジュール・店舗営業について</p>
                        </div>
                        <div className={styles.news_item}>
                            <p className={styles.news_item_head}>
                                <span className={styles.news_item_title_type}>TOPICS</span>
                                <span className={styles.news_item_title_date}>2026.04.01</span>
                            </p>
                            <p className={styles.news_item_text}>年末年始の配送スケジュール・店舗営業について</p>
                        </div>
                        <div className={styles.news_item}>
                            <p className={styles.news_item_head}>
                                <span className={styles.news_item_title_type}>EVENT</span>
                                <span className={styles.news_item_title_date}>2026.04.01</span>
                            </p>
                            <p className={styles.news_item_text}>年末年始の配送スケジュール・店舗営業について</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News