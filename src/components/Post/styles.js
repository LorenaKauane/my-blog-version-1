import styled from "styled-components"
import Img from "gatsby-image"
import theme from "../../styles/theme"
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const ContainerConteudo = styled.div`
  padding: 10px;
  @media (max-width: 56rem) {
    padding: 0;
  }
`

export const ContainerSocialLinks = styled.div`
  height: 10px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`

export const MainContent = styled.div`
  margin: 0 13%;
  max-width: 57%;
  padding: 0px 1rem 1rem;
  background-color: #fff;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  position: relative;
  top: -10rem;

  @media (max-width: 78rem) {
    margin: 0 auto;
    max-width: 750px;
  }

  @media (max-width: 30rem) {
    top: 0px;
    margin: 0 auto;
  }
`

export const Image = styled(Img)`
  height: 450px;
  display: block;
  max-width: 100%;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  opacity: 0.91;
`

export const PostImage = styled.div`
  color: #242833;
  max-width: 90%;
  border-radius: 20px;
  margin: auto;

  img {
    border-radius: 20px !important;
    top: 25px !important;
  }

  @media (max-width: 78rem) {
    max-width: 70rem;
  }

  @media (max-width: 35rem) {
    max-width: 70rem;
    img {
      top: 0 !important;
    }
  }

  @media (max-width: 30rem) {
    display: none;
    max-width: 100%;
    background-color: red;
  }
`

export const PostRow = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 40rem) {
    flex-direction: column;
    max-width: 100%;
  }
`

export const PostHeader = styled.header`
  color: #242833;

  margin: auto;
  @media (max-width: 40rem) {
    max-width: 100%;
  }
`

export const PostTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto !important;

  @media (max-width: 40rem) {
    font-size: 2.8rem;
    line-height: 1.1;
    padding: 0 1rem;
  }
`

export const PostTag = styled.p`
  font-size: 1.1rem !important;
  font-weight: 800 !important;
  padding: 0 1.4rem !important;
  color: ${theme.color.ROSA} !important;
  text-transform: uppercase;
  margin: 0 !important;
  @media (max-width: 40rem) {
    padding: 0 1rem;
  }
`

export const PostDate = styled.p`
  font-size: 1.1rem;
  font-weight: 100;
  padding: 0 1.4rem;
  color: #999999 !important;
  margin: 20px !important;
  @media (max-width: 40rem) {
    padding: 0 1rem;
  }
`

export const PostTimeToRead = styled.p`
  font-size: 1.1rem;
  font-weight: 100;
  padding: 0 1.4rem;

  @media (max-width: 40rem) {
    padding: 0 1rem;
  }
`

export const Content = styled.div`
  flex-grow: 1;

  @media (max-width: 40rem) {
    padding: 1rem 0;
    max-width: 100%;
  }
  code {
    word-wrap: break-word;
  }
  img {
    width: 100%;
    margin: 0px;
    left: 0px;
    opacity: 1;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: #242833;
    font-weight: 500;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;

    @media (max-width: 40rem) {
      padding: 0 1rem;
      word-break: break-word;
    }
  }
  p {
    margin: 0 auto 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;

    @media (max-width: 40rem) {
      padding: 0 1rem;
    }
  }
  blockquote {
    color: ${theme.color.AZUL_ESCURO};
    border-left: 0.3rem solid ${theme.color.ROSA};
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid ${theme.color.AZUL_ESCURO};
    margin: 3rem auto;
  }

  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;

    @media (max-width: 40rem) {
      font-size: 1.875rem;
    }
  }
  h2 {
    font-size: 2.1rem;
    @media (max-width: 40rem) {
      font-size: 1.375rem;
    }
  }
  h3 {
    font-size: 1.6rem;
    @media (max-width: 40rem) {
      font-size: 1.125rem;
    }
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }

  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;
    @media (max-width: 40rem) {
      padding: 0;
    }
  }
  .instagram-media {
    margin: 1rem auto !important;
  }

  a {
    border-bottom: 1px dashed ${theme.color.ROSA};
    color: ${theme.color.ROSA};
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: #242833;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`
