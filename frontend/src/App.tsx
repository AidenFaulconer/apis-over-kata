import React from 'react';
import { ApolloClient, ApolloProvider, split, InMemoryCache, HttpLink } from "@apollo/client"
import { WebSocketLink } from "@apollo/client/link/ws"

import { SubscriptionClient } from "subscriptions-transport-ws";
import { Theme } from './types/theme';
import { useTheme, clearStore, useStore } from './store/store';
import Layout from './layout';
import { Outlet } from 'react-router-dom';

const wsLink = new WebSocketLink(
  new SubscriptionClient(
    "ws://localhost:8080/v1/graphql",
    {
      reconnect: true,
      lazy: true,
      timeout: 30000,
      inactivityTimeout: 30000,
      connectionParams: {
        headers: {
          // TODO: add token for auth 
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "x-hasura-admin-secret": "apis-over-data-$238"
        }
      },
    },
  )
)

const client = new ApolloClient({
  link: wsLink,
  uri: 'http://localhost:8080/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": "apis-over-data-$238"
  },
});

export default function App() {
  const theme: Theme = useTheme();

  return (
    <ApolloProvider client={client} >
      {/* <button onClick={() => clearStore()}>Clear Store</button> */}
      <Layout>
        <div style={{
          ...theme.element.variants.column,
          paddingTop: theme.core.space[5],
          flexWrap: 'wrap',
          background: 'ghostwhite',
          height: '100%',
          minHeight: '100vh',
          width: '100%',
        }}>
          <Outlet />
        </div>
      </Layout>
    </ApolloProvider >
  );
}

//this component renders on page 'dashboard
export const x = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}