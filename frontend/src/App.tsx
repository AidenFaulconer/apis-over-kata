import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, ApolloProvider, split, InMemoryCache, HttpLink } from "@apollo/client"
import { WebSocketLink } from "@apollo/client/link/ws"

import Actors from "./pages/actors"
import Messenger from "./pages/messager"

import { SubscriptionClient } from "subscriptions-transport-ws";
import { Theme } from './types/theme';
import { useTheme, clearStore, useStore } from './store/store';
import Layout from './layout';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';

import { Route, Router, Routes, Link, BrowserRouter, useOutlet, Outlet, Navigate, useLocation } from 'react-router-dom';


import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { wrapHistory } from "oaf-react-router";
import { useFormStore } from './util/index';

const history = createBrowserHistory(); // or createHashHistory()
const settings = {
  announcementsDivId: "announcements",
  primaryFocusTarget: "main h1, [role=main] h1",
  // This assumes you're setting the document title via some other means (e.g. React Helmet).
  // If you're not, you should return a unique and descriptive page title for each page
  // from this function and set `setPageTitle` to true.
  // documentTitle: (location: Location) => document.title,
  // BYO localization
  // navigationMessage: (title: string, location: Location, action: any): string => `Navigated to ${title}.`,
  // Return false if you're handling focus yourself for a specific history action.
  // shouldHandleAction: (previousLocation: Location, nextLocation: Location, action: any) => true,
  disableAutoScrollRestoration: true,
  announcePageNavigation: true,
  setPageTitle: false,
  handleHashFragment: true,
  // Set this to false if you are using HashRouter or MemoryRouter.
  restorePageStateOnPop: true,
  // Set this to true for smooth scrolling.
  // For browser compatibility you might want iamdustan's smoothscroll polyfill https://github.com/iamdustan/smoothscroll
  smoothScroll: true,
};
wrapHistory(history, settings);


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

//https://stackoverflow.com/questions/70358626/redirect-in-react-router-dom-v6
const PrivateRoute = ({ ...props }): JSX.Element => {
  const location = useLocation();
  return props.isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate
      to={`/login/${location.search}`}
      replace
      state={{ location }}
    />
  )
};

export default function App() {
  const theme: Theme = useTheme();
  const isLoggedIn = useStore((state: any) => state.auth.isLoggedIn)

  return (
    <ApolloProvider client={client} >
      <HistoryRouter history={history}>
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
            <Routes>
              <Route path="/login" caseSensitive={false} element={
                <Login />
              } />

              <Route path="/register" caseSensitive={false} element={
                <Register />
              } />

              <Route path="dashboard" caseSensitive={false} element={
                <PrivateRoute isLoggedIn={isLoggedIn} />
              }>
                <Route path="dashboard" element={<Dashboard />} />
              </Route>

              <Route path="actors" caseSensitive={false} element={
                <PrivateRoute isLoggedIn={isLoggedIn} />
              }>
                <Route path="actors" element={<Actors />} />
              </Route>

              <Route path="messenger" caseSensitive={false} element={
                <PrivateRoute isLoggedIn={isLoggedIn} />
              }>
                <Route path="actors" element={<Messenger />} />
              </Route>

            </Routes>
          </div>
        </Layout>
      </HistoryRouter>
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