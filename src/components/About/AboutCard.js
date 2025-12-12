import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos! Soy <span className="purple">Valentina Menna</span>{" "}
            de <span className="purple">Buenos Aires, Argentina</span>.
            <br />
            Soy {" "}
            <span className="purple">Analista de datos junior.</span> {" "}
            <span className="purple"> </span><br />Actualmente me encuentro desarrollando proyectos 
              de manera autónoma, con el objetivo de seguir practicando, 
              afianzando mis conocimientos y 
              ampliando mi portfolio profesional. {" "}
            <span className="purple"></span>{" "}
            <span className="purple"></span>
            <br />
            <br />
            Vengo del campo de la Bioquímica y actualmente trabajo en un 
            laboratorio clínico. Esta trayectoria me aporta una base sólida 
            en análisis crítico, interpretación de datos, rigurosidad y 
            resolución de problemas, habilidades que fortalecen mi desempeño 
            como analista y complementan mi formación en Data Analytics.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Las desiciones valen más cuando están respaldadas por datos"{" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
