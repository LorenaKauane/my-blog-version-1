import styled from "styled-components"
import { Link } from "gatsby"
import theme from "../../styles/theme"

export const Container = styled.section`
  align-items: center;
  color: ${theme.color.AZUL_ESCURO};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1.5rem 3rem;
  justify-content: center;

  @media (max-width: 56rem) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
  }
`

export const LinkNumber = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  margin: 7px;
  padding: 12px;
  color: ${props => props.color};
  background-color: ${props => props.background};
  border-radius: 5px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 56rem) {
    display: none;
  }
`

export const LinkNextAndPrev = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  margin: 7px;
  padding: 5px;
  color: ${props => props.color};
  background-color: ${props => props.background};
  border-radius: 5px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }
`

export const ContainerLink = styled.div`
  padding: 0px 20px 0px;

  @media (max-width: 56rem) {
    display: flex;
    align-items: center;
    padding: 5px;
  }
`
