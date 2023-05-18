import React from "react";
import { Link } from "react-router-dom";

/* Components */
import logo from "../images/logo.svg";

const Home = () => {
  return (
    <div className="flex flex-col justify-center w-screen h-screen max-w-2xl mt-5">
      <div className="flex flex-col justify-center items-start px-5">
        <h1 className="text-3xl font-semibold text-gray-50">
          Want a random idea for an app to expand your expertise as a designer
          or developer?
        </h1>
        <p className="text-sm mt-6">
          This tool is developed for junior UX/UI designers, and developers, to
          allow them to practise on being assigned a project to design and
          explore and add to their design portfolio 🌱
        </p>
        <Link to="/generate" relative="path" reloadDocument>
          <button className="rounded-lg mt-6 py-3 px-6 font-semibold text-sm text-sky-50 bg-sky-700 shadow-sm hover:bg-sky-600 transition-all">
            Let's get started!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
