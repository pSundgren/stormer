import React from "react";

const Header = () => {
  return (
    <>
      <header className="p-5 self-start">
        <ul className="flex flex-row space-x-5">
          <li className="font-semibold text-xs">Generate an idea</li>
          <li className="font-base text-xs">How does it work?</li>
          <li className="font-base text-xs">About this project</li>
        </ul>
      </header>
    </>
  );
};

export default Header;
