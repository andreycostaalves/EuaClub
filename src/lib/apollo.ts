import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clo9b1eo0b1l701ukap0m1ggj/master',
  cache: new InMemoryCache()
})