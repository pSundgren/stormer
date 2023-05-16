import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="absolute top-5 left-5 self-start">
        <ul className="flex flex-row space-x-5">
          <li className="text-xs">
            <NavLink
              exact
              to=".."
              relative="path"
              reloadDocument
              className={({ isActive }) =>
                isActive ? "font-semibold" : "font-base"
              }
            >
              Generate an idea
            </NavLink>
          </li>
          <li className="text-xs">
            <NavLink
              exact
              to="/about"
              relative="path"
              reloadDocument
              className={({ isActive }) =>
                isActive ? "font-semibold" : "font-base"
              }
            >
              About this project
            </NavLink>
          </li>
          <li className="text-xs">
            <NavLink
              exact
              to="/how"
              relative="path"
              reloadDocument
              className={({ isActive }) =>
                isActive ? "font-semibold" : "font-base"
              }
            >
              How does it work?
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
