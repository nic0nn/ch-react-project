import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

import "./styles.scss";

const Header = () => {
  return (
    <header>
      <SearchBar />
      <NavBar />
    </header>
  );
};

export default Header;
