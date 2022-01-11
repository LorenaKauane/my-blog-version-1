import React, { useState } from "react"

import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import {
  Container,
  Row,
  Column,
  Imagem,
  TituloNome,
  DescricaoMenor,
  Descricao,
  LinkSocial,
  LinkProjeto,
  TituloProjeto,
} from "../components/About/styles"

import SocialLink from "../components/SocialLinks"
import links from "../components/About/links"
import Icons from "../components/About/Icons"
import DadosModal from "../components/Modal"

import projetos from "../components/About/projetos"
import Modal from "react-modal"
import aboutConstant from "../constants/about"

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.58)",
  },
  content: {
    top: "100px",
    bottom: "20%",
    border: 0,
    background: "#242833",
  },
}
const About = props => {
  const [openModal, setOpenModal] = useState(false)
  const [projeto, setProjeto] = useState({})
  const data = useStaticQuery(graphql`
    query {
      fotoMinha: file(name: { eq: "eu" }, extension: { eq: "jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const locale = props.pageContext.locale

  function openModalImage(projeto) {
    setOpenModal(true)
    setProjeto(projeto)
  }

  function closeModal() {
    setOpenModal(false)
  }

  return (
    <Layout locale={locale}>
      <SEO title="Sobre" />
      <Container background="#fff">
        <Row>
          <Column align="flex-start">
            <TituloNome>Lorena Kauane Ph.</TituloNome>
            <DescricaoMenor>Web & Mobile Dev</DescricaoMenor>
            <Descricao>{aboutConstant[locale].descricaoTitulo}</Descricao>
            <Descricao>{aboutConstant[locale].descricao2}</Descricao>
            <Descricao>{aboutConstant[locale].descricao3}</Descricao>
            <Descricao>{aboutConstant[locale].descricao4}</Descricao>

            <Descricao>{aboutConstant[locale].descricao5}</Descricao>
          </Column>
          <Column align="center">
            <Imagem
              fluid={data.fotoMinha.childImageSharp.fluid}
              alt="Foto minha "
            />
          </Column>
        </Row>
      </Container>

      <Container>
        <Row>
          <Column align="center">
            <DescricaoMenor>{aboutConstant[locale].habilidades}</DescricaoMenor>
          </Column>
        </Row>

        <Row>
          {links.map((link, i) => {
            const Icon = Icons[link.component]

            return (
              <Column align="center" key={i}>
                <LinkSocial
                  title={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img width={50} alt={link.labe} src={Icon} color="#fff" />
                </LinkSocial>
                {link.label}
              </Column>
            )
          })}
        </Row>
      </Container>
      <Container background="#fff">
        <Row>
          <Column align="center">
            <DescricaoMenor>{aboutConstant[locale].projetos}</DescricaoMenor>
          </Column>
        </Row>
        {projetos[locale].projetos.map((projeto, i) => (
          <LinkProjeto
            key={i}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => openModalImage(projeto)}
          >
            <Row isRowResponsive={true}>
              <Column align="flex-start">
                <TituloProjeto>{projeto.titulo}</TituloProjeto>
                <Descricao>{projeto.resumo}</Descricao>
              </Column>
            </Row>
          </LinkProjeto>
        ))}
        <Modal isOpen={openModal} style={customStyles} contentLabel="Modal">
          <DadosModal openModalImage={closeModal} projeto={projeto} />
        </Modal>
      </Container>
      <Container>
        <Row>
          <Column align="center">
            <DescricaoMenor>
              {aboutConstant[locale].contatoTitulo}
            </DescricaoMenor>
            {aboutConstant[locale].contato}
            <SocialLink flex={true} />
          </Column>
        </Row>
      </Container>
    </Layout>
  )
}

export default About
