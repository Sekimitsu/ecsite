'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './About.module.scss'
import Link from 'next/link'

function About() {

    const bgRef = useRef<HTMLImageElement | null>(null)
    const wrapRef = useRef<HTMLDivElement | null>(null)
    const textRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        const handleScroll = () => {
            if (!wrapRef.current || !bgRef.current || !textRef.current) return
            const rect = wrapRef.current.getBoundingClientRect()
            const windowHeight = window.innerHeight
            // 画面内に入ってから進捗
            const start = 0.1
            const rawProgress = 1 - rect.top / windowHeight
            const progress = Math.min(Math.max((rawProgress - start) / (1 - start), 0), 1)
            // scale値
            const scale = 0.6 + progress * 0.4
            bgRef.current.style.transform = `scale(${scale})`
            // テキスト表示制御
            const textStart =0.8
            const textProgress = Math.min(Math.max((progress - textStart) / (1 - textStart), 0), 1)
            textRef.current.style.opacity = `${textProgress}`
        }
        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section className={styles.about}>

            <div className={styles.about_bg_wrap} ref={wrapRef}>
                <Image className={styles.about_bg} ref={bgRef} src="/about_bg.webp" alt="about" width={2000} height={1000} />
            </div>

            <div className={styles.about_container}>
                <div className={styles.about_container_inner} ref={textRef}>
                    <h2 className={styles.about_title}>
                        ひと編みずつ<br />
                        ぬくもりをかたちに。
                    </h2>
                    <p className={styles.about_text}>
                        「HANDMADE」は、自然素材の糸とやさしい風合い、そして手仕事の美しさを大切にしています。ひとつひとつ丁寧に編み上げることで、日常にあたたかさと心地よさを届けます。<br />
                        伝統を大切にしながらも、現代の暮らしに寄り添うデザイン。<br />
                        時を重ねるほどに愛着が深まる、そんな存在を目指しています。<br />
                        <br />
                        <Link href="/about" className={styles.about_link}>
                            「HANDMADE」について
                            <Image className={styles.about_link_arrow} src="/link_arrow.svg" alt="arrow" width={20} height={20} />
                        </Link>
                    </p>
                </div>
            </div>

            <Image className={styles.about_frame} src="/white_frame.webp" alt="about" width={2000} height={100} />
        </section>
    )
}

export default About