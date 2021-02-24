import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";

import theme from "./theme";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default App;
