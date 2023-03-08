'use client';
import { useState } from 'react';
import styles from './Header.module.scss';
import { useRouter, usePathname } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";

import MenuIcon from '../public/menu-icon.svg';
import CloseIcon from '../public/close-icon.svg';
import SearchIcon from '../public/search-icon.svg';

export default function Header() {
    const router = useRouter();
    const path = usePathname();

    const [ menuOpen, setMenuOpen ] = useState(false);
  
    return (
      <header className={styles.header}>
        {menuOpen ? (
        <button className={styles.menuButton} onClick={() => setMenuOpen(false)}>
          <CloseIcon />
          <span>CLOSE</span>
        </button>
        ) : (
          <button className={styles.menuButton} onClick={() => setMenuOpen(true)}>
            <MenuIcon />
            <span>MENU</span>

          </button>
        )}
        <div className={styles.headerContent}>
          <Image
            src={"/RFALogoFinal.png"}
            alt={"RFA Logo"}
            height={100}
            width={100}
          />
          <div classNAme={styles.headerTextContain}>
            <p>South Carolina</p>
            <p>Revinue and fiscal affairs office</p>
          </div>
          <nav>
            <ul>
              <li>
                <Link href={"/"}>
                  About us
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  Events
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  Boards &amp; Committees
                </Link>
              </li>
            </ul>
          </nav>
          <button className={styles.searchButton}>
            <SearchIcon />
          </button>
        </div>
      </header>
    )
  }