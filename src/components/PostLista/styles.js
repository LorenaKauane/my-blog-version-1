import styled from "styled-components"
import theme from "../../styles/theme"
export const Container = styled.div`
  display: flex;
  -webkit-display: box;
  -moz-display: box;
  -ms-display: flexbox;
  -webkit-display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  background: ${props => (props.background ? props.background : "#F5F5F5")};
`

export const ContainerPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const ContainerTitulo = styled.div`
  display: flex;

  position: relative;
  justify-content: space-between;
  margin: 0 10vh;
  padding: 30px 5vw 10px;
  align-self: center;

  @media (max-width: 40rem) {
    margin: 0px;
  }

  @media (min-width: 40rem) {
    justify-content: center;
  }
  @media (min-width: 56rem) {
    justify-content: space-between;
  }
`

export const Titulo = styled.p`
  font-size: 30px;
  font-weight: 700;
  color: ${theme.color.AZUL_ESCURO};
`
