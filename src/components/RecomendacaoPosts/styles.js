import styled from "styled-components"
import { Link } from "gatsby"
import theme from "../../styles/theme"
export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid ${theme.color.AZUL_ESCURO};
  border-top: 1px solid ${theme.color.AZUL_ESCURO};
  background: ${theme.color.AZUL_ESCURO};
  display: flex;
`

export const RecommendedLink = styled(Link)`
  align-items: center;
  background: ${theme.color.AZUL_ESCURO};
  color: #fff;
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;

  @media (max-width: 50rem) {
    padding: 2rem 1rem;
    line-height: 1.3;
    font-size: 0.9rem;
  }

  &:hover {
    background: #38444d;
  }
  &.previous {
    border-right: 1px solid #38444d;
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`
