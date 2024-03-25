import { NavLink } from "react-router-dom";

function Link({ name, to }) {
  return (
    <li className="flex">
      <NavLink
        className={` w-full text-center py-2 text-[0.7rem] md:text-[1rem]  rounded-sm font-medium`}
        to={to}
      >
        {name}
      </NavLink>
    </li>
  );
}

export default Link;
