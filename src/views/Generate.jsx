import React, { useState, useEffect } from "react";
import { useTransition, animated, useSpringRef } from "@react-spring/web";

/* Form pages */
const pages = (props) => [
  () => <animated.div>A</animated.div>,
  () => <animated.div>B</animated.div>,
  () => <animated.div>C</animated.div>,
];

function Generate() {
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
    <div className="flex flex-col items-center justify-center w-screen h-screen max-w-2xl mt-5">
      <p>Hejsan</p>
      {/* TODO: Fix this
        transitions((i) => {
          const Page = pages[i];
          return <Page />;
        })*/}
    </div>
  );
}

export default Generate;
