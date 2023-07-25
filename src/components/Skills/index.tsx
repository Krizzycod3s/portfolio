import Image from 'next/image'
import { FileCode } from 'phosphor-react'
import { Container, Title } from '../../styles/styles'
import cardSkills from './skills'
import { SkillsContainer, SkillsContent } from './styles'
import { motion } from "framer-motion";

interface Skills {
  title: string,
  color?: string,
  img?: string,
  id: number,
}

export function Skills() {
  return (
  <motion.div
              initial={{ y: 300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
    <Container id='skills'>
      <Title>
      Skills
        <span><FileCode /> </span>
      </Title>
      <SkillsContainer>
      {cardSkills.map(skill => {
        return (
          <SkillsContent color={skill.color} key={skill.id}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image
              width={60}
              height={60} 
              src={skill.img} 
              alt={skill.title}
              />
              <h4>{skill.title}</h4>
            <span className='border'></span>
          </SkillsContent>
        )
      })}
    </SkillsContainer>
    </Container>
    </motion.div>
  )
}