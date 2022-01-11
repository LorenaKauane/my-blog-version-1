import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import PostLista from "../components/PostLista"
import SEO from "../components/seo"
import Destaque from "../components/Destaque"

const index = props => {
  const postLista = props.data.listaArtigos.edges
  const postDestaque = props.data.destaques.edges
  const locale = props.pageContext.locale

  return (
    <Layout locale={locale}>
      <SEO title="Home" />

      {postDestaque.length > 0 && (
        <Destaque destaque={postDestaque} locale={locale} />
      )}
      <PostLista
        locale={locale}
        titulo={locale === "en" ? "Latest posts" : "Últimos posts"}
        background="#fff"
        postLista={postLista}
        pageContext={props.pageContext}
      />
    </Layout>
  )
}

export const query = graphql`
  query BlogLista($skip: Int!, $limit: Int!, $locale: String) {
    listaArtigos: allMarkdownRemark(
      sort: { fields: frontmatter___data, order: DESC }
      limit: $limit
      skip: $skip
      filter: {
        frontmatter: {
          locale: { eq: $locale }
          templateKey: { eq: "blog-post" }
        }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            data(locale: "pt-br", formatString: "DD[/]MM[/]YYYY")
            locale
            templateKey
            tag
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            titulo
          }
          timeToRead
        }
      }
    }
    destaques: allMarkdownRemark(
      sort: { fields: frontmatter___data, order: DESC }
      limit: 3
      filter: {
        frontmatter: { locale: { eq: $locale }, destaque: { eq: true } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            data(locale: "pt-br", formatString: "DD[/]MM[/]YYYY")
            tag
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            titulo
            locale
          }
          timeToRead
        }
      }
    }
  }
`

export default index
