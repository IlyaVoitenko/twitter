"use client";
import Link from "next/link";
import { NavItemType } from "@/shared/interfaces.types";
import styles from "./NavItem.module.scss";

interface NavItemProps {
  menuItem: NavItemType;
  isActive?: boolean;
}

const NavItem = ({ menuItem, isActive }: NavItemProps) => {
  const { path, label } = menuItem;

  return (
    <Link
      href={path}
      className={
        isActive
          ? `${styles.active} ${styles.link}`
          : `${styles.inactive} ${styles.link}`
      }
    >
      {label}
    </Link>
  );
};

export default NavItem;
