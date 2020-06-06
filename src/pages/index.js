import React from "react"
import Layout from "../components/layout/layout"
import Banner from "../components/Banner";
import About from "../components/About";
import Contact from "../components/Contact";
import Testimonial from "../components/Testimonial";

const IndexPage = () => (
  <Layout>
    <Banner/>
    <About/>
    <Testimonial/>
    <Contact/>
  </Layout>
)

export default IndexPage
