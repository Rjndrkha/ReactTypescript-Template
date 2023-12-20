import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "../navbar/navbar";
import { Outlet } from "react-router-dom";

function LayoutUser() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <Navbar onClickHamburger={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="mt-12 w-full h-[100vh] flex justify-center">
        <main className="w-full max-w-6xl flex flex-row justify-center relative bg-white">
          <section
            className={`z-10 bg-white h-full w-full md:w-48 absolute left-0 ${
              isSidebarOpen ? "translate-x-0 w-[100%]" : "-translate-x-full"
            } md:translate-x-0 transition-transform duration-300 ease-in-out`}
          >
            <div className=" bg-red-950 left-0 h-full w-full">
              <h1 className="text-lg text-orange-500">Sidebar</h1>
            </div>
          </section>

          <section className="bg-red-200 w-full md:w-[60rem] right-0 absolute md:ml-20">
            <Outlet />
          </section>
        </main>
      </div>
    </>
  );
}

export default LayoutUser;
