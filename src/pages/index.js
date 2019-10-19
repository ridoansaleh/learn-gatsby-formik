import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BasicForm from "./home/form"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>Hello Ridoan</div>
    <BasicForm />
  </Layout>
)

export default IndexPage
