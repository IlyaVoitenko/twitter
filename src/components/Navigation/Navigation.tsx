"use client";
import { PAGES } from "@/config/pages.config";
import { match } from "path-to-regexp";
import { NavItemType } from "@/shared/interfaces.types";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.scss";
import home from "../../assets/home.svg";
import explore from "../../assets/search.svg";
import message from "../../assets/message.svg";
import bookmark from "../../assets/save.svg";
import job from "../../assets/toolbox.svg";
import notification from "../../assets/notification.svg";
import community from "../../assets/contacts (1).svg";
import verifiedOrg from "../../assets/check-mark.svg";
import more from "../../assets/round.svg";
import NavItem from "../NavItem";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  const { data: session } = useSession();

  const pathname = usePathname();
  const username = session?.user?.name || "user";
  const NAV_ITEMS: NavItemType[] = [
    {
      path: PAGES.HOME,
      label: "Home",
      icon: home,
    },
    { path: PAGES.PROFILE(username), label: "Profile", icon: community },
    { path: PAGES.EXPLORE, label: "Explore", icon: explore },
    { path: PAGES.NOTIFICATIONS, label: "Notifications", icon: notification },
    { path: PAGES.MESSAGES, label: "Messages", icon: message },
    { path: PAGES.BOOKMARKS, label: "Bookmarks", icon: bookmark },
    { path: PAGES.JOBS, label: "Jobs", icon: job },
    { path: PAGES.COMMUNITIES, label: "Communities", icon: community },
    { path: PAGES.PREMIUM, label: "Premium", icon: "./logo.svg" },
    {
      path: PAGES.VERIFIED_ORGANIZATIONS,
      label: "Verified Orgs",
      icon: verifiedOrg,
    },
    { path: PAGES.MORE, label: "More", icon: more },
  ];
  console.log("session -->", session?.expires);
  console.log("session -->", session?.user);

  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
        <nav className={styles.nav}>
          <Link href={PAGES.HOME} className={styles.logo}>
            <Image src="/logo.svg" alt="Logo" width={30} height={30} priority />
          </Link>
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
        <button className={`${styles.button} ${styles.btnPost}`}>
          <span className={styles.buttonText}>POST</span>
        </button>
        <button className={`${styles.button} ${styles.btnAccountInfo}`}>
          <Image src="/logo.svg" alt="Logo" width={30} height={30} priority />
          <div className={styles.accountInfoContainer}>
            <span className={styles.emailText}>
              {session?.user?.email || "email"}{" "}
            </span>
            <span className={styles.usernameText}>
              @{session?.user?.name || "user"}
            </span>
          </div>
          <span className={styles.points}>&middot;&middot;&middot;</span>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
