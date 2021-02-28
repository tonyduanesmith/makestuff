import { StyledLink, StyledExternalLink } from "./styled";
import { DisplayType } from "./types";

interface Props {
  children: any;
  path: string;
  external?: boolean;
  display?: DisplayType;
}

const Link = ({ path, children, external = false, display = "inline-flex" }: Props) =>
  external ? (
    <StyledExternalLink href={path} display={display}>
      {children}
    </StyledExternalLink>
  ) : (
    <StyledLink to={path} display={display}>
      {" "}
      {children}{" "}
    </StyledLink>
  );

export default Link;
