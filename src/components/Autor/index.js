import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Container,
  SectionUser,
  Avatar,
  DadosAutor,
  NomeAutor,
  DescricaoAutor,
  AutorTitle,
  LinkRedirectAbout,
} from "./styles"

import SocialLink from "../SocialLinks"

const Autor = ({ locale }) => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "eu2" }, extension: { eq: "jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container>
      <SectionUser>
        <LinkRedirectAbout
          to={locale === "en" ? "/en/about" : "/about"}
          title="Pagina sobre o autor"
        >
          <Avatar fluid={data.file.childImageSharp.fluid} alt="avatar" />
        </LinkRedirectAbout>
        <DadosAutor>
          <LinkRedirectAbout
            to={locale === "en" ? "/en/about" : "/about"}
            title="Pagina sobre o autor"
          >
            <AutorTitle>
              {locale === "en" ? "Who wrote?" : "Quem escreveu?"}{" "}
            </AutorTitle>
            <NomeAutor>Lorena Kauane Ph.</NomeAutor>
            <DescricaoAutor>Web & Mobile Dev</DescricaoAutor>
          </LinkRedirectAbout>
          <SocialLink flex={true} />
        </DadosAutor>
      </SectionUser>
    </Container>
  )
}

export default Autor
