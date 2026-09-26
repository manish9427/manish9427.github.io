import React from "react";
import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Engineer",
          "React.js Developer",
          "Next.js Developer",
          "Node.js Developer",
          "Nest.js Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 70,
      }}
    />
  );
};
