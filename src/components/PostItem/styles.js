import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import theme from "../../styles/theme"
export const Card = styled(Link)`
  text-decoration: none;
  display: flex;
  padding: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 105%;
  border-bottom: none !important;
  text-decoration: none !important;
  @media (max-width: 40rem) {
    width: 80%;
  }
  @media (min-width: 40rem) {
    width: 50%;
  }
  @media (min-width: 56rem) {
    width: ${props => (props.width ? props.width : 25)}%;
  }
`

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transition: transform 0.5s;
  -webkit-transition: transform 0.5s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    -webkit-transform: scale(1.03);
    .card-image {
      opacity: 1;
    }
  }
`

export const CardInfo = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
  line-height: 1.5em;
`

export const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
`

export const CardData = styled.p`
  font-size: 10px;
  line-height: 1.1em;
  color: #999999 !important;
  margin-bottom: 0.2em;
`

export const CardTag = styled.p`
  font-weight: 800 !important;
  font-size: 10px !important;
  line-height: 1.1em !important;
  color: ${theme.color.ROSA} !important;
  margin-bottom: 0.2em !important;
  text-transform: uppercase !important;
`

export const CardTitle = styled.div`
  font-weight: 800;
  font-size: 20px;
  line-height: 1.1em;
  color: ${theme.color.AZUL_ESCURO};
  margin-bottom: 0.2em;
  padding-bottom: 20px;
`
export const CardImage = styled(Img)`
  height: 200px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  opacity: 0.91;
  img {
    margin: auto !important;
  }
`

export const CardLeiaMais = styled.div`
  font-size: 15px;
  font-weight: 800;
  text-decoration: none;
  color: ${theme.color.ROSA};
  border-bottom: none !important;
  text-decoration: none !important;

  svg {
    color: #fb2660 !important;
  }
`
