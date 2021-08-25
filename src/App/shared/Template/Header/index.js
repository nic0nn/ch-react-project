import React from "react";

import { Grid } from "@material-ui/core";

import { Logo } from "../../Logo";
import { NavBar } from "./NavBar";
import { SearchBar } from "./SearchBar";
import { ShortCuts } from "./ShortCuts";

import "./styles.scss";

export const Header = () => {
  return (
    <header className="header">
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item xs={3}>
          <Logo />
        </Grid>
        <Grid item xs={6}>
          <SearchBar />
        </Grid>
        <Grid item xs={3}>
          <ShortCuts />
        </Grid>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
      </Grid>
    </header>
  );
};
