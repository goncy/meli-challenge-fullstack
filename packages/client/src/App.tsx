import React from "react";
import {Input, Stack, Image, Container, Box} from "@chakra-ui/react";
import {Route, Switch, useHistory} from "react-router-dom";

import logo from "./assets/logo.png";
import SearchScreen from "./product/screens/Search";
import ProductScreen from "./product/screens/Product";

interface Form extends HTMLDivElement {
  query: HTMLInputElement;
}

const App: React.FC = () => {
  const history = useHistory();

  function onSearch(event: React.ChangeEvent<Form>) {
    event.preventDefault();

    history.push(`/?query=${event.target.query.value}`);
  }

  return (
    <Stack shouldWrapChildren spacing={6}>
      <Box backgroundColor="primary.400" boxShadow="sm">
        <Container maxWidth={1200} paddingX={6} paddingY={4}>
          <Stack as="form" direction="row" spacing={6} onSubmit={onSearch}>
            <Image src={logo} />
            <Input backgroundColor="white" maxWidth={320} name="query" />
          </Stack>
        </Container>
      </Box>
      <Container margin="auto" maxWidth={1200} paddingX={6}>
        <Box backgroundColor="white" borderRadius={4} boxShadow="md" padding={6} width="100%">
          <Switch>
            <Route exact component={SearchScreen} path="/" />
            <Route exact component={ProductScreen} path="/:id" />
          </Switch>
        </Box>
      </Container>
    </Stack>
  );
};

export default App;
