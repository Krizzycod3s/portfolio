/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { motion } from "framer-motion";
import projects from './projects'
import { AllProjects } from './Github'
import { ProjectsContainer, ProjectsContent } from './styles'
import { Container, Title } from '../../styles/styles'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import Image from 'next/image'

interface Projects {
  slug: string
  url: string
  title: string
  type: string
  img: string
}

export function Projects() {
  return (
    <motion.div
    initial={{ y: 300, opacity: 0 }}
    transition={{ duration: 1.2 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <Container id="projects">
      <Title>
        Projects
        <span><HiOutlineDesktopComputer /></span>
        {/* <img className='vector' src="/vectors/code.svg" alt="" /> */}
      </Title>
      <ProjectsContainer>
        {projects.map(project => {
          return (
            
            <Link href={`/project/${project.url}`} key={project.id}>
              <a>
                <ProjectsContent>
                  <img src={project.img} alt={project.title} />
                  <div className="title">
                    <h2>{project.title}</h2>
                    <span>{project.type}</span>
                    <div className='tags' >
                      {project.tags.map((tag) => {
                        return (
                          <Image
                            width={32}
                            height={32} 
                            key={tag.name} 
                            src={tag.icon} 
                            alt={tag.name} 
                          />
                        )
                      })}
                    </div>
                  </div>
                </ProjectsContent>
              </a>
            </Link>
          )
        })}
      </ProjectsContainer>

      <AllProjects title={"All Projects"} />
    </Container>
    </motion.div>
  )
}
