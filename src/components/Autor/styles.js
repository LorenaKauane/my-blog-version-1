import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

export const Container = styled.div`
  border-bottom: none !important;
  display: flex;
  margin: 0 13%;
  max-width: 57%;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  position: relative;
  top: -7rem;

  @media (max-width: 78rem) {
    margin: 0 auto;
    max-width: 750px;
  }
  @media (max-width: 30rem) {
    top: 1rem;
  }
`

export const LinkRedirectAbout = styled(Link)`
  border-bottom: none !important;
`

export const SectionUser = styled.section`
  margin: 10px;
  padding: 7px;
  display: flex;
  align-items: center;
`

export const Avatar = styled(Img)`
  border-radius: 44px;
  background-color: white;
  width: 88px;
  height: 88px;

  img {
    margin: auto !important;
  }

  @media (max-width: 30rem) {
    background: red;
    display: none;
  }
`

export const DadosAutor = styled.div`
  margin-left: 10px;
  margin-right: 5px;
`

export const NomeAutor = styled.p`
  margin: 0px 0 5px 0 !important;
  font-size: 20px;
  font-weight: 700 !important;
  line-height: 20px;
`

export const DescricaoAutor = styled.p`
  font-size: 14px;
  line-height: 14px !important;
`

export const AutorTitle = styled.p`
  margin-bottom: 1rem !important;
  font-size: 17px;
  line-height: 14px !important;
`
