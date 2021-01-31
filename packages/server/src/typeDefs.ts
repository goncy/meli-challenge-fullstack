import {gql} from "apollo-server";

export default gql`
  type Product {
    id: ID!
    image: String
    price: Float
    title: String
    location: String
  }

  type Query {
    product(id: ID!): Product
    products(query: String!): [Product]
  }
`;
