import { useState } from 'react'
import Link from 'next/link'
import { List, X } from 'phosphor-react'

import { HeaderContainer, MobileIcon, NavMenu, Icons } from './styles'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export function Header() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <HeaderContainer style={{ position: 'fixed' }}>
      <div className="mobile-content">
        <a href={'/'}>
         <img className='vector' src="/icon.svg" alt="logo" /> <span>C</span>U
        </a>
        <MobileIcon onClick={handleOpen}>
          {open ? (
            <X size={24} weight="bold" />
          ) : (
            <List size={24} weight="bold" />
          )}
        </MobileIcon>
      </div>

      <NavMenu onClick={handleOpen} open={open}>
        <ul>
          <li>
            <Link href={'/'}>
              <a>
                <span>Home</span>
              </a>
            </Link>
          </li>

          <li>
            <Link href={'#about'} scroll={false}>
              <a>
                <span>About</span>
              </a>
            </Link>
          </li>

          <li>
            <Link href={'#skills'} scroll={false}>
              <a>
                <span>Skills</span>
              </a>
            </Link>
          </li>

          {/* <li>
            <Link href={'#experience'} scroll={false}>
              <a>
                <span>Experience</span>
              </a>
            </Link>
          </li> */}

          <li>
            <Link href={'#projects'} scroll={false}>
              <a>
                <span>Projects</span>
              </a>
            </Link>
          </li>

          <li>
            <Link href={'#contact'} scroll={false}>
              <a>
                <span>Contact</span>
              </a>
            </Link>
          </li>
        </ul>

        <Icons>
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
            <a
              target="_blank"
              aria-label="Link to contact via whatsapp"
            >
              <FaWhatsapp />
            </a>
          </Link>
        </Icons>
      </NavMenu>
    </HeaderContainer>
  )
}
