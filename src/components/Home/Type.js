import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return ( <
    Typewriter options = {
      {
        strings: [
          "Software Engineer",
          "Full-Stack Developer",
          "Data Scientist",
          "Web Developer",
          "Mobile App Developer",
          "UI/UX Designer",
          "Cloud Solutions Architect",
          "Cybersecurity Analyst"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }
    }
    />
  );
}

export default Type;