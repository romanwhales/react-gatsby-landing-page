import coursesImage from "../images/icons/courses.svg";
import tutorialsImage from "../images/icons/courses.svg";
import pricingImage from "../images/icons/pricing.svg";
import searchImage from "../images/icons/search.svg";
import accountImage from "../images/icons/account.svg";
import profileImage from "../images/icons/profile.svg";
import settingsImage from "../images/icons/settings.svg";
import signOutImage from "../images/icons/signout.svg";

export const menuData = [
  { title: "Courses", icon: coursesImage, link: "/courses" },
  { title: "Tutorials", icon: tutorialsImage, link: "/tutorials" },
  { title: "Pricing", icon: pricingImage, link: "/pricing" },
  { title: "", icon: searchImage, link: "/pricing" },
  { title: "", icon: accountImage, link: "/account" },
];

export const tooltipData = [
  { title: "Profile", icon: profileImage, link: "/profile" },
  { title: "Settings", icon: settingsImage, link: "/settings" },
  { title: "Sign Out", icon: signOutImage, link: "/logout" },
];
