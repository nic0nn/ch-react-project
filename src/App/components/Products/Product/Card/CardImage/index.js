import React from "react";

export const CardImage = ({ src }) => {
  return (
    <div
      className={"product-card-image"}
      style={{
        backgroundImage: `url(${src})`,
      }}
    ></div>
  );
};
