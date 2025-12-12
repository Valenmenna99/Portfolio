import React from "react";
import { Row, Col } from "react-bootstrap";

import PowerbiIcon from "../../Assets/TechIcons/power-bi-icon-seeklogo.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import LookerS from "../../Assets/TechIcons/Java.svg";
import Excel from "../../Assets/TechIcons/Excel.svg";
import GS from "../../Assets/TechIcons/GS.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={PowerbiIcon} alt="PowerbiIcon" />
        <div className="tech-icons-text">Power BI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={LookerS} alt="lookerS" />
        <div className="tech-icons-text">Looker Studio</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Excel} alt="Excel" />
        <div className="tech-icons-text">Excel</div>
      </Col>

         <Col xs={4} md={2} className="tech-icons">
        <img src={GS} alt="GS" />
        <div className="tech-icons-text">Google Sheet</div>
      </Col>

    </Row>
  );
}

export default Techstack;