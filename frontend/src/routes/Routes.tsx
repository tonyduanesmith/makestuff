import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import navigation from "../constants/navigation";
import Header from "../molecules/header/Header";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        {navigation.map(({ path, exact, page }) => (
          <Route exact={exact} path={path} component={page} key={path} />
        ))}
      </Switch>
    </Router>
  );
};

export default Routes;
