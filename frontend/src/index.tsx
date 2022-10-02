import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import Actors from "./pages/actors"
import Messenger from "./pages/messager"

import { Navigate, Outlet, unstable_HistoryRouter as HistoryRouter, useLocation, Route, Routes, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { wrapHistory } from "oaf-react-router";

import { Theme } from './types/theme';
import { useTheme, clearStore, useStore } from './store/store';

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

//https://stackoverflow.com/questions/70358626/redirect-in-react-router-dom-v6
const PrivateRoute = ({ ...props }): JSX.Element => {
  const location = useLocation();
  React.useEffect(() => {
    alert(props.isLoggedIn)
  }, []);
  return props.isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate
      to={`/login`}
      replace
      state={{ location }}
    />
  )
};

const AppRouter = () => {
  const theme: Theme = useTheme();
  const isLoggedIn = useStore((state: any) => state.auth.isLoggedIn)

  return (
    <React.StrictMode>
      {/* <HistoryRouter history={history}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" caseSensitive={false} element={<App />}>
            <Route path="login" caseSensitive={false} element={<Login />} />

            <Route path="register" caseSensitive={false} element={<Register />} />

            <Route path="dashboard" caseSensitive={false} element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
              <Route path="dashboard" element={<Dashboard />} />
            </Route>

            <Route path="actors" caseSensitive={false} element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
              <Route path="actors" element={<Actors />} />
              {/*
              note: this will also render <Actors />
              now in the url under actorId we can get info to pass to a cutstom component to view more details at, use useParams(); or useSearchParams();
              <Route path=":actorId" element={<Actor />} /> 
              */}
            </Route>

            <Route path="messenger" caseSensitive={false} element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
              <Route path="messenger" element={<Messenger />} />
            </Route>

            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
        {/* </HistoryRouter > */}
      </BrowserRouter >
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<AppRouter />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
