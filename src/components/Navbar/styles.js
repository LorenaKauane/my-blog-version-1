import styled from "styled-components"
import { Link } from "gatsby"
import theme from "../../styles/theme"
export const Navigation = styled.nav`
  height: 13vh;

  display: flex;
  background: linear-gradient(to right, #2d313b 0%, #4b4f58 100%);
  border: none;
  position: relative;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 10vw;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    border: none;
    z-index: 1200;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    min-height: 15vh;
  }

  @media (max-width: 320px) {
    width: fit-content;
  }
`

export const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

export const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    background-color: #252a39;
    background: linear-gradient(to right, #2d313b 0%, #4b4f58 100%);
    transition: all 0.3s ease-in;
    top: 13vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }

  @media (max-width: 768px) and (orientation: landscape) {
    top: 15vh;
  }

  @media (max-width: 320px) {
    top: 13vh;
  }
`

export const Hamburger = styled.div`
  background-color: #fff;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #fff;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

export const NavBoxTitulo = styled(Link)`
  text-decoration: none;
  display: flex;
  flex: 1;
  align-items: flex-end;
  color: #fff;
`

export const BoxNome = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  align-items: flex-start;
  padding-left: 20px;
`

export const BoxPagina = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  font-size: 20px;
  padding-left: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ParagrafoNome = styled.p`
  font-weight: 700;
  font-size: 25px;
  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 420px) {
    font-size: 17px;
  }
`

export const ParagrafoDescricao = styled.p`
  font-family: "Montserrat", sans-serif;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 420px) {
    font-size: 13px;
  }
`

export const NavItem = styled(Link).attrs({
  activeStyle: { color: theme.color.ROSA },
})`
  text-decoration: none;
  color: #fff;
  display: inline-block;
  white-space: nowrap;
  margin: 0 3vw;
  transition: all 200ms ease-in;
  position: relative;

  :hover {
    color: ${theme.color.ROSA};
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
