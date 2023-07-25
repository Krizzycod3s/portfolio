/* eslint-disable @next/next/no-img-element */
import { FiDownload } from 'react-icons/fi'
import { Container, Title } from '../../styles/styles'
import { ButtonPrimary } from '../../styles/styles'
import { AboutContainer } from './styles'
import { DownloadSimple } from 'phosphor-react'
import { BiUserPin } from 'react-icons/bi'
import { motion } from "framer-motion";

export function About() {
  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
    <Container id="about">
      <Title>
      About
        <span>
          <BiUserPin /> 
        </span>
      </Title>
      <AboutContainer>
        <div className="AboutImg">
          <img
            className="AboutImg"
            src="/krizzy.jpg"
            alt="krizzydev"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
          <p>
                Hello! I&lsquo;m Christopher. I have extensive experience in building
                web applications from the ground up. My passion for coding and
                problem-solving drives me to create intuitive and robust
                software solutions that exceed client expectations.
              </p>
              <p>
                My technical skillset includes proficiency in front-end
                technologies such as HTML, CSS, JavaScript, React and NextJS. I
                am also adept at back-end development using languages such as
                NodeJS, Python, and PHP, and am comfortable working with
                databases such as MySQL, MongoDB, and PostgreSQL.
              </p>
              <p>
                I believe in writing clean, well-documented code that is easy to
                maintain and scale. I enjoy working collaboratively with
                designers, product managers, and other developers to create
                innovative solutions that exceed expectations.
              </p>
              <p>Let&lsquo;s connect and build something amazing together!</p>
          </div>

          <a href="/pdf/krizzy-cv.pdf" download>
            <ButtonPrimary>
              <b>Download CV</b> <FiDownload size={20}  />
            </ButtonPrimary>
          </a>
        </div>
      </AboutContainer>
    </Container>
    </motion.div>
  );
}
