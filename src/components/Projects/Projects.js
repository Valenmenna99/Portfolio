import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Group from "../../Assets/Projects/Group.png";

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
    title="Adventure Works Cycles"
    description={
      <>
        Dashboard integral desarrollado en Power BI para Adventure Works Cycles, utilizando un modelo de datos relacional, procesos de transformación en Power Query y medidas DAX para el análisis de ventas, ingresos y márgenes.

        <br />
        <br />

        Incluye KPIs clave, comparativos y visualizaciones interactivas que permiten evaluar el rendimiento comercial, identificar tendencias y detectar oportunidades estratégicas para la toma de decisiones.

        <br />
        <br />

        <strong>IA utilizada:</strong> ChatGPT y Copilot para asistencia en la creación de medidas DAX, optimización de visualizaciones y generación de insights de negocio.
      </>
    }
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
    description={
      <>
        Proyecto de análisis deportivo desarrollado con Python, Kaggle y Looker Studio, enfocado en la evaluación del rendimiento de jugadores y equipos a través de métricas ofensivas, defensivas y modelos predictivos.

        <br />
        <br />

        Incluye procesos de preparación y transformación de datos, construcción de KPIs y visualizaciones interactivas para facilitar la interpretación de resultados y la toma de decisiones basadas en datos.

        <br />
        <br />

        <strong>IA utilizada:</strong> Gemini como apoyo en el análisis exploratorio de datos deportivos, interpretación de métricas y validación de hallazgos. También se utilizó para asistir en el desarrollo de la interfaz de predicción y en la construcción del modelo predictivo.
      </>
    }
    ghLink="https://github.com/Valenmenna99/TrueShot.git"
  />
</Col>

                    <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Group}
              isBlog={false}
              title="LIA LAB"
              description={
                <>
                  Proyecto personal de análisis de datos enfocado en el estudio integral de la actividad de un laboratorio clínico.

                  <br />
                  <br />

                  El objetivo es analizar métricas clave como la cantidad de análisis realizados, pacientes atendidos, obras sociales y su variación mes a mes, con el fin de generar insights que ayuden a la toma de decisiones y a la optimización de procesos.

                  <br />
                  <br />

                  <strong>IA utilizada:</strong> ChatGPT y Cursor para asistencia en la creación y ajuste de scripts de automatización para actualizar datos desde el sistema del laboratorio a Power BI, además de apoyo en la elaboración de conclusiones ejecutivas.
                </>
              }
              ghLink="https://github.com/Valenmenna99/LIA-LAB.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;


