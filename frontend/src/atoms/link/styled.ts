import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const linkStyles = css`
  display: inline-flex;
  text-decoration: none;
  align-items: center;
  color: ${p => p.theme.palette.grey[500]};

  &:hover {
    color: ${p => p.theme.palette.grey[700]};
  }
`;

export const StyledLink = styled(Link)`
  ${linkStyles}
`;

export const StyledExternalLink = styled.a`
  ${linkStyles}
`;
