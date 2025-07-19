import { PAGES } from "@/config/pages.config";
import { NavItemType } from "@/shared/interfaces.types";

export const NAV_ITEMS: NavItemType[] = [
  { path: PAGES.HOME, label: "Home" },
  { path: PAGES.PROFILE("username"), label: "Profile" },
  { path: PAGES.EXPLORE, label: "Explore" },
];
