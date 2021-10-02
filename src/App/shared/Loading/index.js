import React from "react";
import { css } from "@emotion/react";
import { MoonLoader } from "react-spinners";

import "./styles.scss";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export const Loading = ({ size, children, state }) => {
  if (state)
    return (
      <div className={`loading ${state ? "show" : ""}`}>
        <MoonLoader
          size={size}
          color={"#014f86"}
          speedMultiplier={0.5}
          loading={true}
          className={"loader"}
          css={override}
        />
      </div>
    );

  return children;
};
