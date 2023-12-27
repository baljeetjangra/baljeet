"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LogoSvg from "../Svgs/LogoSvg";
import ThemeSwitcher from "./ThemeSwitcher";
import { map } from "lodash";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";
import { links } from "@/constants";
import "./navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // You can adjust the value (e.g., 100) based on when you want the navbar to hide.
      setIsScrolled(scrollY > 100);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-20 w-full  py-4">
      <div
        className={`flex items-center justify-between px-4 transition-all duration-300 md:container md:px-16 ${
          isScrolled ? "hidden" : ""
        }`}
      >
        <Link href={"/"}>
          <LogoSvg size={50} />
        </Link>

        <MobileMenu />

        <ul className="nav-links hidden items-center gap-20 md:flex">
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
