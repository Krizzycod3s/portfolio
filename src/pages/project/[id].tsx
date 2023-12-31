/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import ReactPlayer from 'react-player'
import projects from '../../components/Projects/projects'
import { Footer } from '../../components/Footer'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import {
  ProjectContainer,
  Banner,
  Description,
  PrintContainer,
  Print,
  ContainerVideo,
  Video
} from '../../styles/project'
import { ButtonAlt, ButtonSecondary, Title } from '../../styles/styles'

import {
  ArrowLeft,
  ChatCenteredText,
  Image as IconImage,
  YoutubeLogo
} from 'phosphor-react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { BsGlobe } from 'react-icons/bs'
import { AllProjects } from '../../components/Projects/Github'

interface Tag {
  id: string
  name: string
  icon: string
}

interface Print {
  id: string
  img: string
  name: string
}

interface Project {
  icon: string
  imgUrl: string
  id: string
  title: string
  description: string
  type: string
  github: string
  web: string
  url: string
  tags: Tag[]
  print: Print[]
  video: string
  backgroundImage: string
}

interface ProjectProps {
  project: Project
}

export const getServerSideProps = async (context: any) => {
  const { id } = context.params

  const project = projects.map(project => ({
    id: project.id,
    link: project.url,
    imgUrl: project.img,
    icon: project.icon,
    title: project.title,
    type: project.type,
    github: project.github,
    web: project.web,
    description: project.description,
    tags: project.tags,
    print: project.print,
    // video: project.video,
    // backgroundImage: project.backgroundImage
  }))

  const idProject = project.find(project => project.link === id)

  return {
    props: {
      project: idProject || null
    }
  }
}

export default function Projeto({ project }: ProjectProps) {
  return (
    <>
      <Head>
        <title>{project.title} | Evander Inácio </title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.imgUrl} />
        <meta property="og:image:secure_url" content={project.imgUrl} />
        <meta name="twitter:image" content={project.imgUrl} />
        <meta name="twitter:image:src" content={project.imgUrl} />
      </Head>

      <ProjectContainer>
        <Banner>
          <img className="bannerUrl" src={project.imgUrl} alt={project.title} />
          <div className="bannerContainer">
            <div className="bannerContent">
              <img src={project.icon} alt={project.title} />
              <div>
                <h1>{project.title}</h1>
                <p>{project.type}</p>
              </div>
            </div>

            <div className="link">
              <Link href={project.web}>
                <a target="_blank">
                  <ButtonAlt>
                    Project online <BsGlobe size={15} />
                  </ButtonAlt>
                </a>
              </Link>
              <Link href={project.github}>
                <a target="_blank">
                  <ButtonAlt>
                    Repositories <FaGithub size={17} />
                  </ButtonAlt>
                </a>
              </Link>
            </div>
          </div>
        </Banner>

        <Description>
          <div className="description">
            <Title>
              Description
              <span>
                <ChatCenteredText /> Description
              </span>
            </Title>
            <p>{project.description}</p>
          </div>
          <div className="tags">
            <h4>Tecnologies</h4>
            {project.tags &&
              project.tags.map(tag => {
                return (
                  <div className="tag-content" key={tag.id}>
                    <img src={tag.icon} alt={tag.name} />
                    <span>{tag.name}</span>
                  </div>
                )
              })}
          </div>
        </Description>

        <PrintContainer>
          <Title>
            Screenshot
            <span>
              <IconImage /> Screen
            </span>
          </Title>
          <Print>
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              showStatus={false}
              showIndicators={true}
              showThumbs={false}
              interval={4000}
            >
              {project.print &&
                project.print.map(print => {
                  return (
                    <Image
                      key={print.id}
                      width={800}
                      height={470}
                      src={print.img}
                      alt={print.name}
                    />
                  )
                })}
            </Carousel>
          </Print>
        </PrintContainer>

        {/* <ContainerVideo>
          <div className="imageVideo">
            <img src={project.backgroundImage} alt={project.title} />
          </div>
          <Title className="title-video">
            Video
            <span>
              <YoutubeLogo /> Video
            </span>
            <img className="vector" src="/vectors/youtube.svg" alt="" />
          </Title>
          <Video>
            <ReactPlayer
              url={project.video}
              width="100%"
              height="100%"
              controls={true}
              pip
              config={{ file: { forceHLS: true } }}
            />
          </Video>
        </ContainerVideo> */}

        <div className="allProjects">
          <AllProjects title={'Veja outros projetos'} />
        </div>
        <Link href={'/#projects'}>
          <ButtonSecondary>
            <a>
              <ArrowLeft
                style={{ marginBottom: '-0.2rem' }}
                weight="bold"
                size={18}
              />{' '}
              Back
            </a>
          </ButtonSecondary>
        </Link>
      </ProjectContainer>

      <Footer />
    </>
  )
}
