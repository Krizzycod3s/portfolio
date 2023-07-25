import Link from 'next/link'
import { motion } from "framer-motion";

import { FaWhatsapp } from 'react-icons/fa'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      
      <h4> &copy; {new Date().getFullYear()} Crafted with ❤️ by Umoren Christopher</h4>
      <div className="links">
        <Link href={'https://github.com/Krizzycod3s'}>
          <a target="_blank" aria-label="Link to Github">
            <FiGithub />
          </a>
        </Link>
        <Link href={'#'}>
          <a target="_blank" aria-label="Link to Linkedin">
            <FiLinkedin />
          </a>
        </Link>
        <Link href={'https://api.whatsapp.com/send?phone=07031873773'}>
          <a target="_blank" aria-label="
Link to contact via whatsapp">
            <FaWhatsapp />
          </a>
        </Link>
      </div>
    </FooterContainer>
  )
}
