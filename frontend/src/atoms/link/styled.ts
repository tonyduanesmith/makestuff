import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { DisplayType } from "./types";

const linkStyles = css<{ display: DisplayType }>`
  display: ${p => p.display};
  text-decoration: none;
  align-items: center;
  color: ${p => p.theme.palette.grey[500]};

  &:hover {
    color: ${p => p.theme.palette.grey[700]};
  }
`;

export const StyledLink = styled(Link)<{ display: DisplayType }>`
  ${linkStyles}
`;

export const StyledExternalLink = styled.a<{ display: DisplayType }>`
  ${linkStyles}
`;
