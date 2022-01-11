import React from "react"

import {
  Close,
  TituloProjeto,
  RedirecionaImagemProjeto,
  DescricaoProjeto,
  Row,
  Column,
  RedirecionaParaGit,
} from "./styles"

const DadosModal = ({ openModalImage, projeto }) => {
  return (
    <>
      <Row>
        <TituloProjeto>{projeto.titulo}</TituloProjeto>
        <Close onClick={openModalImage}>Fechar</Close>
      </Row>
      <DescricaoProjeto>{projeto.descricao}</DescricaoProjeto>

      <Row>
        <Column align="center">
          {projeto.linkFront && (
            <RedirecionaParaGit
              href={projeto.linkFront}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo do front-end!
            </RedirecionaParaGit>
          )}
          {projeto.linkBack && (
            <RedirecionaParaGit
              href={projeto.linkBack}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo do back-end!
            </RedirecionaParaGit>
          )}
          {!projeto.linkBack && !projeto.linkFront && (
            <RedirecionaParaGit
              target="_blank"
              href="https://github.com/LorenaKauane"
            >
              Infelizmente esse e um projeto privado, mas se você clicar aqui,
              vai ser redirecionado para meu github, onde tem mais projetos
              legais como esse! =)
            </RedirecionaParaGit>
          )}
        </Column>
        <Column align="center">
          <DescricaoProjeto>Techs</DescricaoProjeto>
          <ul style={{ listStyle: "circle", color: "#fff" }}>
            {projeto.tecnologias.map(tecnologia => (
              <li>{tecnologia}</li>
            ))}
          </ul>
        </Column>
      </Row>
      <RedirecionaImagemProjeto target="_blank" href={projeto.src}>
        Clique aqui para ver a demo!
      </RedirecionaImagemProjeto>
    </>
  )
}

export default DadosModal
