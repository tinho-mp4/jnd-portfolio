import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// New: import JSON data source
import projects from "../../data/projects.json";

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
          {projects.items.map((p, idx) => (
            <Col md={4} className="project-card" key={idx}>
              <ProjectCard
                imgPath={p.imgPath}
                isBlog={p.isBlog}
                ghLink={p.ghLink}
                title={p.title}
                description={p.description}
                demoLink={p.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;