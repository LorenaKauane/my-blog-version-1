import React from "react"
import propTypes from "prop-types"

import { RecommendedWrapper, RecommendedLink } from "./styles"

const RecommendedPosts = ({ next, previous }) => (
  <RecommendedWrapper>
    {previous && (
      <RecommendedLink to={previous.fields.slug} className="previous">
        {previous.frontmatter.titulo}
      </RecommendedLink>
    )}
    {next && (
      <RecommendedLink to={next.fields.slug} className="next">
        {next.frontmatter.titulo}
      </RecommendedLink>
    )}
  </RecommendedWrapper>
)

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      titulo: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      titulo: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPosts
