import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, ApolloProvider, split, InMemoryCache, HttpLink } from "@apollo/client"
import { WebSocketLink } from "@apollo/client/link/ws"

import Actors from "./pages/actors"

import { SubscriptionClient } from "subscriptions-transport-ws";
import { Theme } from './types/theme';
import { useTheme, clearStore } from './store/store';
import { setScrollbarStyles } from './store/theme';


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
      <div style={{
        // ...setScrollbarStyles,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        background: 'ghostwhite',
        justifyContent: 'center',
        gap: '15px',
        minHeight: '100vh',
        padding: '10% 0',
        width: '100%',
      }}>
        <h1>Actors 💃</h1>
        <Actors />
      </div>
    </ApolloProvider >
  );
}
