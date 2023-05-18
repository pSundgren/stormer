import React from "react";

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
            <button className="rounded-lg mt-6 py-3 px-6 font-semibold text-sm text-sky-500 border border-sky-500 hover:border-sky-300 hover:text-sky-300 transition-all">
              Read more about ChatGPT’s API
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default How;
