import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./route/route";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // return (
  //   <div className="w-full h-screen bg-red-300 flex flex-col">
  //     <header className="bg-red-500 w-full h-12 fixed top-0 z-10 flex justify-center">
  //       <div className="h-full w-full max-w-6xl bg-white flex items-center relative">
  //         <div className="md:hidden flex items-center w-full max-w-[4rem] h-full left-0 justify-center absolute">
  //           <GiHamburgerMenu onClick={toggleSidebar} />
  //         </div>
  //         <div>
  //           <h1 className="text-lg text-orange-500">Test</h1>
  //         </div>
  //       </div>
  //     </header>

  //     <main className="bg-red-500 mt-16 w-full h-[100vh] flex justify-center">
  //       {/* sidebar here */}
  //       <div
  //         className={`bg-white h-full w-full max-w-6xl relative ${
  //           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
  //         } md:translate-x-0 transition-transform duration-300 ease-in-out`}
  //       >
  //         {/* <div className="bg-white h-full w-full max-w-6xl relative"> */}
  //         <div className="absolute bg-red-950 left-0 h-full w-48">
  //           <h1 className="text-lg text-orange-500">Sidebar</h1>
  //         </div>

  //         {/* content here */}
  //         {/* <section className="ml-48 bg-red-200">
  //           <h1 className="text-lg text-orange-500">Test</h1>
  //         </section> */}
  //       </div>
  //     </main>
  //   </div>
  // );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
