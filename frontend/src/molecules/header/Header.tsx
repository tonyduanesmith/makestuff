import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Navigation from "../navigation/Navigation";
import { Link } from "react-router-dom";

import BrandIcon from "../../atoms/brand-icon/BrandIcon";
import navigation from "../../constants/navigation";

const Header = () => {
  const theme = useTheme();
  return (
    <Box boxShadow={1} padding={2} display="flex" alignItems="center" justifyContent="space-between" zIndex="appBar">
      <Link to="/home">
        <Box height={60}>
          <BrandIcon color={theme.palette.primary.main} />
        </Box>
      </Link>
      <Navigation navigation={navigation} />
    </Box>
  );
};

export default Header;
