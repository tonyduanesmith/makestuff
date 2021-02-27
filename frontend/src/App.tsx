import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider, NormalizedCacheObject } from "@apollo/client";

import theme from "./theme";
import Routes from "./routes/Routes";

const httpLink = createHttpLink({
  uri: "http://localhost:5000",
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </MuiThemeProvider>
    </ApolloProvider>
  );
};

export default App;
