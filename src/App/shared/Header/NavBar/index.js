import React from "react"
import Logo from "../Logo"
import NavLinks from "./NavLinks"

import "./styles.scss"

const NavBar = () => {
  return <nav>
    <Logo />
    <NavLinks />
  </nav>
}

export default NavBar