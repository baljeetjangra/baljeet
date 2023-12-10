import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { links } from "@/constants";
import { map } from "lodash";
import NavLink from "./NavLink";
import ThemeSwitcher from "./ThemeSwitcher";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div aria-label="Mobile Menu" className="w-14 md:hidden">
          <span className="block w-14 cursor-pointer">
            <i className=" mb-1.5 block h-1 w-full bg-black dark:bg-cloudy"></i>
            <i className=" mb-1.5 ml-[20%] block h-1 w-4/5 bg-black dark:bg-cloudy"></i>
            <i className=" mb-1.5 ml-[50%] block h-1 w-1/2 bg-black dark:bg-cloudy"></i>
          </span>
        </div>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <div className="flex h-full flex-col justify-center">
          <ul className="flex flex-col items-center gap-20">
            {map(links, (link) => (
              <li key={link.title} className="">
                <SheetTrigger asChild>
                  <NavLink title={link.title} href={link.href} />
                </SheetTrigger>
              </li>
            ))}
            <li>
              <SheetTrigger>
                <ThemeSwitcher />
              </SheetTrigger>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
