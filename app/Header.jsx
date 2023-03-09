"use client";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";

import { Roboto_Slab } from "next/font/google";

import MenuIcon from "../public/menu-icon.svg";
import CloseIcon from "../public/close-icon.svg";
import CloseIconDark from "../public/close-icon-dark.svg";
import SearchIcon from "../public/search-icon.svg";

import { navData } from '../fakeData';

const robotoSlab = Roboto_Slab({ subsets: ["latin"] });




export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  const navSectionRender = (number) => {
      return (
      <ul>
        {navData[number]?.map((item, i) => {
          return (
            <li key={i}>
              <Link href={item?.link}>
                {item?.name}
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <header className={styles.header}>
      {!isMobile &&
        (menuOpen ? (
          <button
            className={styles.menuButton}
            onClick={() => setMenuOpen(false)}
          >
            <div>
              <CloseIcon />
              <span>CLOSE</span>
            </div>
          </button>
        ) : (
          <button
            className={styles.menuButton}
            onClick={() => setMenuOpen(true)}
          >
            <div>
              <MenuIcon />
              <span>MENU</span>
            </div>
          </button>
        ))}
      

      <div className={styles.headerContent}>
        {isMobile && (<button
          className={styles.menuButton}
          onClick={() => setMenuOpen(true)}
          >
          <div>
            <MenuIcon />
          </div>
        </button>)}
        <Image
          src={"/RFALogoFinal.png"}
          alt={"RFA Logo"}
          height={isMobile ? 40 : 100}
          width={isMobile ? 40 : 100}
        />
        <div className={styles.headerTextContain}>
          <p className={robotoSlab.className}>South Carolina</p>
          <p className={robotoSlab.className}>
            Revinue and fiscal affairs office
          </p>
          {!isMobile && (<p className={styles.subhead}>
            Transforming data into solutions for south carolina
          </p>)}
        </div>
        {!isMobile && (
        <nav>
          <ul>
            <li>
              <Link href={"/"}>About us</Link>
            </li>
            <li>
              <Link href={"/"}>Events</Link>
            </li>
            <li>
              <Link href={"/"}>Boards &amp; Committees</Link>
            </li>
          </ul>
        </nav>
        )}
        <button className={styles.searchButton}>
          <SearchIcon />
        </button>
      </div>
      {!isMobile && <span className={styles.divider}/>}
      {menuOpen && (
        <div className={styles.popup}>
          {isMobile && (
            <button
              className={styles.mobileCloseIcon}
              onClick={() => setMenuOpen(false)}
            >
              <CloseIconDark />
            </button>
          )}
          <nav className={styles.navContain}>
            {navSectionRender(0)}
            {navSectionRender(1)}
            {navSectionRender(2)}
            {navSectionRender(3)}
            {navSectionRender(4)}
          </nav>
        </div>
      )}
    </header>
  );
}
