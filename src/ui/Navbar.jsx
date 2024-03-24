import Link from "./Link";
import Logo from "../Logo/Logo";

function Navbar() {
  return (
    <nav className=" py-3 px-9 flex justify-between items-center">
      <Logo />
      <ul className="flex  gap-6 mr-6 ">
        <Link name="Home" to="/home" />
        <Link name="About" to="/about" />
        <a
          href="#services"
          className=" w-full h-full text-center py-2  rounded-sm font-medium"
        >
          Services
        </a>
        <a
          href="#contact"
          className=" w-full h-full text-center py-2  rounded-sm font-medium"
        >
          Contact
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
