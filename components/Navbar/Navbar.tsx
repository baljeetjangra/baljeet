import Link from "next/link";
import React from "react";
import LogoSvg from "./LogoSvg";
import ThemeSwitcher from "./ThemeSwitcher";
import { map } from "lodash";
import NavLink from "./NavLink";

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
      <div className="container flex items-center justify-between px-16">
        <Link href={"/"}>
          <LogoSvg />
        </Link>
        <div aria-label="Mobile Menu" className="nav-toggle md:hidden">
          hamburger icon
        </div>
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
