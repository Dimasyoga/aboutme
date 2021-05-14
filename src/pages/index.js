import * as React from "react"
import '../style/main.scss';

import Seo from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Works from "../components/works"
import Contact from "../components/contact"
import Footer from "../components/footer"

const IndexPage = () => (
  <div>
    <Seo />
    <Hero />
    <About />
    <Works />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage
