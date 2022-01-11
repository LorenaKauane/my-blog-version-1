import styled from "styled-components"
import Img from "gatsby-image"
import theme from "../../styles/theme"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.color.AZUL_ESCURO};
  margin: 0 auto;
  padding: 0 6vw;

  background: ${props => (props.background ? props.background : "#F5F5F5")};

  @media (max-width: 50rem) {
    padding: 0;
    overflow-y: hidden;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

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
`

export const Imagem = styled(Img)`
  border-radius: 10%;
  height: 27rem;
  background-color: #fff;
  margin: 20px;
  width: 27rem;

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

  @media (max-width: 60rem) {
    height: 20rem;
    width: 20rem;
  }

  @media (max-width: 50rem) {
    height: 10rem;
    width: 10rem;
  }
`

export const TituloNome = styled.p`
  font-size: 2rem;
  font-weight: 800;
  padding: 0 1.4rem;
  @media (max-width: 40rem) {
    font-size: 1.9rem;
    line-height: 1.1;
    padding: 0 1rem;
  }
`

export const DescricaoMenor = styled.p`
  font-weight: 600;
  font-size: 2rem;
  padding: 0 1.4rem;
  padding-bottom: 1rem;
  @media (max-width: 40rem) {
    font-size: 1.5rem;
    line-height: 1.1;
    padding: 0 1rem;
    padding-bottom: 1rem;
  }
`

export const Descricao = styled.p`
  font-size: 1rem;
  padding: 0 1.4rem;
  padding-bottom: 1rem;
  line-height: 1.5;
  @media (max-width: 40rem) {
    padding: 0 1rem;
    font-size: 0.895rem;
  }
`

export const LinkSocial = styled.a`
  border-radius: 20%;
  margin-bottom: 1rem;
  text-decoration: none;
  transition: color 0.5s;
  border: none !important;
`

export const LinkProjeto = styled.div`
  border-radius: 2%;
  margin-bottom: 1rem;
  text-decoration: none;
  transition: color 0.5s;

  margin: 10;
  cursor: pointer;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
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

export const TituloProjeto = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0 1.4rem 1rem;
  color: ${theme.color.ROSA};
  @media (max-width: 40rem) {
    font-size: 1rem;
    line-height: 1.1;
    padding: 0 1rem;
  }
`
