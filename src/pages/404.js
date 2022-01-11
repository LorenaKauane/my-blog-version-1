import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Container } from "../components/NotFound/styles"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <h1>Ops... Não encontrado</h1>
      <p>O que você pesquisou não está disponivel </p>
    </Container>
  </Layout>
)

export default NotFoundPage
