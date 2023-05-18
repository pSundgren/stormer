import React from "react";
import { NavLink } from "react-router-dom";

/* Components */
import logo from "../images/logo.svg";
import {
  AboutIcon,
  GenerateIdeaIcon,
  HomeIcon,
  HowIcon,
} from "../images/icons/Icons";

/* Classnames */
const active =
  "flex justify-center items-center p-3 border border-gray-600 rounded-lg bg-gray-50 opacity-100 bg-opacity-20 border-opactiy-100 shadow-sm transition-all transition-all";
const inactive =
  "flex justify-center items-center p-3 border border-gray-600 rounded-lg bg-gray-50 opacity-30 bg-opacity-20 border-opactiy-30 shadow-sm hover:opacity-100 hover:border-opactiy-100 hover:shadow-md transition-all";

const Header = () => {
  return (
    <>
      <header className="absolute top-5 left-5">
        <ul className="flex flex-row space-x-5">
          <li>
            <NavLink
              exact
              to=".."
              relative="path"
              reloadDocument
              className={({ isActive }) => (isActive ? active : inactive)}
            >
              <HomeIcon />
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/generate"
              relative="path"
              reloadDocument
              className={({ isActive }) => (isActive ? active : inactive)}
            >
              <GenerateIdeaIcon />
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/how"
              relative="path"
              reloadDocument
              className={({ isActive }) => (isActive ? active : inactive)}
            >
              <HowIcon />
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/about"
              relative="path"
              reloadDocument
              className={({ isActive }) => (isActive ? active : inactive)}
            >
              <AboutIcon />
            </NavLink>
          </li>
        </ul>
      </header>
      <img src={logo} alt="logotype" className="w-20 absolute top-9 right-9" />
    </>
  );
};

export default Header;
