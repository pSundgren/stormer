import React, { useState, useEffect } from "react";
import { useTransition, animated, useSpringRef } from "@react-spring/web";

/* Components */
import logo from "../images/logo.svg";

/* Form pages */
const pages = (props) => [
  () => <animated.div>A</animated.div>,
  () => <animated.div>B</animated.div>,
  () => <animated.div>C</animated.div>,
];

const Home = () => {
  const [index, set] = useState(0);
  const onClick = () => set((state) => (state + 1) % 3);

  const transRef = useSpringRef();

  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  useEffect(() => {
    transRef.start();
  }, [index, transRef]);

  return (
    <>
      <div className="flex flex-col justify-center w-screen h-screen max-w-2xl">
        <div className="flex flex-col justify-center items-center px-5">
          <img src={logo} alt="logotype" className="w-40" />
          <h1 className="text-xl font-base text-center mt-10 text-gray-50">
            Random app idea generator for designers and developers
          </h1>
          <p className="text-sm text-center mt-2">
            This tool is developed for new and junior UX/UI designers to allow
            them to practise on being assigned a project to design and explore
            and add to their design portfolio 🌱
          </p>
          <button
            className="rounded-lg mt-6 py-3 px-6 font-semibold text-sm text-sky-50 bg-sky-700 shadow-sm hover:bg-sky-600 transition-all"
            onClick={onClick}
          >
            Let's get started!
          </button>
        </div>
        {/* TODO: Fix this
        transitions((i) => {
          const Page = pages[i];
          return <Page />;
        })*/}
      </div>
    </>
  );
};

export default Home;
