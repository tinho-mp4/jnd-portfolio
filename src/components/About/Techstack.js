import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiCsharp,
  SiAmazonaws,
  SiDocker,
  SiTailwindcss,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>

      {/* Frontend Frameworks & Libraries */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>

      {/* Backend & Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>

      {/* DevOps & Cloud */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>

      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      {/* Other Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
    </Row>
  );
}

export default Techstack;