import fetch from "node-fetch";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { GQL_AUTH_TOEKN, GQL_ENDPOINT } from '../config'

export async function getGqlClient(url = GQL_ENDPOINT, token = GQL_AUTH_TOEKN) {
  const client = new ApolloClient({
    link: new HttpLink({
      fetch,
      uri: url,
      headers: {
        Authorization: token,
      },
      fetchOptions: {
        timeout: 40 * 1000,
      },
    }),
    cache: new InMemoryCache({
      addTypename: false,
    }),
    defaultOptions: {
      query: {
        fetchPolicy: "no-cache",
      },
      mutate: {
        fetchPolicy: "no-cache",
      },
    },
  });

  return client;
}

export async function mutate(client, mutation, variables, tries = 3) {
  try {
    return await client.mutate({ mutation, variables });
  } catch (err) {
    if (tries > 0) return await mutate(client, mutation, variables, --tries)
    else throw err
  }
}

export async function query(client, query, variables, tries = 3) {
  try {
    return await client.query({ query, variables });
  } catch (err) {
    if (tries > 0) return await mutate(client, mutation, variables, --tries)
    else throw err
  }
}
