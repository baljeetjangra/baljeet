"use client";
import Link from "next/link";
import React from "react";

const NavLink = ({ title, href }: { title: string; href: string }) => {
  return (
    <Link
      href={href}
      data-scroll=""
      itemProp="url"
      className="text-xl font-bold text-gray hover:text-black dark:text-light-gray dark:hover:text-white"
      onClick={(e) => {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      {title}
    </Link>
  );
};

export default NavLink;
