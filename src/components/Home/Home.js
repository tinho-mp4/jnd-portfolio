import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Logo from "../../assets/logo.png";
import Wales from "../../assets/wales.png"

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 5 }} className="heading">
                Hello{" "}
                <span style={{ paddingLeft: '10px'}} className="wave" role="img" aria-labelledby="wave" >
                  <img
                    src={Wales}
                    alt="Welsh Flag"
                    style={{ width: '50px', height: '50px'}} 
                  />
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> JUNED MIAH</strong>
              </h1>

              <div style={{ paddingTop: 10, padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src= {Logo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
