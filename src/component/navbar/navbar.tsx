import { GiHamburgerMenu } from "react-icons/gi";
import LoadingBar from "react-top-loading-bar";
import { ASSETS } from "../../assets";
import { Dropdown, MenuProps } from "antd";
import ButtonDefault from "../button/button";

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

        <div className="ml-[2.5rem] md:ml-0 w-full h-full flex items-center justify-start md:justify-center relative">
          {/* <a href="/">
            <img
              src={ASSETS.LOGOMF}
              alt="logo"
              height={100}
              width={300}
              className=""
            />
          </a> */}

          <div className="hidden md:block absolute right-5">
            <Dropdown menu={{ items }}>
              <button
                onClick={(e) => e.preventDefault()}
                className="text-start"
              >
                <p className="text-base font-semibold">Hello Welcome !</p>
                <p className="text-xs"> </p>
              </button>
            </Dropdown>
          </div>
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

const items: MenuProps["items"] = [
  // {
  //   key: "1",
  //   label: (
  //     <a
  //       target="_blank"
  //       rel="noopener noreferrer"
  //       href="https://www.antgroup.com"
  //     >
  //       1st menu item
  //     </a>
  //   ),
  // },
  {
    key: "1",
    label: (
      <div className="h-fit flex">
        <ButtonDefault
          text={"Logout"}
          width="100%"
          // onClick={useAuthentificationStore.getState().logout}
        />
        ,
      </div>
    ),
  },
];
