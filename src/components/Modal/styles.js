import styled from "styled-components"
import theme from "../../styles/theme"

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 50rem) {
    flex-direction: ${props => (props.isRowResponsive ? "row" : "column")};
    max-width: 100%;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  align-items: ${props => props.align};
  padding-top: 1rem;
  padding-bottom: 2rem;
`

export const RedirecionaImagemProjeto = styled.a`
  text-decoration: none;

  font-size: 1rem;
  font-weight: 600;
  padding: 0 1.4rem 1rem;
  color: ${theme.color.ROSA};
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

  @media (max-width: 50rem) {
    font-size: 1rem;
    line-height: 1.1;
    padding: 0 1rem;
  }
`

export const Close = styled.div`
  color: #aaa;
  line-height: 50px;

  font-size: 1rem;

  &:hover {
    color: #fff;
  }
`

export const TituloProjeto = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0 1.4rem 1rem;
  color: #fff;
  @media (max-width: 40rem) {
    padding: 0 1rem;
  }
`

export const DescricaoProjeto = styled.p`
  font-size: 1rem;
  font-weight: 400;
  padding: 0 1.4rem 1rem;
  color: #fff;
  @media (max-width: 40rem) {
    font-size: 1rem;
    line-height: 1.1;
    padding: 0 1rem;
  }
`

export const RedirecionaParaGit = styled.a`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  padding: 0 1.4rem 1rem;
  color: #fff;
  cursor: pointer;
  @media (max-width: 50rem) {
    font-size: 1rem;
    line-height: 1.1;
    padding: 0 1rem;
  }
`
