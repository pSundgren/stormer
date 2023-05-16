import React from "react";

/* Components */
import logo from "../images/logo.svg";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center w-screen h-screen max-w-2xl mt-20">
        <div className="flex flex-col justify-center items-center px-5">
          <img src={logo} alt="logotype" className="w-fit" />
          <h1 className="text-xl font-base text-center mt-10 text-gray-50">
            Random app idea generator for designers and developers
          </h1>
          <p className="text-sm text-center mt-2">
            This tool is developed for new and junior UX/UI designers to allow
            them to practise on being assigned a project to design and explore
            and add to their design portfolio 🌱
          </p>
          <button className="rounded-lg mt-6 py-3 px-6 font-semibold text-sm text-sky-50 bg-sky-700 shadow-md hover:bg-sky-600 transition-all">
            Let's get started!
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
