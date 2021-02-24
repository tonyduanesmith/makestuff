import Box from "@material-ui/core/Box";

import { StyledLink } from "./styled";

interface Props {
  children: string;
  path: string;
}

const NavigationItem = ({ children, path }: Props) => {
  return (
    <StyledLink to={path}>
      <Box component="span" fontWeight="fontWeightBold" fontSize="h6.fontSize">
        {children}
      </Box>
    </StyledLink>
  );
};

export default NavigationItem;
