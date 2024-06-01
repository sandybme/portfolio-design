import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiOpenai,
  SiMacos,
  SiLinux,
  SiSelenium
} from "react-icons/si";

function Toolstack() {
    const icons = [
      <SiLinux />,
      <SiVisualstudiocode />,
      <SiPostman/>,
      <SiSelenium/>,
      <SiOpenai/>
    ];
  
    const iconCols = icons.map((icon, index) => (
      <Col key={index} xs={4} md={2} className="tech-icons">
        {icon}
      </Col>
    ));


  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {iconCols}
    </Row>
  );
}

export default Toolstack;
