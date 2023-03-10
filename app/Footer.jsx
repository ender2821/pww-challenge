"use client";
import { useMediaQuery } from 'react-responsive'
import Link from "next/link";
import Image from "next/image";

import styles from "./Footer.module.scss";
export default function Footer(props) {
  const { data } = props;
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div>
          <p className={styles.title}>
            South Carolina <br /> Revenue and Fiscal Affairs Office
          </p>
          <Image
            src={"/Group262.png"}
            alt="logo"
            height={isMobile ? 40 : 100}
            width={isMobile ? 40 : 100}
          />
        </div>
        <nav>
          <ul>
            {data?.map((item, i) => {
              return (
                <li key={i}>
                  <Link href={item?.link}>{item?.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div>
          <p className={styles.addressName}>Main Office</p>
          <p>
            1000 Assembly St, Rembert Dennis Building, Suite 421 <br />
            Columbia, SC 29021
          </p>
          <p className={styles.addressName}>Geodetic Survey Section</p>
          <p>
            5 Geology Rd
            <br />
            Columbia, SC 29212
          </p>
          <p className={styles.addressName}>Health and demographics Division</p>
          <p>
            1000 Assembly St, Rembert Dennis Building, Suite 240 <br />
            Columbia, SC 29021
          </p>
        </div>
      </div>
    </footer>
  );
}
