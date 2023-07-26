import Head from 'next/head'
import { About } from '../components/About'
import { Header } from '../components/Header'
import { HomeHero } from '../components/Home'
import { Links } from '../components/Links'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import { ScrollTop } from '../components/ScrollTop'
import { Section } from '../styles/styles'
import { CardContact } from '../components/CardContact'
import { Footer } from '../components/Footer'
import { Education } from '../components/Education'
import { Work } from '../components/Work'

export default function Home() {
  return (
    <>
      <Head>
        <title>Umoren Christopher | Software Engineer</title>
      </Head>

      <Header />
      <Section>
        <Links />
        <ScrollTop />
        <HomeHero />
        <About />
        <Skills />
        {/* <Education />
        <Work />  */}
        <Projects />
        <CardContact />
      </Section>
      <Footer />
    </>
  )
}
