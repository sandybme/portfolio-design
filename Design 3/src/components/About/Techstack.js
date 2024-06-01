import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";

import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiMysql,
  SiMicrosoftazure,
  SiFastapi,
  SiTwilio,
  SiBootstrap,
  SiDocker,
  SiAmazonaws,
  SiOpenai,
  SiGooglecloud,
  SiFlask,
  SiDjango,
  SiUnity,
  SiGodotengine

} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  const icons = [
    <DiPython />,
    <DiJavascript1 />,
    <CgCPlusPlus/>,
    <SiFastapi />,
    <SiFlask />,
    <SiDjango />,
    <SiTwilio />,
    <SiBootstrap />,
    <DiGit />,
    <SiDocker />,
    <SiMicrosoftazure />,
    <SiAmazonaws />,
    <SiGooglecloud />,
    <SiFirebase />,
    <SiMysql />,
    <SiPostgresql />,
    <DiMongodb />,
    <SiGodotengine />,
    <SiUnity />,
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

export default Techstack;
