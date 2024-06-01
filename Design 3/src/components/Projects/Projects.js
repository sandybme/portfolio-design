import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

import sphark from "../../Assets/Projects/sphark.png";
import mixpanel from "../../Assets/Projects/mixpanel.png"
import covid from "../../Assets/Projects/covid.png"
import supernote from "../../Assets/Projects/supernote.png"
import chat from "../../Assets/Projects/chat.png"
import eternosoft from "../../Assets/Projects/eternosoft.png"
import ezkaam from "../../Assets/Projects/ezkaam.png"
import zeroocars from "../../Assets/Projects/zeroocars.png"
import dextroware from "../../Assets/Projects/dextroware.png"
import jello from "../../Assets/Projects/jello.png"
import runner from "../../Assets/Projects/runner.png"

function Projects() {
  return (
    <Container fluid className="project-section" id="project">
      <Particle />
      <Container>
        <h1 className="project-heading">
        My Recent <strong className="purple">Freelancing</strong>
        </h1>
        <p style={{ color: "white" }}>
        Here are a few projects I've worked as a freelancer.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sphark}
              isBlog={false}
              title="Sphark Technologies"
              description="Developed the website and internal tools for Sphark Technologies, enabling them to efficiently manage their business operations. These tools included expense management, class scheduling, and student management systems, streamlining their processes and enhancing overall productivity."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://www.spharktechnologies.com/"
            />
          </Col>

          
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eternosoft}
              isBlog={false}
              title="Campus Avenue"
              description="I spearheaded the development of bespoke social media platforms tailored for schools and colleges, fostering seamless communication between staff, alumni, and students. These platforms serve as hubs for sharing event highlights, celebrating student achievements through hall of fame features, and facilitating community engagement. Revolutionize your educational institution's online presence with our innovative solution."
              // ghLink="https://eternosoft.in/"
              demoLink="https://eternosoft.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mixpanel}
              isBlog={false}
              title="Mixpanel Utility"
              description="I crafted a Mixpanel utility for a client, revolutionizing their data management processes. This bespoke tool simplified the complexities of working with Mixpanel, empowering the client to effortlessly handle their data analytics and derive actionable insights to drive business growth."
              ghLink="https://github.com/Balaji2810/mix_panel_import_data_script"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

                    <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ezkaam}
              isBlog={false}
              title="Ezkaam"
              description="crafted a mobile application to revolutionize the building industry, connecting contractors with skilled laborers and helping job-seekers find opportunities effortlessly. Additionally, our VR solution provides an immersive experience, offering a realistic preview of interior designs to enhance decision-making and project visualization. Streamline your construction projects with our innovative technology suite."
              // ghLink="https://github.com/Balaji2810/COVID-19/tree/master"
              demoLink="https://www.ezkaam.in/"       
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zeroocars}
              isBlog={false}
              title="ZerooCars"
              description="Developed a comprehensive website and internal tools for a car rental company, empowering efficient business management. Our solution streamlines booking processes, tracks vehicle availability, and manages customer interactions seamlessly. With tailored analytics and reporting features, we ensure optimal performance and enhanced customer satisfaction, driving success in the car rental industry."
              // ghLink="https://github.com/Balaji2810/COVID-19/tree/master"
              demoLink="https://zeroocars.com/"       
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dextroware }
              isBlog={false}
              title="Dextroware Devices"
              description="Aided an early-stage startup by creating software and a website for their innovative product, dedicated to improving accessibility for challenged individuals. Our solution ensures inclusivity by providing seamless access to the system, empowering users with diverse abilities to navigate and utilize the platform effectively. Together, we're breaking barriers and fostering a more inclusive future."
              // ghLink="https://github.com/Balaji2810/COVID-19/tree/master"
              demoLink="https://dextrowaredevices.com/"       
            />
          </Col>

          

        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={supernote}
              isBlog={false}
              title="Super note!"
              description="Experience the ultimate note-taking revolution with our app, effortlessly capturing audio, video, and images. Seamlessly share your notes with friends, fostering collaboration and connectivity."
              ghLink="https://github.com/Balaji2810/SuperNote"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat with Docs"
              description="Introducing Chat with Docs, where your documents come to life through conversation. Whether it's a captivating storybook or important terms and policies, interact with your content like never before. Explore, discuss, and engage with your documents in a whole new way, making information more accessible and enjoyable."
              ghLink="https://github.com/Balaji2810/Chat-Bot-LangChain"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Covid-19 Tracker"
              description="Amidst the COVID-19 pandemic, I developed a Python-based web scraping tool to gather data from diverse sources on a daily basis. This tool not only aggregated crucial information but also conducted insightful analyses to pinpoint areas of high transmission rates. Furthermore, it utilized predictive algorithms to forecast the spread rate, aiding in proactive measures and decision-making to combat the pandemic effectively."
              ghLink="https://github.com/Balaji2810/COVID-19/tree/master"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          
          
          
          

        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Game </strong> Dev
        </h1>
        <p style={{ color: "white" }}>
          Here are a few games which I build.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jello }
              isBlog={false}
              title="Jello Rush!"
              description="Introducing 'Jello Rush', an electrifying endless jelly runner game packed with advanced obstacles to dodge. Navigate through a vibrant world of wobbling jellies while overcoming challenging hurdles and mastering reflexes. Get ready for an adrenaline-pumping adventure that never stops!"
              ghLink="https://github.com/Balaji2810/GameDev/tree/master/Jello%20Rush"
              demoLink="https://github.com/ea9d8b06-48e8-474b-ab3b-8746c43dd79e"       
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={runner}
              isBlog={false}
              title="Physics Runner Simulator"
              description="Introducing 'Jello Rush', an electrifying endless jelly runner game packed with advanced obstacles to dodge. Navigate through a vibrant world of wobbling jellies while overcoming challenging hurdles and mastering reflexes. Get ready for an adrenaline-pumping adventure that never stops!"
              ghLink="https://github.com/Balaji2810/1st-Game"
              demoLink="https://derg.vercel.app/"       
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
