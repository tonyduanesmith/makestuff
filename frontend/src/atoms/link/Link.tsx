import { StyledLink, StyledExternalLink } from "./styled";

interface Props {
  children: any;
  path: string;
  external?: boolean;
}

const Link = ({ path, children, external = false }: Props) =>
  external ? (
    <StyledExternalLink href={path}>{children}</StyledExternalLink>
  ) : (
    <StyledLink to={path}> {children} </StyledLink>
  );

export default Link;
