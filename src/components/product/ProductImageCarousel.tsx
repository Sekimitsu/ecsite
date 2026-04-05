'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { Product } from '@/app/types/product';
import styles from './ProductImageCarousel.module.scss';

type Props = {
    images: Product['image'];
    title: string;
};

export default function ProductImageCarousel({ images, title }: Props) {
    const viewportRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);

    const updateIndex = useCallback(() => {
        const el = viewportRef.current;
        if (!el || el.clientWidth === 0) return;
        const i = Math.round(el.scrollLeft / el.clientWidth);
        setIndex(Math.min(Math.max(0, i), images.length - 1));
    }, [images.length]);

    useEffect(() => {
        const el = viewportRef.current;
        if (!el) return;
        el.addEventListener('scroll', updateIndex, { passive: true });
        return () => el.removeEventListener('scroll', updateIndex);
    }, [updateIndex]);

    const scrollTo = useCallback((i: number) => {
        const el = viewportRef.current;
        if (!el) return;
        el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' });
    }, []);

    const goPrev = useCallback(() => {
        scrollTo(Math.max(0, index - 1));
    }, [index, scrollTo]);

    const goNext = useCallback(() => {
        scrollTo(Math.min(images.length - 1, index + 1));
    }, [images.length, index, scrollTo]);

    const onKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (images.length < 2) return;
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                goPrev();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                goNext();
            }
        },
        [goNext, goPrev, images.length],
    );

    if (images.length === 0) {
        return null;
    }

    const showNav = images.length > 1;

    return (
        <div
            className={styles.root}
            tabIndex={showNav ? 0 : undefined}
            onKeyDown={showNav ? onKeyDown : undefined}
        >
            <div ref={viewportRef} className={styles.viewport}>
                {images.map((img, i) => (
                    <div className={styles.slide} key={`${img.url}-${i}`}>
                        <Image
                            className={styles.slideImage}
                            src={img.url}
                            alt={`${title} — ${i + 1} / ${images.length}`}
                            fill
                            sizes="(max-width: 1200px) 100vw, 800px"
                            priority={i === 0}
                        />
                    </div>
                ))}
            </div>
            {showNav && (
                <>
                    <button
                        type="button"
                        className={`${styles.nav} ${styles.navPrev}`}
                        onClick={goPrev}
                        disabled={index === 0}
                        aria-label="前の画像"
                    >
                        ‹
                    </button>
                    <button
                        type="button"
                        className={`${styles.nav} ${styles.navNext}`}
                        onClick={goNext}
                        disabled={index === images.length - 1}
                        aria-label="次の画像"
                    >
                        ›
                    </button>
                    <div className={styles.dots} role="tablist" aria-label="画像の選択">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                role="tab"
                                aria-selected={i === index}
                                aria-label={`画像 ${i + 1}`}
                                className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                                onClick={() => scrollTo(i)}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
