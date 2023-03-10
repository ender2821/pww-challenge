"use client";
import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from 'react-responsive'
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";


import MenuIcon from "../public/menu-icon.svg";
import CloseIcon from "../public/close-icon.svg";
import CloseIconDark from "../public/close-icon-dark.svg";
import SearchIcon from "../public/search-icon.svg";
import SearchIconWhite from "../public/search-icon-white.svg";

import { Roboto_Slab } from "next/font/google";
const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

export default function Header(props) {
  const {data} = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event)=> {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [searchRef]);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const isTablet = useMediaQuery({ query: '(max-width: 1200px)' })

  const navSectionRender = (number) => {
      return (
      <ul>
        {data[number]?.map((item, i) => {
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
    <header className={styles.header} >
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
        <Link href="/" className={styles.logo}>
          <Image
            src={"/RFALogoFinal.png"}
            alt={"RFA Logo"}
            height={isMobile ? 40 : 100}
            width={isMobile ? 40 : 100}
          />
        </Link>
        <div className={styles.headerTextContain}>
          <p className={robotoSlab.className}>South Carolina</p>
          <p className={robotoSlab.className}>
            Revinue and fiscal affairs office
          </p>
          {!isMobile && (<p className={styles.subhead}>
            Transforming data into solutions for south carolina
          </p>)}
        </div>
        {!isTablet && (
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
        <button className={searchOpen ? styles.searchButtonActive : styles.searchButton} ref={searchRef} onClick={() => setSearchOpen(true)}>
          {searchOpen ? <SearchIconWhite /> : <SearchIcon />}
          {searchOpen && (
          <div className={styles.searchMenu}>
            <input placeholder="Enter search term"/>
            <button className={styles.btnSecondary}>Search</button>
          </div>
          )}
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
