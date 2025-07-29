"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";
import { PAGES } from "../../config/pages.config";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.containerLogoAndNav}>
        <nav className={styles.nav}></nav>
      </div>
    </header>
  );
};

export default Header;
