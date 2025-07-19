"use client";
import Link from "next/link";
import { NavItemType } from "@/shared/interfaces.types";

interface NavItemProps {
  menuItem: NavItemType;
  isActive?: boolean;
}

const NavItem = ({ menuItem, isActive }: NavItemProps) => {
  const { path, label } = menuItem;

  return (
    <Link href={path} className={isActive ? "" : ""}>
      {label}
    </Link>
  );
};

export default NavItem;
