import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Centerpiece from "../components/Centerpiece"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Centerpiece></Centerpiece>
    </Layout>
  )
}
export default IndexPage
