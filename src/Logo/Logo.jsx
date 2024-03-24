import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to={"/home"}
      className="text-secondary text-[1.3rem] font-bold  text-center"
    >
      <img
        src="WebMason-logo-final.png"
        className=" w-[140px] h-[60px] object-cover rounded-full "
        alt="logo"
      />
    </Link>
  );
}

export default Logo;
