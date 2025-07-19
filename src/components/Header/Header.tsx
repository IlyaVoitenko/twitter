"use client";
import Image from "next/image";
import Link from "next/link";
import { PAGES } from "../../config/pages.config";
import NavItem from "../NavItem";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "../NavItem/links.data";
import { match } from "path-to-regexp";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <Link href={PAGES.HOME}>
        <Image src="/vercel.svg" alt="Logo" width={25} height={25} priority />
      </Link>
      <nav>
        <ul>
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
    </header>
  );
};

export default Header;
