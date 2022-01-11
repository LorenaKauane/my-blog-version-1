import React from "react"
import PropTypes from "prop-types"
import { Container, Titulo, ContainerPosts, ContainerTitulo } from "./styles"
import PostItem from "../PostItem"
import Pagination from "../Pagination"

const PostLista = ({ titulo, background, postLista, pageContext, locale }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const page =
    locale === "en" ? `en/page/${currentPage - 1}` : `/page/${currentPage - 1}`
  const raiz = locale === "en" ? "en/" : "/"
  const prevPage = currentPage - 1 === 1 ? raiz : page
  const nextPage =
    locale === "en" ? `/en/page/${currentPage + 1}` : `/page/${currentPage + 1}`

  return (
    <>
      <Container background={background}>
        <ContainerTitulo>
          <Titulo>{titulo}</Titulo>
        </ContainerTitulo>
        <ContainerPosts>
          {postLista.map(
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
        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          currentPage={currentPage}
          numPages={numPages}
          prevPage={prevPage}
          nextPage={nextPage}
          locale={locale}
        />
      </Container>
    </>
  )
}

PostLista.propTypes = {
  titulo: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
}

export default PostLista
