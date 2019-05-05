import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "react-apollo";
import { client } from "./graphql";
import { ThemeProvider } from "styled-components";

import App from "./components/App/App";
import { Store } from "./context";
import { GlobalStyle, theme } from './styles'

ReactDOM.render(
  <ThemeProvider theme={ theme }>
    <ApolloProvider client={ client }>
      <GlobalStyle/>
      <Store>
        <App/>
      </Store>
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
