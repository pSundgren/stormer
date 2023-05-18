import React from "react";
import { Link } from "react-router-dom";

/* Components */
import logo from "../images/logo.svg";
import { PrimaryButton } from "../components/Button";

const Home = () => {
  return (
    <div className="flex flex-col justify-center w-screen h-screen max-w-2xl">
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
        <PrimaryButton label="Let's get started" to="/generate" />
      </div>
    </div>
  );
};

export default Home;
