import Link from "./Link";
import Logo from "../Logo/Logo";
import { CloseCircle, HambergerMenu } from "iconsax-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  function handleMenu() {
    setShowMenu(!showMenu)
  }
  return (
    <>
    <nav className=" absolute z-20 top-0 w-full h-[96px] py-3 pr-5 md:px-9 flex justify-between items-center">
      <Logo />
      <button>
      <HambergerMenu onClick={handleMenu} className="md:hidden" size={28} />
      </button>
      <div className={` transition-all bg-primary md:bg-transparent duration-200 ease-in-out ${showMenu ? '' : 'translate-x-[500px]'} md:translate-x-0 fixed md:static right-0 top-0 h-screen md:h-auto p-4 `}>
      <CloseCircle onClick={handleMenu} className="absolute md:hidden top-4 right-4 cursor-pointer" size={28} />
      <ul className={`flex gap-6 relative top-12 md:top-0 min-w-[220px] flex-col md:flex-row  `}>
        <Link name="Home" to="/home" />
        <Link name="About" to="/about" />
        <NavLink
        to={'/contact'}
          className=" w-full text-center py-2  rounded-sm font-medium text-[0.7rem] md:text-[1rem]"
          >
          Contact
        </NavLink>
      </ul>
          </div>
    </nav>
    <div 	style={{
					backgroundColor: "rgba(128, 128, 128, 0.20)",
				}}
        onClick={handleMenu}
         className={`fixed inset-0 h-screen ${showMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-all duration-200 ease-in-out`}
      ></div>
    </>
  );
}

export default Navbar;
