import styled from "styled-components"

export const Container = styled.div`
  top: 105px;
  margin: 10px;
  height: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 5rem;
  border-bottom: none !important;
  text-decoration: none !important;

  @media (max-width: 78rem) {
    display: none;
  }
`
