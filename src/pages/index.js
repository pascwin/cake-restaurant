import * as React from "react"
import Seo from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import CtaArea from "../components/CTAArea/CTAArea"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <CtaArea />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
