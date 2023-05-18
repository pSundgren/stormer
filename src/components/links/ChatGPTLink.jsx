import React from "react";
import { LinkIcon } from "../../images/icons/Icons";

const ChatGPTLink = () => {
  return (
    <div className="absolute p-5 bottom-0 left-0">
      <a
        href="https://openai.com/blog/chatgpt"
        target="_blank"
        rel="noreferrer"
        className="flex items-center space-x-2 text-gray-50"
      >
        <p className="text-xs">Powered by GhatGPT</p>
        <LinkIcon />
      </a>
    </div>
  );
};

export default ChatGPTLink;
