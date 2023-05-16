import React from "react";

/* Components */
import Home from "./views/Home";
import ChatGPTLink from "./components/links/ChatGPTLink";
import Header from "./components/Header";

const bgColor = {
  background:
    "radial-gradient(74.07% 81.68% at 72.12% 103.51%, #292828 0%, #464444 100%)",
};

const App = () => {
  return (
    <div
      className="flex flex-col w-screen h-screen items-center text-gray-300"
      style={bgColor}
    >
      <Header />
      <Home />
      <ChatGPTLink />
    </div>
  );
};

export default App;
