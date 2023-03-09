import styles from "./LinkList.module.scss";
import Link from "next/link";

import MapsIcon from "../public/maps-icon.svg";
import ClockIcon from "../public/clock-icon.svg";
import PhoneIcon from "../public/phone-icon.svg";

export default function LinkList(props) {
  const { title, data, type } = props;

  return (
    <section className={styles.linkList}>
      <h2>{title && title}</h2>
      <ul>
        {type == "updates" &&
          data?.map((item, i) => {
            return (
              <li key={i} className={styles.updates}>
                <Link href={item?.link ? item?.link : ""}>{item?.title}</Link>
                {item?.text.length > 0 && <p>{item?.text}</p>}
                {item?.date && (
                  <div className={styles.dateContain}>
                    <span>Published:</span>
                    <span>{item?.date}</span>
                    {item?.tag && (
                      <span className={styles.tag}>{item?.tag}</span>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        {type == "events" &&
          data?.map((item, i) => {
            return (
              <li key={i} className={styles.events}>
                <div className={styles.dateContain}>
                  <span>{item?.month}</span>
                  <span>{item?.day}</span>
                </div>
                <div className={styles.infoContain}>
                  <Link href={item?.link ? item?.link : ""}>{item?.title}</Link>
                  {item?.location && (
                    <span>
                      <MapsIcon />
                      {item?.location}
                    </span>
                  )}
                  {item?.time && (
                    <span>
                      <ClockIcon />
                      {item?.time}
                    </span>
                  )}
                  {item?.phone && (
                    <span>
                      <PhoneIcon />
                      {item?.phone}
                    </span>
                  )}
                </div>
              </li>
            );
          })}
      </ul>
      <button className={styles.btn}>View More</button>
    </section>
  );
}
