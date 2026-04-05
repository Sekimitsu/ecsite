import styles from './Info.module.scss'

function Info() {
    return (
        <div className={styles.info}>
            <div className={styles.info_container}>
                <p className={styles.info_title}>INFO</p>
                <div className={styles.info_content}>
                    <div className={styles.info_content_item}>
                        <p className={styles.info_content_item_date}>2025.11.22</p>
                        <p className={styles.info_content_item_text}>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
                    </div>
                    <div className={styles.info_content_item}>
                        <p className={styles.info_content_item_date}>2025.11.22</p>
                        <p className={styles.info_content_item_text}>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info