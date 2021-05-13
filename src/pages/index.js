import * as React from "react"
import '../style/main.scss';

import Seo from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Footer from "../components/footer"


const IndexPage = () => (
  <div>
    <Seo title="Home" />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage
