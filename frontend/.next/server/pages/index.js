"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,166,26,459,259,495];
exports.modules = {

/***/ 5461:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ App)
/* harmony export */ });
/* unused harmony export x */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client_link_ws__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8005);
/* harmony import */ var _apollo_client_link_ws__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_ws__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var subscriptions_transport_ws__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(230);
/* harmony import */ var subscriptions_transport_ws__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(subscriptions_transport_ws__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3743);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1072);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_5__, _layout__WEBPACK_IMPORTED_MODULE_6__]);
([_store_store__WEBPACK_IMPORTED_MODULE_5__, _layout__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const wsLink = new _apollo_client_link_ws__WEBPACK_IMPORTED_MODULE_3__.WebSocketLink(new subscriptions_transport_ws__WEBPACK_IMPORTED_MODULE_4__.SubscriptionClient("ws://localhost:8080/v1/graphql", {
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
    }
}));
const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloClient({
    link: wsLink,
    uri: "http://localhost:8080/v1/graphql",
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.InMemoryCache(),
    headers: {
        "x-hasura-admin-secret": "apis-over-data-$238"
    }
});
function App() {
    const theme = (0,_store_store__WEBPACK_IMPORTED_MODULE_5__/* .useTheme */ .Fg)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {
        client: client,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    ...theme.element.variants.column,
                    paddingTop: theme.core.space[5],
                    flexWrap: "wrap",
                    background: "ghostwhite",
                    height: "100%",
                    minHeight: "100vh",
                    width: "100%"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Outlet, {})
            })
        })
    });
}
//this component renders on page 'dashboard
const x = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsx("h1", {
            children: "Dashboard"
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2570:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3743);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_2__]);
_store_store__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Footer() {
    const theme = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__/* .useTheme */ .Fg)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            ...theme.element.variants.row,
            width: "100%",
            border: theme.core.borders.primary,
            boxShadow: theme.core.shadows.small,
            ...theme.element.variants.row,
            position: "sticky",
            background: theme.core.colors.background,
            gap: theme.core.space[3],
            padding: theme.core.space[4]
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    width: "40%",
                    ...theme.element.variants.row,
                    color: theme.core.colors.text
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: "Actors \uD83D\uDC68‍\uD83D\uDCBB\uD83D\uDE4B"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    ...theme.element.variants.column,
                    width: "70%",
                    gap: theme.core.space[3]
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "./",
                        children: "Home"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "./",
                        children: "Actors"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    ...theme.element.variants.column,
                    width: "70%"
                }
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9008:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* unused harmony export UserProfile */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3743);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9810);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_2__, immer__WEBPACK_IMPORTED_MODULE_4__]);
([_store_store__WEBPACK_IMPORTED_MODULE_2__, immer__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const UserProfile = function({ searchVariables  }) {
    const currentUser = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__/* .useStore */ .oR)((state)=>state.auth.user);
    const theme = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__/* .useTheme */ .Fg)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                ...theme.element.variants.row,
                gap: theme.core.space[3]
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        borderRadius: "100%",
                        display: "block",
                        backgroundImage: `url(${currentUser.profile_picture})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "100px",
                        height: "100px"
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: theme.core.space[1]
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: currentUser.username
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: currentUser.user_type
                        })
                    ]
                })
            ]
        })
    });
};
function Header() {
    const theme = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__/* .useTheme */ .Fg)();
    const isLoggedIn = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__/* .useStore */ .oR)((state)=>state.auth.isLoggedIn);
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
    const logout = ()=>{
        _store_store__WEBPACK_IMPORTED_MODULE_2__/* .useStore.setState */ .oR.setState((0,immer__WEBPACK_IMPORTED_MODULE_4__["default"])((state)=>{
            state.auth.isLoggedIn = false;
            state.auth.user = {};
        }));
        navigate("/");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            ...theme.element.variants.row,
            position: "fixed",
            width: "100%",
            zIndex: 20000,
            background: theme.core.colors.background,
            gap: theme.core.space[3],
            padding: theme.core.space[2],
            border: theme.core.borders.primary,
            boxShadow: theme.core.shadows.small
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
                to: "./dashboard",
                style: {
                    width: "40%",
                    textDecoration: "none",
                    ...theme.element.variants.row,
                    color: theme.core.colors.text
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: "Actors \uD83D\uDC83"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    ...theme.element.variants.row,
                    gap: theme.core.space[6],
                    width: "60%"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
                        to: "./dashboard",
                        style: {
                            textDecoration: "none"
                        },
                        children: "Dashboard"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
                        to: "./messenger",
                        style: {
                            textDecoration: "none"
                        },
                        children: "Messenger"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
                        to: "./actors",
                        style: {
                            textDecoration: "none"
                        },
                        children: "Actors"
                    }),
                    isLoggedIn && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            gap: theme.core.space[2]
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                style: {
                                    borderRadius: theme.core.space[1],
                                    padding: theme.core.space[3],
                                    height: "50px",
                                    background: theme.core.colors.success,
                                    cursor: "pointer",
                                    color: theme.core.colors.textSecondary,
                                    boxShadow: "0px 2.5px 7.5px green"
                                },
                                onClick: ()=>{
                                    logout();
                                },
                                children: "Logout"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserProfile, {})
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1072:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3743);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2570);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9008);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_1__, _footer__WEBPACK_IMPORTED_MODULE_2__, _header__WEBPACK_IMPORTED_MODULE_3__]);
([_store_store__WEBPACK_IMPORTED_MODULE_1__, _footer__WEBPACK_IMPORTED_MODULE_2__, _header__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function Layout({ children  }) {
    const theme = (0,_store_store__WEBPACK_IMPORTED_MODULE_1__/* .useTheme */ .Fg)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7849);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5461);
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2193);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1047);
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5217);
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8520);
/* harmony import */ var _actors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(530);
/* harmony import */ var _messager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8607);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5295);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var oaf_react_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8657);
/* harmony import */ var oaf_react_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(oaf_react_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3743);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_App__WEBPACK_IMPORTED_MODULE_3__, _login__WEBPACK_IMPORTED_MODULE_4__, _register__WEBPACK_IMPORTED_MODULE_5__, _dashboard__WEBPACK_IMPORTED_MODULE_6__, _actors__WEBPACK_IMPORTED_MODULE_7__, _messager__WEBPACK_IMPORTED_MODULE_8__, _store_store__WEBPACK_IMPORTED_MODULE_12__]);
([_App__WEBPACK_IMPORTED_MODULE_3__, _login__WEBPACK_IMPORTED_MODULE_4__, _register__WEBPACK_IMPORTED_MODULE_5__, _dashboard__WEBPACK_IMPORTED_MODULE_6__, _actors__WEBPACK_IMPORTED_MODULE_7__, _messager__WEBPACK_IMPORTED_MODULE_8__, _store_store__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const history = (0,history__WEBPACK_IMPORTED_MODULE_10__.createBrowserHistory)(); // or createHashHistory()
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
    smoothScroll: true
};
(0,oaf_react_router__WEBPACK_IMPORTED_MODULE_11__.wrapHistory)(history, settings);
//https://stackoverflow.com/questions/70358626/redirect-in-react-router-dom-v6
const AuthWrapper = ({ ...props })=>{
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useLocation)();
    const isLoggedIn = (0,_store_store__WEBPACK_IMPORTED_MODULE_12__/* .useStore */ .oR)((state)=>state.auth.isLoggedIn);
    // const token = !!JSON.parse(localStorage.getItem("token"));
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        alert(isLoggedIn);
    }, []);
    return isLoggedIn ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Outlet, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Navigate, {
        to: `/login`,
        replace: true,
        state: {
            from: location
        }
    });
};
const AdminRoute = ({ ...props })=>{
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useLocation)();
    const isLoggedIn = (0,_store_store__WEBPACK_IMPORTED_MODULE_12__/* .useStore */ .oR)((state)=>state.auth.isLoggedIn);
    // const token = !!JSON.parse(localStorage.getItem("token"));
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        alert(isLoggedIn);
    }, []);
    //outlet is anything nested within this route
    return isLoggedIn ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Outlet, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Navigate, {
        to: `/dashboard`,
        replace: true,
        state: {
            from: location
        }
    });
};
const AppRouter = ()=>{
    const theme = (0,_store_store__WEBPACK_IMPORTED_MODULE_12__/* .useTheme */ .Fg)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.unstable_HistoryRouter, {
            history: history,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Routes, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
                    path: "/",
                    caseSensitive: false,
                    element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_App__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
                            path: "",
                            caseSensitive: false,
                            element: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
                                        to: "/login",
                                        replace: true,
                                        children: "login"
                                    }),
                                    "or",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
                                        to: "/register",
                                        replace: true,
                                        children: "register"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
                            path: "login",
                            caseSensitive: false,
                            element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_login__WEBPACK_IMPORTED_MODULE_4__["default"], {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
                            path: "register",
                            caseSensitive: false,
                            element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_register__WEBPACK_IMPORTED_MODULE_5__["default"], {})
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
                            element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthWrapper, {}),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
                                    path: "dashboard",
                                    element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_dashboard__WEBPACK_IMPORTED_MODULE_6__["default"], {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
                                    path: "actors",
                                    element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actors__WEBPACK_IMPORTED_MODULE_7__["default"], {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
                            path: "messenger",
                            element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_messager__WEBPACK_IMPORTED_MODULE_8__["default"], {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
                            element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AdminRoute, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
                            path: "*",
                            element: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                                style: {
                                    padding: "1rem"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "There's nothing here!"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
                                        to: "/",
                                        replace: true,
                                        children: "Go back"
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
const root = react_dom_client__WEBPACK_IMPORTED_MODULE_2___default().createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppRouter, {}));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0,_reportWebVitals__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const reportWebVitals = (onPerfEntry)=>{
    if (onPerfEntry && onPerfEntry instanceof Function) {
        Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 4032, 23)).then(({ getCLS , getFID , getFCP , getLCP , getTTFB  })=>{
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportWebVitals);


/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 8005:
/***/ ((module) => {

module.exports = require("@apollo/client/link/ws");

/***/ }),

/***/ 9564:
/***/ ((module) => {

module.exports = require("@apollo/react-hoc");

/***/ }),

/***/ 697:
/***/ ((module) => {

module.exports = require("@mui/utils/deepmerge");

/***/ }),

/***/ 1243:
/***/ ((module) => {

module.exports = require("emoji-picker-react");

/***/ }),

/***/ 5295:
/***/ ((module) => {

module.exports = require("history");

/***/ }),

/***/ 8657:
/***/ ((module) => {

module.exports = require("oaf-react-router");

/***/ }),

/***/ 3345:
/***/ ((module) => {

module.exports = require("rc-table");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7849:
/***/ ((module) => {

module.exports = require("react-dom/client");

/***/ }),

/***/ 4415:
/***/ ((module) => {

module.exports = require("react-progress-label");

/***/ }),

/***/ 4661:
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 230:
/***/ ((module) => {

module.exports = require("subscriptions-transport-ws");

/***/ }),

/***/ 6826:
/***/ ((module) => {

module.exports = require("typed-graphqlify");

/***/ }),

/***/ 4032:
/***/ ((module) => {

module.exports = require("web-vitals");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 9810:
/***/ ((module) => {

module.exports = import("immer");;

/***/ }),

/***/ 352:
/***/ ((module) => {

module.exports = import("lodash-es");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [149,649,607,217,47,520,530], () => (__webpack_exec__(441)));
module.exports = __webpack_exports__;

})();