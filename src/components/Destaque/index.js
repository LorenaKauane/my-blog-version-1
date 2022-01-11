import React from "react"

import {
  Container,
  Titulo,
  ContainerPosts,
  ContainerTitulo,
} from "../PostLista/styles"
import PostItem from "../PostItem"

const Destaque = ({ destaque, locale }) => {
  return (
    <>
      <Container>
        <ContainerTitulo>
          <Titulo>
            {locale === "en" ? "Featured posts" : "Posts em destaque"}
          </Titulo>
        </ContainerTitulo>
        <ContainerPosts>
          {destaque.map(
            (
              {
                node: {
                  frontmatter: { data, tag, image, titulo },
                  fields: { slug },
                },
              },
              i
            ) => (
              <PostItem
                locale={locale}
                key={i}
                data={data}
                tag={tag}
                titulo={titulo}
                fluid={image.childImageSharp.fluid}
                redirect={slug}
              />
            )
          )}
        </ContainerPosts>
      </Container>
    </>
  )
}

export default Destaque
