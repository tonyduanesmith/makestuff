import Box from "@material-ui/core/Box";
import { withRouter, RouteComponentProps } from "react-router-dom";

import NavigationItem from "../../atoms/navigation-item/NavigationItem";
import { NavigationType } from "./types";

interface Props extends RouteComponentProps {
  navigation: Array<NavigationType>;
}

const Navigation = ({ navigation, location, match }: Props) => {
  return (
    <Box display="flex">
      {navigation.map(({ path, label }) => (
        <Box marginX={1} key={path}>
          <NavigationItem path={path}>{label}</NavigationItem>
          {location.pathname.startsWith(path) && <Box marginTop={0.5} height={6} width="100%" bgcolor="primary.main" />}
        </Box>
      ))}
    </Box>
  );
};

export default withRouter(Navigation);
