import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WizardForm from "../components/home"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <WizardForm />
  </Layout>
)

export default IndexPage
