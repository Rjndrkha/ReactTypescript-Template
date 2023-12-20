import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./App.css";

function App() {
  return (
    <div className="w-full h-screen bg-red-300 flex flex-col">
      <header className="bg-red-500 w-full h-12 fixed top-0 z-10 flex justify-center">
        <div className="h-full w-full max-w-6xl bg-white flex items-center relative">
          <div className="md:hidden flex items-center w-full max-w-[4rem] h-full left-0 justify-center absolute">
            <GiHamburgerMenu />
          </div>
          <div>
            <h1 className="text-lg text-orange-500">Test</h1>
          </div>
        </div>
      </header>

      <main className="bg-red-500 mt-16 w-full h-[100vh] flex justify-center">
        <div className="bg-white h-full w-full max-w-6xl relative">
          <div className="absolute bg-red-950 left-0 h-full w-48">
            <h1 className="text-lg text-orange-500">Sidebar</h1>
          </div>

          <section className="ml-48 bg-red-200">
            <h1 className="text-lg text-orange-500">Test</h1>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
