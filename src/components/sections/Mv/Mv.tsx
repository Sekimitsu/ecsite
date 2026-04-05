import Image from 'next/image'
import styles from './Mv.module.scss'

function Mv() {
    return (
        <section className={styles.mv}>
            <div className={styles.mv_container}>
                <div className={styles.mv_bg}>
                    {/* <Image src="/mv_bg1.webp" alt="mv_bg" width={4000} height={2000} /> */}
                </div>
                <h2>
                    ほどよく、ここちよく<br />
                    日々にやさしくなじむものを。
                </h2>
                <p>
                    ひと目ひと目に想いを込めた<br className={styles.sp} />手編みのぬくもり。<br />
                    日々にそっとなじみ、<br className={styles.sp} />長く愛されるものを届けるブランドです。
                </p>
            </div>
            <Image className={styles.mv_logo} src="/handmade.svg" alt="" width={2000} height={1000} />
        </section>
    )
}

export default Mv