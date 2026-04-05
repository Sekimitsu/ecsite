import Image from 'next/image'
import styles from './Footer.module.scss'
import Link from 'next/link'

function Footer() {
    return (
        <footer className={styles.footer}>
            <span className={styles.footer_border}></span>
            <div className={styles.footer_container}>
                <Link href="#" className={styles.footer_instagram}>
                    INSTAGRAM
                    <Image className={styles.footer_instagram_icon} src="/instagram_icon.svg" alt="" width={100} height={100} />
                </Link>

                <ul className={styles.footer_ul}>
                    <li><Link href="/">Home</Link></li>
                    <li className={styles.footer_ul_separator}>|</li>
                    <li><Link href="/about">About</Link></li>
                    <li className={styles.footer_ul_separator}>|</li>
                    <li><Link href="/products">Products</Link></li>
                </ul>
            </div>
            <span className={styles.footer_border}></span>
            <small>© 2026 HANDMADE. All rights reserved.</small>
        </footer>
    )
}

export default Footer