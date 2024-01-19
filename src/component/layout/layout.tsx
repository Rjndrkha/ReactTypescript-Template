import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "../navbar/navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../footer/footer";
import { useTodoStore } from "../../store/todo/store";

function LayoutUser() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation();

  const [progress, setProgress] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const updateProgress = () => {
      setProgress(40);
      setTimeout(() => {
        setProgress(100);
      }, 500);
    };
    updateProgress();
  }, [location]);

  return (
    <>
      <Navbar
        onClickHamburger={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
        progress={progress}
        setProgress={setProgress}
      />
      <div className="mt-12 w-full min-h-[100vh] flex justify-center">
        <main className="w-full max-w-6xl flex flex-col md:flex-row relative bg-white">
          <section
            className={`z-10 bg-white h-full w-full md:w-[10rem] lg:w-48 absolute left-0 ${
              isSidebarOpen ? "translate-x-0 w-[80%]" : "-translate-x-full"
            } md:translate-x-0 transition-transform duration-300 ease-in-out`}
          >
            <div className="bg-red-950 left-0 h-full w-full">
              <SidebarLink />
            </div>
          </section>

          <section className="bg-red-200 w-full md:w-[55rem] lg:w-[60rem] md:ml-[10rem] lg:ml-[12rem] relative">
            <Outlet />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default LayoutUser;

function SidebarLink() {
  return (
    <div className="bg-red-950 left-0 h-full w-full">
      <h1 className="text-lg text-orange-500">Sidebar</h1>
      <a href="/page1" className="text-white">
        Page 1
      </a>
    </div>
  );
}
