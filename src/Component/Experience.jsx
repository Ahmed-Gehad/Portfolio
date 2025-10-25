import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import goCode from "../imges/mern.png";
import Tailwind from "../imges/Tailwind.png";
import TypeScript from "../imges/typescript.png";
import { Zoom } from "react-awesome-reveal";

// Import additional images (assumed to exist in the imges folder)
import Html from "../imges/html.jpg";
import Css from "../imges/css.jpg";
import ReactImg from "../imges/react.png";
import Github from "../imges/github.jpg";
import Bootstrap from "../imges/bootstrap.jpg";
import Figma from "../imges/figma.png";
import Vite from "../imges/vite.jpg";
import Nextjs from "../imges/nextjs.png";

const Experience = () => {
  const skills = [
    { image: Html, name: "HTML" },
    { image: Css, name: "CSS" },
    { image: ReactImg, name: "React" },
    { image: Github, name: "GitHub" },
    { image: Bootstrap, name: "Bootstrap" },
    { image: Figma, name: "Figma" },
    { image: Vite, name: "Vite" },
    { image: Nextjs, name: "Next.js" },
    { image: Tailwind, name: "Tailwind CSS" },
    { image: TypeScript, name: "TypeScript" },
  ];

  return (
    <section
      className="experience bg-gray-900 text-white py-12 px-4 md:px-8"
      id="Experience"
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
              Experience
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded"></div>
          </Col>

          <Col xs={12} lg={6} className="mb-8 lg:mb-0">
            <Zoom>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5  gap-4 rounded-full
              md:gap-6 mx-auto max-w-3xl">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-4 rounded-lg transition-transform transform hover:scale-105"
                  >
                    <img
                      src={skill.image}
                      alt={`${skill.name} logo`}
                      className="w-12 h-12 md:w-16 md:h-16 object-contain mb-2 rounded-full"
                    />
                    <p className="text-sm md:text-base font-medium">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </Zoom>
          </Col>

          <Col xs={12} lg={6}>
            <Zoom>
              <div className="experience-info bg-gray-800 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-xl hover:shadow-2xl transition-shadow">
                <a href="https://merncore.com/en" target="_blank" rel="noopener noreferrer">
                  <img
                    src={goCode}
                    alt="Merncore Logo"
                    className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-full"
                  />
                </a>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Founder & CEO of Merncore
                  </h3>
                  <p className="text-lg md:text-xl text-gray-300 mt-2">
                    Building Innovative Tech Solutions
                  </p>
                  <p className="text-base md:text-lg text-gray-400 mt-1">
                    Since 2019
                  </p>
                </div>
              </div>
            </Zoom>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;