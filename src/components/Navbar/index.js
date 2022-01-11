import React, { useState } from "react"

import Logo from "../Logo"

import { Link } from "gatsby"
import Brasil from "../../../static/assets/svg/brasil.png"
import EUA from "../../../static/assets/svg/estados-unidos.png"
import {
  Navigation,
  Toggle,
  Navbox,
  Hamburger,
  NavBoxTitulo,
  BoxNome,
  BoxPagina,
  ParagrafoNome,
  ParagrafoDescricao,
  NavItem,
} from "./styles"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

export default function Navbar({ locale }) {
  const [navbarOpen, setNavbarOpen] = useState(false)
  function NavbarItem() {
    return (
      <>
        {locale === "en" ? (
          <>
            <NavItem to="/en">Home</NavItem>
            <NavItem
              to="/en/about"
              onClick={e => {
                trackCustomEvent({
                  category: "About - Button",
                  action: "Click",
                  label: "Sobre - Pagina clique",
                  value: 43,
                })
              }}
            >
              About
            </NavItem>
          </>
        ) : (
          <>
            <NavItem to="/">Inicio</NavItem>
            <NavItem
              to="/about"
              onClick={e => {
                trackCustomEvent({
                  category: "SOBRE - Button",
                  action: "Click",
                  label: "Sobre - Pagina clique",
                  value: 43,
                })
              }}
            >
              Sobre
            </NavItem>
          </>
        )}
      </>
    )
  }
  return (
    <Navigation>
      <NavBoxTitulo to={locale === "en" ? "/en" : "/"}>
        <Logo />
        <BoxNome>
          <ParagrafoNome>Lorena Kauane</ParagrafoNome>
          <ParagrafoDescricao>Web & Mobile Dev</ParagrafoDescricao>
        </BoxNome>
        <BoxPagina>| Blog</BoxPagina>
      </NavBoxTitulo>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarItem />
          <Link to={locale === "en" ? "/" : "/en"}>
            {locale === "en" ? (
              <img alt="" src={Brasil} width="30" height="30" />
            ) : (
              <img alt="" src={EUA} width="30" height="30" />
            )}
          </Link>
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarItem />
          <Link to={locale === "en" ? "/" : "/en"}>
            {locale === "en" ? (
              <img alt="" src={Brasil} width="30" height="30" />
            ) : (
              <img alt="" src={EUA} width="30" height="30" />
            )}
          </Link>
        </Navbox>
      )}
    </Navigation>
  )
}
