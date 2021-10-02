import { NavigateBefore, NavigateNext } from "@material-ui/icons";

import React from "react";

const TYPES = {
  next: <NavigateNext />,
  prev: <NavigateBefore />,
};

export const Arrow = ({ style, className, type, onClick }) => (
  <div
    className={`carousel-arrow ${className ?? ""}`}
    style={{...style }}
    onClick={onClick}
  >
    {TYPES[type]}
  </div>
);
