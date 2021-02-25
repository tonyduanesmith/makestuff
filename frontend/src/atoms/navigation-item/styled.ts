import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.palette.common.black};
  transition: color 100ms ease-in;

  &:hover {
    color: ${p => p.theme.palette.grey[700]};
  }
`;
