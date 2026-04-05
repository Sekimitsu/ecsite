'use client';

import Link from 'next/link'
import styles from './Header.module.scss'
import { useState } from 'react';

function Header() {

    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive);
    }
    const handleClose = () => {
        setIsActive(false);
    }

    return (
        <header className={`${styles.header} ${isActive ? styles.active : ''}`}>
            <div className={styles.header_container}>

                <h1>
                    <Link href="/">
                        HANDMADE
                    </Link>
                </h1>

                <nav>
                    <ul>
                        <li><Link href="/" onClick={handleClose}>Home</Link></li>
                        <li className={styles.header_nav_separator}>|</li>
                        <li><Link href="/about" onClick={handleClose}>About</Link></li>
                        <li className={styles.header_nav_separator}>|</li>
                        <li><Link href="/products" onClick={handleClose}>Products</Link></li>
                        <li className={styles.header_nav_separator}>|</li>
                        <li><Link href="#" onClick={handleClose}>Instagram</Link></li>
                    </ul>
                </nav>

                <div className={styles.header_ham} onClick={handleClick}>
                    <span className={styles.header_ham_line}></span>
                    <span className={styles.header_ham_line}></span>
                    <span className={styles.header_ham_line}></span>
                </div>

                {/* <div className={styles.header_bag}>
                    <p className={styles.header_bag_text}>BAG</p>
                    <p className={styles.header_bag_num}>0</p>
                </div> */}
            </div>
        </header>
    )
}

export default Header