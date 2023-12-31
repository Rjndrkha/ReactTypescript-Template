import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar({ onClickHamburger, isSidebarOpen }: any) {
  return (
    <header className="z-20 w-full h-12 fixed top-0 flex justify-center">
      <div className="h-full w-full max-w-6xl bg-white items-center relative">
        <div className="md:hidden flex items-center w-10 h-full left-0 justify-center absolute">
          <GiHamburgerMenu
            onClick={onClickHamburger}
            className={`cursor-pointer ${
              isSidebarOpen ? "text-black" : "text-gray-500"
            } transition-colors duration-300 ease-in-out`}
          />
        </div>

        <div className="bg-red-500 ml-[2.5rem] md:ml-0 w-full h-full flex items-center">
          <h1 className="text-lgs">Test</h1>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
