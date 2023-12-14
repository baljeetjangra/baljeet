import Link from "next/link";
import React from "react";

const NavLink = ({ title, href }: { title: string; href: string }) => {
  return (
    <Link
      href={href}
      data-scroll=""
      className="text-xl font-bold text-gray hover:text-black dark:text-light-gray dark:hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
