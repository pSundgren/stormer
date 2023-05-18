import React from "react";
import { Link } from "react-router-dom";
import { SecondaryButton } from "../components/Button";

const About = () => {
  return (
    <div className="flex flex-col justify-center w-screen h-screen max-w-2xl mt-5">
      <div className="flex flex-col justify-center items-start px-5">
        <h1 className="text-3xl font-semibold text-gray-50">
          What’s the backstory of this project?
        </h1>
        <p className="text-sm mt-6">
          After an assignment as UX/UI Designer of a company I found myself out
          looking for a new job. During my assignment I’d been working on this
          company’s website and app design. As I was looking for new jobs I
          realised that the market was tough so say the least and I needed to
          expand my own design portfolio in order to make myself an attractive
          designer for open positions.
        </p>
        <p className="text-sm mt-2">
          However, I found that figuring out a fake project to design and
          investigate was a tedious process until I started using ChatGPT for
          ideas. I then thought that I may not be along with this problem and
          decided to create a solution that just required some point-and-click
          actions to generate an idea.
        </p>
        <p className="text-sm mt-2">
          And voilà, the random app idea generator was born! 🌱
        </p>
        <SecondaryButton label="Try it out!" to="/generate" />
      </div>
    </div>
  );
};

export default About;
