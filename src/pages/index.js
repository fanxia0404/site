import React from "react"

import './styles.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi People</h1>
    <p>Welcome! Site is still under construction. Coming soon...</p>
  </Layout>
)

export default IndexPage
