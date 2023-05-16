import React from "react";

const Header = () => {
  return (
    <>
      <header className="p-5 self-start">
        <ul className="flex flex-row space-x-5">
          <li className="font-semibold text-xs">
            <a href={`/`}>Generate an idea</a>
          </li>
          <li className="font-semibold text-xs">
            <a href={`/how`}>How does it work?</a>
          </li>
          <li className="font-semibold text-xs">
            <a href={`/about`}>About this project</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
