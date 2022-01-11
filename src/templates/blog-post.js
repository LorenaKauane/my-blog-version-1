import React from "react"
import { graphql } from "gatsby"
import { DateRange } from "@styled-icons/material/DateRange"
import {
  Container,
  ContainerConteudo,
  MainContent,
  Content,
  PostHeader,
  PostTitle,
  PostDate,
  Image,
  PostImage,
  PostRow,
  PostTag,
} from "../components/Post/styles"
import Comments from "../components/Comments"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Autor from "../components/Autor"
import RecommendedPosts from "../components/RecomendacaoPosts"

import PostRelacionados from "../components/PostRelacionados"
const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <Layout locale={pageContext.locale}>
      <SEO
        title={post.frontmatter.titulo}
        description={post.frontmatter.titulo}
        image={post.frontmatter.image.childImageSharp.fluid.src}
      />
      <Container>
        <Content>
          <PostImage>
            <Image fluid={post.frontmatter.image.childImageSharp.fluid}></Image>
          </PostImage>
          <PostRelacionados
            locale={pageContext.locale}
            currentArticleSlug={post.fields.slug}
            tag={post.frontmatter.tag}
          />
          <ContainerConteudo>
            <div style={{ minHeight: "10px !important" }}>
              <MainContent>
                <PostRow>
                  <PostTag> {post.frontmatter.tag}</PostTag>
                  <PostDate>
                    <DateRange size="20" color="#9999" />
                    {post.frontmatter.data}
                  </PostDate>
                </PostRow>
                <PostHeader>
                  <PostTitle>{post.frontmatter.titulo}</PostTitle>
                  <PostDate>• {post.timeToRead} min de leitura</PostDate>
                </PostHeader>
                <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
              </MainContent>
            </div>
          </ContainerConteudo>

          <Autor locale={pageContext.locale} />
        </Content>
      </Container>
      <RecommendedPosts next={next} previous={previous} />
      <Comments
        locale={pageContext.locale}
        url={post.fields.slug}
        title={post.frontmatter.titulo}
      />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!, $locale: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { locale: { eq: $locale } }
    ) {
      fields {
        slug
      }
      frontmatter {
        titulo
        data(locale: "pt-br", formatString: "DD[/]MM[/]YYYY")
        tag
        image {
          childImageSharp {
            fluid(maxWidth: 900) {
              src
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
