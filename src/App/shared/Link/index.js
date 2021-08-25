import React from "react";

import "./styles.scss";

export const Link = ({ href, text, className }) => {
  return (
    <a href={href} className={className}>
      {text}
    </a>
  );
};
