import React from "react"
import { Container, LinkNumber, ContainerLink, LinkNextAndPrev } from "./styles"
import propTypes from "prop-types"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
  locale,
}) => {
  const definePaginacao = () => {
    const value = Array.from(new Array(numPages), (_, k) => k)

    if (currentPage < 3) {
      return value.slice(0, 5)
    }

    if (numPages - currentPage < 3) {
      return value.slice(-5)
    }
    return value.slice(currentPage - 3, currentPage + 2)
  }

  return (
    <Container>
      <p>
        {currentPage} / {numPages} |
      </p>
      {!isFirst && (
        <ContainerLink>
          <LinkNextAndPrev to={prevPage} color="#fff" background="#242833">
            {locale === "en" ? "← Previous page" : "← Página anterior"}
          </LinkNextAndPrev>
        </ContainerLink>
      )}

      {definePaginacao().map(i => (
        <LinkNumber
          key={`pagination-number${i + 1}`}
          to={`${locale === "en" ? "en" : ""}/${
            i === 0 ? "" : `page/${i + 1}`
          }`}
          color={i + 1 === currentPage ? "#fff" : "#242833"}
          background={i + 1 === currentPage ? " #242833" : ""}
        >
          {i + 1}
        </LinkNumber>
      ))}

      {!isLast && (
        <ContainerLink>
          <LinkNextAndPrev color="#fff" background="#242833" to={nextPage}>
            {locale === "en" ? "Next page →" : "Proxima página →"}
          </LinkNextAndPrev>
        </ContainerLink>
      )}
    </Container>
  )
}

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination
