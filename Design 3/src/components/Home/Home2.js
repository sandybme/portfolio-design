import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import myImg from "../../Assets/snake.png";
import Tilt from "react-parallax-tilt";
// import {
//   AiFillGithub,
//   // AiOutlineTwitter,
//   // AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" >
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent with Snakes 🐍 and love working with them 
              <i>
                <b className="purple"> (Python) </b>
              </i>
              <br />
              <br />
              
              {/* <i> */}
                {/* <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  GameDev.
                </b> */}
                As a backend developer, I am passionate about building innovative web technologies and products. 
                My interests include developing cutting-edge web applications, autoscaling, deployments, and 
                optimizing CI/CD pipelines to ensure efficient and scalable solutions.
              {/* </i> */}
              <br />
              <br />
              Whenever possible, I enjoy playing games and understanding game mechanics.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Balaji2810"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}
export default Home2;
