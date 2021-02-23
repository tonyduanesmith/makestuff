import { StyledLink } from "./styled";

interface Props {
  children: any;
  path: string;
}

const Link = ({ path, children }: Props) => <StyledLink to={path}> {children} </StyledLink>;

export default Link;
