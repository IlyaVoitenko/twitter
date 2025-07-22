"use client";
import Image from "next/image";
import Link from "next/link";
import { PAGES } from "../../config/pages.config";
import NavItem from "../NavItem";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "../NavItem/links.data";
import { match } from "path-to-regexp";
import styles from "./Header.module.scss";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.containerLogoAndNav}>
        <Link href={PAGES.HOME}>
          <Image src="/logo.svg" alt="Logo" width={25} height={25} priority />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {NAV_ITEMS &&
              NAV_ITEMS.map((item) => (
                <NavItem
                  key={item.path}
                  menuItem={item}
                  isActive={!!match(item.path)(pathname)}
                />
              ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
