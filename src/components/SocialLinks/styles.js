import styled from "styled-components"

export const Container = styled.div`
  display: ${props => (props.flex ? "flex" : "block")};
  @media (max-width: 56rem) {
    display: ${props => (props.flex ? "flex" : "none")};
  }
`

export const ContainerIcon = styled.div`
  padding: 1rem;
`

export const LinkSocial = styled.a`
  color: #242833;
  text-decoration: none;
  transition: color 0.5s;
  border: none !important;

  &:hover {
    color: rgba(0, 0, 0, 0.25);
  }
`
