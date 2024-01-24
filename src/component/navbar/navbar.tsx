import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import LoadingBar from "react-top-loading-bar";

function Navbar({
  onClickHamburger,
  isSidebarOpen,
  progress,
  setProgress,
}: any) {
  return (
    <header className="z-20 w-full h-16 fixed top-0 flex justify-center">
      <div className="h-full w-full max-w-[85rem] bg-white items-center relative">
        <div className="md:hidden flex items-center w-10 h-full left-0 justify-center absolute">
          <GiHamburgerMenu
            onClick={onClickHamburger}
            className={`cursor-pointer ${
              isSidebarOpen ? "text-black" : "text-gray-500"
            } transition-colors duration-300 ease-in-out`}
          />
        </div>

        <div className="ml-[2.5rem] md:ml-0 w-full h-full flex items-center justify-start md:justify-center">
          {/* <img
            src={}
            alt="logo"
            height={100}
            width={300}
            className=""
          /> */}
        </div>
      </div>

      <LoadingBar
        color="#f4b63c"
        height={7}
        shadow={true}
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => {
          setProgress(0);
        }}
      />
    </header>
  );
}

export default Navbar;
