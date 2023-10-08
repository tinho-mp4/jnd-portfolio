import React from "react";
import Card from "react-bootstrap/Card";
import { CgGym } from 'react-icons/cg';
import { SiRiotgames, SiMyanimelist} from "react-icons/si";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          Hello, I'm <span className="danube">Juned</span> from <span className="danube">Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿</span>.
          <br />
        I'm a 2<span className="superscript">nd</span> year student pursuing Software Engineering at Swansea University.
        <br />
          My enthusiasm lies in bringing creative ideas to life through software development and constantly staying on the cutting edge of technology trends.
          <br />
          <br />
          Beyond coding, I thrive on...
        </p>
          <ul>
            <li className="about-activity">
              <SiRiotgames /> Playing Games
            </li>
            <li className="about-activity">
              <SiMyanimelist /> Reading
            </li>
            <li className="about-activity">
              <CgGym /> Going Gym
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
