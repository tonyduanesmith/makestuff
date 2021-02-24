import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Navigation from "../navigation/Navigation";

import BrandIcon from "../../atoms/brand-icon/BrandIcon";
import navigation from "../../constants/navigation";

const Header = () => {
  const theme = useTheme();
  return (
    <Box height={60} boxShadow={1} padding={2} display="flex" alignItems="center" justifyContent="space-between">
      <BrandIcon color={theme.palette.primary.main} />
      <Navigation navigation={navigation} />
    </Box>
  );
};

export default Header;
