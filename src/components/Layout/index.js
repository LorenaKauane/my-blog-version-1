import React from "react"

import GlobalStyles from "../../styles/global"

import Navbar from "../Navbar"

export default function Layout({ children, locale }) {
  return (
    <div>
      <Navbar locale={locale} />
      <GlobalStyles />
      <main>{children}</main>
    </div>
  )
}
