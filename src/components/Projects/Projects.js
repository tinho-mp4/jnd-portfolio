import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import taxi from "../../assets/projects/taxi.png";
import forest from "../../assets/projects/forest.jpg";
import cortez from "../../assets/projects/cortez.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="danube">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taxi}
              isBlog={false}
              ghLink= "https://github.com/tinho-mp4/jai-taxi"
              title="Jai Taxi Service"
              description="Jai Taxi is both a taxi service and a showcase of my web development skills, crafted using HTML, CSS, and JavaScript."
              demoLink="https://jai-taxi.pages.dev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cortez}
              isBlog={false}
              ghLink= "https://github.com/tinho-mp4/CortezHub"
              title="Cortez Hub"
              description="An immersive gaming app that keeps users updated on the latest game developments and industry news, enhancing their game knowledge. "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forest}
              isBlog={false}
              ghLink= "https://github.com/tinho-mp4/ForestFireNotebook"
              title="Forest Fire Notebook"
              description="Exploring the Algerian Forest Fires Dataset: Analyzing trends to potentially predict forest fires in Algeria. A step towards developing a crucial early warning system for forest fire prevention and management in the region."
            />
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}

export default Projects;
