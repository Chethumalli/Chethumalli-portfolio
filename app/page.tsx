import Navbar from "../src/components/Navbar"
import Hero from "../src/components/Hero"
import Skills from "../src/components/Skills"
import Projects from "../src/components/Projects"
import GithubStats from "../src/components/GithubStats"
import Contact from "../src/components/Contact"
import CursorGlow from "../src/components/CursorGlow"
import CursorTrail from "../src/components/CursorTrail"
import Certifications from "../src/components/Certifications"
import Experience from "../src/components/Experience"
import Education from "../src/components/Education"
import Achievements from "../src/components/Achievements"
import AnimatedBackground from "../src/components/AnimatedBackground"
import Footer from "../src/components/Footer"
import LoadingScreen from "../src/components/LoadingScreen"
import ScrollProgress from "../src/components/ScrollProgress"
export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* <CursorGlow /> */}
{/* <CursorTrail /> */}
      <CursorGlow />
      <CursorTrail />
      <LoadingScreen />

      <ScrollProgress />

      <AnimatedBackground />
      {/* Navbar */}
      <Navbar />

<Hero />

<Skills />

<Experience />

<Education />

<Certifications />

<Achievements />

<Projects />

<GithubStats />

<Contact />

<Footer />

    </main>
  )
}