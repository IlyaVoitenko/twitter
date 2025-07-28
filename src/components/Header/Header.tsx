"use client";
import Image from "next/image";
import Link from "next/link";
import NavItem from "../NavItem";
import { usePathname } from "next/navigation";
import { match } from "path-to-regexp";
import styles from "./Header.module.scss";
import { NavItemType } from "@/shared/interfaces.types";
import { PAGES } from "../../config/pages.config";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  const username = session?.user?.name || "user";
  const NAV_ITEMS: NavItemType[] = [
    { path: PAGES.HOME, label: "Home" },
    { path: PAGES.PROFILE(username), label: "Profile" },
    { path: PAGES.EXPLORE, label: "Explore" },
  ];
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
