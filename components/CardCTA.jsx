
import styles from "./CardCTA.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function CardCTA(props) {
    const {data} = props;

    return (
        <section className={styles.cardCta}>
            <div className={styles.wrapper}>
                {data?.map((item, i) => {
                    return (
                        <Link href={item?.link} key={i} className={styles.card}>
                            <div className={styles.content}>
                                <div>
                                <div className={styles.imgContain}><Image alt={item?.alt} src={item?.image} fill/></div>
                                <p>{item?.name}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}