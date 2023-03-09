import styles from './Services.module.scss';
import Link from "next/link";

export default function Services(props) {
    const { data } = props;
    return (
        <section className={styles.services}>
            <h2>Popular Services and Links</h2>
            <ul>
                {data?.map((item, i) => {
                    return (
                        <li key={i}>
                            <Link href={item?.link}>
                                {item?.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}