import Link from "next/link";
import React from "react";
import LogoSvg from "./LogoSvg";
import ThemeSwitcher from "./ThemeSwitcher";
import { map } from "lodash";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

const links = [
  {
    title: "Projects",
    href: "",
  },
  {
    title: "Contact",
    href: "",
  },
];

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 z-20 mt-4 w-full">
      <div className="flex items-center justify-between px-4 md:container md:px-16">
        <Link href={"/"}>
          <LogoSvg />
        </Link>

        <MobileMenu />

        <ul className="hidden items-center gap-20 md:flex">
          {map(links, (link) => (
            <li key={link.title} className="">
              <NavLink title={link.title} href={link.href} />
            </li>
          ))}
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
