import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./theme";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects"
import Contact from "./pages/contact/Contact"


const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
    </ThemeProvider>
  );
}

export default App;
