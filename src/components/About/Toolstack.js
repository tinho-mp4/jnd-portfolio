import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSlack,
  SiGit,
  SiGithub,
  SiJira,
  SiTrello,
  SiPostman,
  SiIntellijidea,
  SiPycharm,
  SiNpm,
  SiNotion,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Development Environments */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>

      {/* Version Control & Collaboration */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>

      {/* Project Management */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTrello />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotion />
      </Col>

      {/* API Testing & Package Management */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNpm />
      </Col>
    </Row>
  );
}

export default Toolstack;