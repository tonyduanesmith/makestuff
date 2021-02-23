import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import NavigationItem from "../../atoms/navigation-item/NavigationItem";

import BrandIcon from "../../atoms/brand-icon/BrandIcon";

const Header = () => {
  const theme = useTheme();

  console.log(theme.palette.primary);
  return (
    <Box width={1} height={60} boxShadow={1} padding={2}>
      <BrandIcon color={theme.palette.primary.main} />
      <NavigationItem path="/contact">Contact</NavigationItem>
    </Box>
  );
};

export default Header;
