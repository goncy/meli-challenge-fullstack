import React from "react";
import {useQuery, gql} from "@apollo/client";
import {useLocation, Link} from "react-router-dom";
import {Stack, Text, Image, Divider} from "@chakra-ui/react";

import {Product} from "../types";

const SEARCH = gql`
  query products($query: String!) {
    products(query: $query) {
      id
      title
      image
      price
    }
  }
`;

interface Query {
  products: Product[];
}

interface Variables {
  query: string | null;
}

const SearchScreen: React.FC = () => {
  const query = new URLSearchParams(useLocation().search);

  const {loading, error, data} = useQuery<Query, Variables>(SEARCH, {
    variables: {query: query.get("query")},
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!data) return <p>No results found</p>;

  return (
    <Stack divider={<Divider />} spacing={6}>
      {data.products.map((product) => (
        <Link key={product.id} to={`/${product.id}`}>
          <Stack direction="row" spacing={6}>
            <Image boxSize={150} minWidth={150} objectFit="contain" src={product.image} />
            <Stack>
              <Text fontSize="xl" fontWeight="500">
                {product.title}
              </Text>
              <Text>
                {product.price.toLocaleString("es-AR", {style: "currency", currency: "ARS"})}
              </Text>
            </Stack>
          </Stack>
        </Link>
      ))}
    </Stack>
  );
};

export default SearchScreen;
