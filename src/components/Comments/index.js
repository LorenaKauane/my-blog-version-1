import React from "react"
import PropTypes from "prop-types"
import ReactDisqusComments from "react-disqus-comments"

import * as S from "./styles"

const Comments = ({ url, title, locale }) => {
  const completeURL = `https://lorenakauaneph.com.br${url}`

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>
        {locale === "en"
          ? "What did you think of the post?"
          : "O que achou do post?"}
      </S.CommentsTitle>
      <ReactDisqusComments
        shortname="lorenakauaneph"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments
