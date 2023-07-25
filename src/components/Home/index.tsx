/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { PaperPlaneRight } from "phosphor-react";
import { motion } from "framer-motion";

import { ButtonPrimary, Container } from "../../styles/styles";
import { Content, ImgHome, HomeText } from "./styles";

export function HomeHero() {
  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Container>
        <Content>
          <HomeText>
            {/* <div><span><img className="animation" src="/vectors/triangle.svg" alt="" /></span></div>  */}

            <h3>Hello 👋🏾 ,&nbsp; my name is</h3>
            <h1> Christopher Umoren </h1>
            <h2>
            I love building Web Apps
              
            </h2>
            <br />
            <h3> I like to Craft Dynamic and Responsive  <br /> Web Applications with great user experiences.</h3>

            <ButtonPrimary>
              <Link href={"#projects"}>
                <a>
                  <b>Check out my portfolio</b>
                  <PaperPlaneRight
                    style={{ marginBottom: "-0.3rem" }}
                    size={22}
                    weight="bold"
                  />
                </a>
              </Link>
            </ButtonPrimary>
          </HomeText>
          <ImgHome>
            <img src="/projects/portfolio/home.webp" alt="Home" />
          </ImgHome>
        </Content>
      </Container>
    </motion.div>
  );
}
