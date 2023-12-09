import React from "react";

const MobileMenu = () => {
  return (
    <div aria-label="Mobile Menu" className="w-14 md:hidden">
      <span className="block w-14 cursor-pointer">
        <i className=" mb-1.5 block h-1 w-full bg-black dark:bg-cloudy"></i>
        <i className=" mb-1.5 ml-[20%] block h-1 w-4/5 bg-black dark:bg-cloudy"></i>
        <i className=" mb-1.5 ml-[50%] block h-1 w-1/2 bg-black dark:bg-cloudy"></i>
      </span>
    </div>
  );
};

export default MobileMenu;
