import {IResolvers} from "apollo-server";
import fetch from "node-fetch";

import {MercadoLibreSearchResponse, RawProduct, Product} from "./types";

const resolvers: IResolvers = {
  Query: {
    products: (_, args: {query: string}): Promise<Product[]> =>
      fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${args.query}`)
        .then((res) => res.json())
        .then((response: MercadoLibreSearchResponse) =>
          response.results.slice(0, 10).map((rawProduct) => ({
            id: rawProduct.id,
            title: rawProduct.title,
            image: rawProduct.thumbnail,
            price: rawProduct.price,
            location: rawProduct.address.state_name,
          })),
        ),
    product: (_, args: {id: string}): Promise<Product> =>
      fetch(`https://api.mercadolibre.com/items/${args.id}`)
        .then((res) => res.json())
        .then((rawProduct: RawProduct) => ({
          id: rawProduct.id,
          price: rawProduct.price,
          title: rawProduct.title,
          image: rawProduct.thumbnail,
          location: rawProduct.seller_address.state.name,
        })),
  },
};

export default resolvers;
