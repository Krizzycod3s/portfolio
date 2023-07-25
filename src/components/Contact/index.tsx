import Link from "next/link";
import { motion } from "framer-motion";
import { Envelope, TelegramLogo } from "phosphor-react";
import { Container, Title } from "../../styles/styles";
import { ContainerContact, ContactContent } from "./styles";
import { ButtonSecondary } from "../../styles/styles";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Form } from "./Form";

export function Contact() {
  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Container id="contact">
        <ContainerContact>
          <Title>
            Get In Touch
            <span>
              <Envelope />{" "}
            </span>
          </Title>
          <p>
            {" "}
            I&lsquo;m currently looking for new opportunities, Feel free to
            reach out to me for more information, collaborations or even just to
            say hello. I&lsquo;ll always get back to you.
          </p>
          <Link href="mailto:krizzydev@gmail.com">
            <a target="_blank">
              <ButtonSecondary type="submit">
                Say Hello <TelegramLogo size={15} weight="bold" />{" "}
              </ButtonSecondary>
            </a>
          </Link>

          {/* <Form /> */}
        </ContainerContact>
      </Container>
    </motion.div>
  );
}
