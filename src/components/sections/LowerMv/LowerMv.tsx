import Image from 'next/image'
import styles from './LowerMv.module.scss'

type Props = {
    title: string;
};

function LowerMv({ title }: Props) {
    return (
        <section className={styles.lower_mv}>
            <div className={styles.lower_mv_container}>
                <h2>{title}</h2>
            </div>
        </section>
    )
}

export default LowerMv