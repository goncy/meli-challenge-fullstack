import React from "react";
import {useQuery, gql} from "@apollo/client";
import {useParams} from "react-router-dom";
import {Stack, Text, Image, Divider} from "@chakra-ui/react";

import {Product} from "../types";

const PRODUCT = gql`
  query product($id: ID!) {
    product(id: $id) {
      id
      title
      image
      price
    }
  }
`;

interface Query {
  product: Product;
}

interface Variables {
  id: string | null;
}

const ProductScreen: React.FC = () => {
  const {id} = useParams<{id: string}>();

  const {loading, error, data} = useQuery<Query, Variables>(PRODUCT, {
    variables: {id},
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!data) return <p>No results found</p>;

  return (
    <Stack divider={<Divider />} spacing={6}>
      <Stack direction="column" spacing={12}>
        <Image
          boxSize={320}
          margin="auto"
          minWidth={320}
          objectFit="contain"
          src={data.product.image}
        />
        <Stack>
          <Text fontSize="xl" fontWeight="500">
            {data.product.title}
          </Text>
          <Text>
            {data.product.price.toLocaleString("es-AR", {style: "currency", currency: "ARS"})}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductScreen;
