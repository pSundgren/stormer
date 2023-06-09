import React from "react";

/* Components */
import ChatGPTLink from "./components/links/ChatGPTLink";
import Header from "./components/Header";

const bgColor = {
  background:
    "radial-gradient(74.07% 81.68% at 72.12% 103.51%, #292828 0%, #464444 100%)",
};

const App = ({ children }) => {
  return (
    <div className="flex flex-col items-center text-gray-300" style={bgColor}>
      <Header />
      {children}
      <ChatGPTLink />
    </div>
  );
};

export default App;
