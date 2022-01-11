import React from "react"

import { Container, ContainerIcon, LinkSocial } from "./styles"
import Icons from "./Icons"
import links from "./links"

const SocialLinks = ({ flex }) => {
  return (
    <Container flex={flex}>
      {links.map((link, i) => {
        const Icon = Icons[link.component]

        return (
          <ContainerIcon key={i}>
            <LinkSocial
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={30} />
            </LinkSocial>
          </ContainerIcon>
        )
      })}
    </Container>
  )
}

export default SocialLinks
