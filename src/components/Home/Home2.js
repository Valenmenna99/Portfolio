import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatarmio.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ME <span className="purple"> INTRODUZCO </span>
            </h1>
            <p className="home-about-body">
              Soy Analista de Datos, formada en Data Analytics (Henry), 
              donde incorporé conocimiento y apliqué herramientas para realizar 
              procesos ETL, análisis exploratorio y desarrollar dashboards 
              orientados a la toma de decisiones.
              <br />
              <br />
              Tengo conomiento de herramientas como
              <i>
                <b className="purple">
                  {" "}
                   Excel avanzado, SQL, Python (pandas, numpy, matplotlib, seaborn), 
                   Power BI y LookerStudio{" "}
                </b>
              </i>
              — y disfruto mucho también de realizar el diseño de dashboards
              utilizadno herramientas de diseño, tal como 
              <i>
                <b className="purple">
                  {" "}
                   Figma{" "}
                </b>
              .
              </i>
              <br />
              <br />
              Busco seguir creciendo profesionalmente como Data Analyst, 
              desarrollando proyectos que combinen análisis, 
              visualización y mejora continua.
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
