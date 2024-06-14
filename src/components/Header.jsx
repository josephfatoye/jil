import { useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";

function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  const handleToggle = () => setMenuToggle(!menuToggle);
  return (
    <div className="bg-black relative w-full p-2 flex flex-row items-center justify-around">
      <p className="text-2xl text-white">Jil</p>
      <div className="hidden md:flex flex-row items-center justify-center w-max space-x-6">
        <p className="text-base text-blue-400 cursor-pointer">About</p>
        <p className="text-base text-blue-400 cursor-pointer">Blog</p>
        <p className="bg-blue-400 text-white p-2 rounded-lg cursor-pointer">
          Get Started
        </p>
      </div>
      <div className="flex items-center justify-center md:hidden">
        <RiMenu5Fill
          className="text-black text-sm cursor pointer"
          onClick={handleToggle}
        />
      </div>

      {menuToggle && (
        <div className="md:hidden absolute z-50 w-screen h-screen backdrop-blur-md flex items-center justify-center">
          <div className="flex items-center justify-center bg-blue-2">
            <p className="text-base cursor-pointer">About</p>
            <p className="text-base cursor-pointer">Blog</p>
            <p className="text-base cursor-pointer bg-blue-400 text-white p-2 rounded-lg">
              Get Started
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
