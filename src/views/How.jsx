import React from "react";
import { SecondaryButton } from "../components/Button";

const How = () => {
  return (
    <>
      <div className="flex flex-col justify-center w-screen h-screen max-w-2xl mt-5">
        <div className="flex flex-col justify-center items-start px-4">
          <h1 className="text-3xl font-semibold text-gray-50">
            We use ChatGPT to generate ideas!
          </h1>
          <p className="text-sm mt-6">
            To give more information to design from we utilise ChatGPTs open API
            to generate an idea just for you. You simply give us the device you
            want to design for and the client and we (politely) ask ChatGPT to
            generate an idea.
          </p>
          <a
            href="https://platform.openai.com/overview"
            target="_blank"
            rel="noreferrer"
          >
            <SecondaryButton label="Read more about ChatGPT’s API" />
          </a>
        </div>
      </div>
    </>
  );
};

export default How;
