import About from "./components/About"
import Hero from "./components/Hero"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Skill from "./components/Skill"
import Achievements from "./components/Achievements"
import Reference from "./components/Reference"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Gallary from "./components/Gallary"
function App() {


  return (
    <>
    <Navbar />
    <div id="home">
  <Hero />
</div>

<div id="about">
  <About />
</div>

<div id="education">
  <Education />
</div>

<div id="experience">
  <Experience />
</div>

<div id="skills">
  <Skill />
</div>

<div id="achievements">
  <Achievements />
</div>

<div id="gallary">
  <Gallary />
</div>

     {/* <Reference /> */}
     <Footer />
    </>
  )
}

export default App
