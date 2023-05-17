import React from "react";

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="rgba(82, 110, 183, 1)"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
          />
        </svg>
      </a>
    </div>
  );
};

export default ChatGPTLink;
