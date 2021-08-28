import React from "react";
import { css } from "@emotion/react";
import { MoonLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export const Loading = ({ size }) => {
  return (
    <div className="loading">
      <MoonLoader
        size={size}
        color={"#014f86"}
        speedMultiplier={0.5}
        loading={true}
        css={override}
      />
    </div>
  );
};
