import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis trabajos  <strong className="purple">recientes </strong>
        </h1>
        <p style={{ color: "white" }}>
          Acá muestro algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Fast Food"
              description="Diseño y modelado de base de datos relacional con SQL Server. Incluye múltiples esquemas (ventas, productos, personas, sucursales), normalización y consultas para KPIs operativos."
              ghLink="https://github.com/Valenmenna99/FastFood.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Adventures Works Cycles"
              description="Dashboard integral en Power BI para Adventure Works Cycles, con modelo de datos relacional, transformación en Power Query y medidas DAX para analizar ventas, ingresos y márgenes. Incluye KPIs clave, comparativos y visualizaciones interactivas que permiten evaluar el rendimiento comercial y detectar oportunidades estratégicas."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Biogenesys"
              description="Proyecto de Data Analytics. ETL, integración de múltiples fuentes, visualización en Power BI, storytelling y recomendación de mercados estratégicos."
              ghLink="https://github.com/Valenmenna99/ByogenesisPharm.git"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="True Shot"
              description="Proyecto de análisis deportivo con Python, Kaggle y Looker Studio. Incluye data prep, KPIs, métricas ofensivas, defensivas y probabilidades basadas en rendimiento."
              ghLink="https://github.com/Valenmenna99/TrueShot.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
