import { NavLink } from "react-router-dom";

function Link({ name, to }) {
  return (
    <li className="flex">
      <NavLink
        className={` w-full h-full text-center py-2  rounded-sm font-medium`}
        to={to}
      >
        {name}
      </NavLink>
    </li>
  );
}

export default Link;
