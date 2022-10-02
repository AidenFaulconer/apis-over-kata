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

import { Navigate, Outlet, unstable_HistoryRouter as HistoryRouter, useLocation, Route, Routes, BrowserRouter, Link } from 'react-router-dom';
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
const AuthWrapper = ({ ...props }): JSX.Element => {
  const location = useLocation();
  const isLoggedIn = useStore((state: any) => state.auth.isLoggedIn)
  // const token = !!JSON.parse(localStorage.getItem("token"));
  React.useEffect(() => {
    alert(isLoggedIn)
  }, []);
  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate
      to={`/login`}
      replace
      state={{ from: location }}
    />
  )
};
const AdminRoute = ({ ...props }): JSX.Element => {
  const location = useLocation();
  const isLoggedIn = useStore((state: any) => state.auth.isLoggedIn)
  // const token = !!JSON.parse(localStorage.getItem("token"));
  React.useEffect(() => {
    alert(isLoggedIn)
  }, []);
  //outlet is anything nested within this route
  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate
      to={`/dashboard`}
      replace
      state={{ from: location }}
    />
  )
};

const AppRouter = () => {
  const theme: Theme = useTheme();

  return (
    <React.StrictMode>
      <HistoryRouter history={history}>
        {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" caseSensitive={false} element={<App />}>

            {/* login and registration */}
            <Route path="" caseSensitive={false} element={<>
              <Link to="/login" replace>login</Link>
              or
              <Link to="/register" replace>register</Link>

            </>} />
            <Route path="login" caseSensitive={false} element={<Login />} />
            <Route path="register" caseSensitive={false} element={<Register />} />

            {/* app */}
            <Route element={<AuthWrapper />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="actors" element={<Actors />} />
              {/*
              note: this will also render <Actors />
              now in the url under actorId we can get info to pass to a cutstom component to view more details at, use useParams(); or useSearchParams();
              <Route path=":actorId" element={<Actor />} /> 
            */}
            </Route>
            <Route path="messenger" element={<Messenger />} />


            {/* admin only */}
            <Route element={<AdminRoute />}>

            </Route>

            {/* everything else  */}
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                  <Link to="/" replace>Go back</Link>
                </main>
              }
            />
          </Route>

        </Routes>
      </HistoryRouter >
      {/* </BrowserRouter > */}
    </React.StrictMode >
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
