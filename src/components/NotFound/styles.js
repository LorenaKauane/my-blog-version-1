import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  max-width: 750px;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  text-decoration: none;

  color: #252a39;
  font-size: 2rem;
  align-content: center;

  @media (max-width: 30rem) {
    top: 1rem;
  }
`
