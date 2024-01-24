import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../footer/footer";
import SideMenu from "../menu/menu";

function LayoutUser() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [prevLocation, setPrevLocation] = useState("");
  const location = useLocation();

  const [progress, setProgress] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setPrevLocation(location.pathname);
    setProgress(40);

    if (prevLocation !== location.pathname) {
      setProgress(100);
    }

    if (location.pathname === prevLocation) {
      setPrevLocation("");
      setProgress(100);
    }
  }, [location]);

  return (
    <>
      <Navbar
        onClickHamburger={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
        progress={progress}
        setProgress={setProgress}
      />
      <div className="mt-16 w-full min-h-[100vh] flex justify-center">
        <main className="w-full max-w-[85rem] flex flex-col md:flex-row relative border">
          <section
            className={`z-10 bg-white  h-full w-full md:w-[10rem] lg:w-[15rem] absolute left-0 ${
              isSidebarOpen ? "translate-x-0 w-[80%]" : "-translate-x-full"
            } md:translate-x-0 transition-transform duration-300 ease-in-out`}
          >
            <div className="left-0 h-full w-full">
              <SideMenu />
            </div>
          </section>

          <section className=" w-full md:ml-[10rem] lg:ml-[16rem] relative">
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
