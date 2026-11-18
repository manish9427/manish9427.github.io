import React from "react";
import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "React.js Developer",
          "Next.js Developer",
          "Node.js Developer",
          "AI & LLM Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 70,
      }}
    />
  );
};
