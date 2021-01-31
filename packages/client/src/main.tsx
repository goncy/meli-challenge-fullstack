import React from "react";
import ReactDOM from "react-dom";
import {ApolloProvider} from "@apollo/client";
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";

import theme from "./theme";
import client from "./apollo";
import App from "./App";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
