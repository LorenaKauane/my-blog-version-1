import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { includes, orderBy } from "lodash"
import { Container } from "./styles"
import PostItem from "../PostItem"

const SimilarArticlesComponent = ({ articles, locale }) => (
  <Container to="/">
    {articles.map(
      (
        {
          article: {
            node: {
              frontmatter: { data, tag, image, titulo },
              fields: { slug },
            },
          },
        },
        i
      ) => (
        <>
          <PostItem
            locale={locale}
            key={i}
            data={data}
            tag={tag}
            titulo={titulo}
            fluid={image.childImageSharp.fluid}
            redirect={slug}
          />
        </>
      )
    )}
  </Container>
)

class SimilarArticlesFactory {
  constructor(articles, currentArticleSlug, locale) {
    this.articles = articles.filter(
      aArticle =>
        aArticle.slug !== currentArticleSlug &&
        aArticle.node.frontmatter.locale === locale
    )

    this.currentArticleSlug = currentArticleSlug
    this.maxArticles = 3
    this.tag = ""
    this.locale = locale
  }

  setMaxArticles(m) {
    this.maxArticles = m
    return this
  }

  settag(tagArray) {
    this.tag = tagArray
    return this
  }

  getArticles() {
    const { tag, articles, maxArticles } = this
    const identityMap = {}

    function getSlug(article) {
      return article.node.fields.slug
    }

    function addToMap(article) {
      const slug = getSlug(article)

      if (!identityMap.hasOwnProperty(slug)) {
        identityMap[slug] = {
          article: article,
          points: 0,
        }
      }
    }

    function addtagPoints(article, tag) {
      const tagPoint = 1
      const slug = getSlug(article)

      if (includes(article.node.frontmatter.tag, tag)) {
        identityMap[slug].points += tagPoint
      }
    }

    function getIdentityMapAsArray() {
      return Object.keys(identityMap).map(slug => identityMap[slug])
    }

    for (let article of articles) {
      addToMap(article)
      addtagPoints(article, tag)
    }

    const arrayIdentityMap = getIdentityMapAsArray()
    const similarArticles = orderBy(arrayIdentityMap, ["points"], ["desc"])
    return similarArticles.splice(0, maxArticles)
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query SimilarArticles {
        posts: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___data] }
          limit: 1000
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                locale
                title
                data(locale: "pt-br", formatString: "DD[/]MM[/]YYYY")
                titulo
                tag
                image {
                  childImageSharp {
                    fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { tag, currentArticleSlug, locale } = props

      const articles = data.posts.edges
      const similarArticles = new SimilarArticlesFactory(
        articles,
        currentArticleSlug,
        locale
      )
        .setMaxArticles(3)
        .settag(tag)
        .getArticles()

      return (
        <SimilarArticlesComponent articles={similarArticles} locale={locale} />
      )
    }}
  />
)
