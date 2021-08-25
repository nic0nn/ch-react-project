import React from "react";

import { Grid, Input } from "@material-ui/core";
import { Search } from "@material-ui/icons";

import "./styles.scss";

export const SearchBar = () => {
  return (
    <div className="search-bar">
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item xs={1}>
          <Search htmlColor="#014f86"/>
        </Grid>
        <Grid item xs={11}>
          <Input
            disableUnderline={true}
            placeholder={"Buscá un producto"}
            id="input-with-icon-grid"
            label="Buscar"
          />
        </Grid>
      </Grid>
    </div>
  );
};

