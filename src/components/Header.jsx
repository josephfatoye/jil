import { useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { IoFastFoodSharp } from "react-icons/io5";

function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  const handleToggle = () => setMenuToggle(!menuToggle);
  return (
    <div className="bg-white bg-opacity-95 fixed font-medium z-10 w-full p-2 flex flex-row items-center justify-between px-4 md:px-12">
      <p className="text-3xl flex items-center md:text-5xl text-orange-400 md:w-full">
        <IoFastFoodSharp />{" "}
        <i className="text-green-400 text-2xl md:text-4xl md:flex-1 md:text-center md:w-full">
          J<span className="text-orange-400">i</span>L
        </i>
      </p>
      <div className="hidden md:flex flex-row items-center justify-center w-max flex-1 whitespace-nowrap space-x-12">
        <p className="text-sm text-black hover:text-orange-400 cursor-pointer">
          About
        </p>
        <p className="text-sm text-black hover:text-orange-400 cursor-pointer">
          Blog
        </p>
        <p className="text-sm bg-green-500 hover:bg-green-400 active:bg-green-300 text-white p-2 rounded-lg cursor-pointer">
          Get Started
        </p>
      </div>
      <div className="flex items-center justify-center md:hidden">
        <RiMenu5Fill
          className="text-green-600 active:text-white text-2xl cursor pointer"
          onClick={handleToggle}
        />
      </div>

      {menuToggle && (
        <div className="md:hidden absolute top-0 left-0 z-50 w-screen min-h-screen flex items-center justify-center">
          <div
            onClick={handleToggle}
            className="absolute backdrop-blur w-screen h-screen"
          />
          <div className="z-50 flex flex-col items-center justify-center space-y-12 my-4 bg-white p-12 rounded-2xl">
            <p className="text-green-400 text-base cursor-pointer font-medium">
              About
            </p>
            <p className="text-green-400 text-base cursor-pointer font-medium">
              Blog
            </p>
            <p className=" text-base cursor-pointer font-medium bg-green-400 text-white p-2 rounded-lg">
              Get Started
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
