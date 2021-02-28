import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Box from "@material-ui/core/Box";

import navigation from "../constants/navigation";
import Header from "../molecules/header/Header";
import Footer from "../molecules/footer/Footer";

const Routes = () => {
  return (
    <Router>
      <Box display="flex" flexDirection="column" height="100%">
        <Header />
        <Box flex="1 0 auto">
          <Switch>
            {navigation.map(({ path, exact, page }) => (
              <Route exact={exact} path={path} component={page} key={path} />
            ))}
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
};

export default Routes;
