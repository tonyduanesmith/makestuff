import styled, { css } from "styled-components";

import { StyledImageProps } from "./types";

export const circle = css`
  border-radius: 50%;
`;

export const StyledImage = styled.img<StyledImageProps>`
  max-height: 300px;
  max-width: 100%;
  object-fit: contain;

  ${p => p.frame === "circle" && circle};
`;
