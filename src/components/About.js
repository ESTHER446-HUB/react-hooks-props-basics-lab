import React from "react";
import Links from "./Links";

function About({ bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* Only show <p> if bio exists and is not empty */}
      {bio ? <p>{bio}</p> : null}
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;

