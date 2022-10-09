"use strict";
exports.id = 149;
exports.ids = [149];
exports.modules = {

/***/ 8929:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
                try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LoadingProgress)
                    /* harmony export */
                });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_progress_label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4415);
/* harmony import */ var react_progress_label__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_progress_label__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3743);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9892);
                    var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_3__, _util_index__WEBPACK_IMPORTED_MODULE_4__]);
                    ([_store_store__WEBPACK_IMPORTED_MODULE_3__, _util_index__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





                    function LoadingProgress({ speed = 1 }) {
                        //input a progress value that is a continuous sin from 0 100
                        const progress = (0, _util_index__WEBPACK_IMPORTED_MODULE_4__/* .useTrackTime */.Dp)(0, 10, (curTime) => {
                            const result = Math.abs(Math.sin(curTime / speed)) * 100;
                            return result;
                        });
                        const theme = (0, _store_store__WEBPACK_IMPORTED_MODULE_3__/* .useTheme */.Fg)();
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_progress_label__WEBPACK_IMPORTED_MODULE_2___default()), {
                            progress: progress,
                            fillColor: "rgb(248,247,243)",
                            trackColor: "#fff",
                            progressColor: theme.core.colors.success,
                            progressWidth: 10,
                            trackWidth: 16,
                            trackBorderWidth: 1,
                            trackBorderColor: "rgb(232,223,209)",
                            cornersWidth: 5,
                            size: 130
                        });
                    }

                    __webpack_async_result__();
                } catch (e) { __webpack_async_result__(e); }
            });

            /***/
        }),

/***/ 7139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NJ": () => (/* binding */ loginOne),
/* harmony export */   "OM": () => (/* binding */ insertOneMessage),
/* harmony export */   "PF": () => (/* binding */ registerOne),
/* harmony export */   "at": () => (/* binding */ deleteOneActor),
/* harmony export */   "bP": () => (/* binding */ getMessagesSubscription),
/* harmony export */   "bg": () => (/* binding */ insertOneActor),
/* harmony export */   "cW": () => (/* binding */ searchActors),
/* harmony export */   "er": () => (/* binding */ deleteOneMessage),
/* harmony export */   "mr": () => (/* binding */ getActorsSubscription)
            /* harmony export */
        });
/* unused harmony exports getActorsQuery, aggregateActorsRolesAndFilms, updateOneActor, getPostsSubscription */
/* harmony import */ var typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6826);
/* harmony import */ var typed_graphqlify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__);
            //REFERENCE: https://github.com/acro5piano/typed-graphqlify

            //GET
            //Actors
            const getActorsQuery = (0, typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.query)("GetActors", {
                [(0, typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.alias)("actor", "actor")]: [
                    {
                        id: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string,
                        name: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string,
                        lastName: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string,
                        middleName: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string
                    },
                ]
            });
            const aggregateActorsRolesAndFilms = (0, typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.query)("aggregateActorsRolesAndFilms", {
                [(0, typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.alias)("getActors", "actor")]: [
                    {
                        lastname: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string,
                        id: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.number,
                        firstname: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string,
                        middlename: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string
                    },
                ]
            });
            const searchActors = (0, typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.query)(`searchActors(
    $firstname: String,
    $lastname: String,
    $middlename: String,
)`, {
                [(0, typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.alias)("searchActors", `actor(
            where: { 
              lastname: {_ilike: $lastname}, 
              middlename: {_ilike: $middlename}, 
              firstname: {_ilike: $firstname}, 
            }
    )`)]: [
                        {
                            id: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.number,
                            firstname: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string,
                            lastname: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string,
                            middlename: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string
                        },
                    ]
            });
            //Authentication
            const loginOne = (0, typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.query)(`loginOne(
    $password: String,
    $username: String,
)`, {
                [(0, typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.alias)("loginOne", `user(
            where: { 
              username: {_eq: $username}, 
              password: {_eq: $password}, 
            }
    )`)]: [
                        {
                            id: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.number,
                            password: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string,
                            username: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string,
                            profile_picture: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string,
                            user_type: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string,
                            bio: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string
                        },
                    ]
            });
            //CREATE UPDATE DELETE
            //Actors
            const insertOneActor = (0, typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.mutation)(`
insertOneActor(
  $firstname: String!,
  $middlename: String,
  $lastname: String,
)`, {
                [(0, typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.alias)("insertOneActor", `insert_actor(
              objects: {
                firstname: $firstname, 
                lastname: $lastname, 
                middlename: $middlename 
              }
            )`)]: {
                    returning: {
                        id: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.number,
                        firstname: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string
                    }
                }
            });
            const deleteOneActor = (0, typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.mutation)(`
deleteOneActor(
  $id: uuid!, 
)`, {
                [(0, typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.alias)("deleteOneActor", `delete_actor(
              where: { 
                id: {_eq: $id}, 
              }
            )`)]: {
                    returning: {
                        id: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.number
                    }
                }
            });
            const updateOneActor = (0, typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.mutation)(`
updateOneActor(
  $id: uuid!, 
)`, {
                [(0, typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.alias)("updateOneActor", `update_actor(
              where: { 
                id: {_eq: $id}, 
              }
            )`)]: {
                    returning: {
                        id: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.number
                    }
                }
            });
            //Messages
            const insertOneMessage = (0, typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.mutation)(`
insertOneMesssage(
  $senderId: uuid!,
  $body: String!, 
)`, {
                [(0, typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.alias)("insertOneMessage", `insert_message_one(
              object: {
                actor_id: $senderId, 
                body: $body,  
              }
            )`)]: {
                    actor_id: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.number,
                    body: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string
                }
            });
            const deleteOneMessage = (0, typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.mutation)(`
deleteOneMessgae(
  $id: uuid!, 
)`, {
                [(0, typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.alias)("deleteOneMessgae", `delete_message(
              where: { 
                id: {_eq: $id}, 
              }
            )`)]: {
                    returning: {
                        id: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.number
                    }
                }
            });
            //Posts
            //Authentication
            const registerOne = (0, typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.mutation)(`
registerOne(
  $bio: String,
  $username: String!,
  $password: String!, 
  $userType: String!
)`, {
                [(0, typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.alias)("registerOne", `insert_user_one(
                object: {
                username: $username,
                bio: $bio,  
                user_type: $userType, 
                password: $password
              }
            )`)]: {
                    id: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.number,
                    username: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string,
                    profile_picture: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string,
                    user_type: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string,
                    bio: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string
                }
            });
            //Messages
            //SUBSCRIPTIONS
            //Actors
            const getActorsSubscription = (0, typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.subscription)("SubscribeToActor", {
                [(0, typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.alias)("actors", "actor")]: [
                    {
                        id: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string,
                        firstname: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string,
                        lastname: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string,
                        middlename: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string,
                        version: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.number
                    },
                ]
            });
            //Messaging
            const getMessagesSubscription = (0, typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.subscription)("SubscribeToMessages", {
                [(0, typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.alias)("messages", "message")]: [
                    {
                        body: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string,
                        timestamp: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string,
                        id: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.number,
                        // reactions: types.string,
                        actor: {
                            firstname: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string,
                            id: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.number
                        }
                    },
                ]
            });
            //Posts
            const getPostsSubscription = (0, typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.subscription)("SubscribeToPosts", {
                [(0, typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.alias)("posts", "message")]: [
                    {
                        body: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string,
                        timestamp: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string,
                        id: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.number,
                        // reactions: types.string,
                        actor: {
                            firstname: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.string,
                            id: typed_graphqlify__WEBPACK_IMPORTED_MODULE_0__.types.number
                        }
                    },
                ]
            });


            /***/
        }),

/***/ 3743:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
                try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fg": () => (/* binding */ useTheme),
/* harmony export */   "oR": () => (/* binding */ useStore)
                    /* harmony export */
                });
/* unused harmony export clearStore */
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6871);
/* harmony import */ var _mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(697);
/* harmony import */ var _mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_2__);
                    var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
                    zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



                    //TODO: add types
                    // ========================================================================== //
                    // Extensible App theme configuration
                    // ========================================================================== //
                    const MAX_STORE_SAVES = 10;
                    const EMPTY_OBJECT = {};
                    const EMPTY_ARRAY = [];
                    const saveStore = (storeSnapshot) => {
                        const storeLog = Array.from(localStorage?.getItem("storeLog")?.slice(0, MAX_STORE_SAVES) || EMPTY_ARRAY);
                        localStorage.setItem("storeLog", JSON.stringify([
                            Array.from(storeSnapshot),
                            ...storeLog
                        ]));
                    };
                    const loadStore = () => {
                        const appStore = localStorage?.getItem("storeLog");
                        return appStore !== null ? appStore[0] : JSON.parse(appStore[0]);
                    };
                    const saveOnClose = (storeRef) => {
                        typeof window !== "undefined" && window.addEventListener("close", (e) => {
                            saveStore(storeRef);
                        });
                    };
                    const clearStore = () => {
                        localStorage.removeItem("storeLog");
                    };
                    //TODO: add ts-doc
                    //TODO: use immer produce to reduce new state https://github.com/pmndrs/zustand
                    const useStore = (0, zustand__WEBPACK_IMPORTED_MODULE_0__["default"])(// persist((set, get) => {
                        (set) => {
                            if (false) { }
                            //TODO: have these actions availible through the store
                            const actions = {
                                //for input states, inputs are at the top level, to hold new data, use this to modify those inputs state
                                changeFormData: function (source, input) {
                                    set((state) => ({
                                        ...state,
                                        [source]: {
                                            ...state[source],
                                            ...input
                                        }
                                    }));
                                },
                                //for modifying non input states
                                setAppContext: function (newAppContext) {
                                    set({
                                        newAppContext
                                    });
                                },
                                setLight: function (newLight) {
                                    return set((state) => {
                                        return {
                                            ...state,
                                            light: {
                                                ...newLight
                                            }
                                        };
                                    });
                                },
                                toggleTheme: function () {
                                    set((state) => ({
                                        ...state,
                                        theme: {
                                            ...state.theme,
                                            mode: state.theme.mode === "light" ? "dark" : "light"
                                        }
                                    }));
                                },
                                setTheme: function (newTheme) {
                                    return set((state) => ({
                                        ...state,
                                        theme: newTheme
                                    }));
                                },
                                setGuest: async function (newGuest) {
                                    set((state) => ({
                                        ...state,
                                        users: {
                                            ...state.users,
                                            guest: newGuest
                                        }
                                    }));
                                },
                                setActors: async function (moreActors) {
                                    set((state) => ({
                                        ...state,
                                        users: {
                                            ...state.users,
                                            actors: _mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_2___default()(moreActors, state.users.actors)
                                        }
                                    }));
                                },
                                setOnline: async function (data) {
                                    set((state) => ({
                                        ...state,
                                        messaging: {
                                            ...state.messaging,
                                            online: {
                                                ...state.messaging.online,
                                                who: Array.from([
                                                    ...state.messaging.online.who,
                                                    data
                                                ])
                                            }
                                        }
                                    }));
                                },
                                setMessages: async function (newMessage) {
                                    set((state) => ({
                                        ...state,
                                        messaging: {
                                            ...state.messaging,
                                            messages: [
                                                ...state.messaging.messages,
                                                ...Array.from([
                                                    ...state.messaging.messages,
                                                    newMessage
                                                ]),
                                            ]
                                        }
                                    }));
                                },
                                getAuthToken: function () {
                                    return localStorage.getItem("token");
                                }
                            };
                            //this is out model of all our apps high level business logic
                            return {
                                saveStore,
                                actions: actions,
                                isMobile: false,
                                isTablet: false,
                                isDesktop: false,
                                isLargeDesktop: false,
                                width: typeof window !== "undefined" && window.innerWidth,
                                height: typeof window !== "undefined" && window.innerHeight,
                                light: {
                                    brightness: 0,
                                    x: 0,
                                    y: 0,
                                    z: 0
                                },
                                theme: {
                                    element: _theme__WEBPACK_IMPORTED_MODULE_1__/* .elementTheme */.sR,
                                    core: _theme__WEBPACK_IMPORTED_MODULE_1__/* .coreTheme */.xj,
                                    mode: "light"
                                },
                                //users business logic
                                users: {
                                    currentUser: {
                                        id: null,
                                        name: "",
                                        email: "",
                                        //url to a generic user profile
                                        avatar: `https://i.pravatar.cc/${Math.round(Math.random() * 100)}`,
                                        isLoading: false,
                                        isLoggedIn: false,
                                        isLoggedOut: false
                                    },
                                    newCurrentUser: {
                                        id: null,
                                        name: "",
                                        email: "",
                                        avatar: ""
                                    },
                                    actors: [
                                        {
                                            loading: true,
                                            error: false,
                                            id: null,
                                            firstname: "",
                                            middlename: "",
                                            lastname: "",
                                            films: [
                                                {
                                                    id: null,
                                                    title: "",
                                                    updated_at: null,
                                                    created_at: Date.now()
                                                },
                                            ],
                                            roles: [
                                                {
                                                    id: null,
                                                    title: "",
                                                    updated_at: null,
                                                    created_at: Date.now()
                                                },
                                            ]
                                        },
                                    ]
                                },
                                //hold input for generic user actions **generic to user**
                                userInput: {
                                    loading: true,
                                    error: false,
                                    fullname: "search full name",
                                    id: null,
                                    firstname: "",
                                    middlename: "",
                                    lastname: "",
                                    films: [
                                        {
                                            id: null,
                                            title: "",
                                            updated_at: null,
                                            created_at: Date.now()
                                        },
                                    ],
                                    roles: [
                                        {
                                            id: null,
                                            title: "",
                                            updated_at: null,
                                            created_at: Date.now()
                                        },
                                    ]
                                },
                                //messaging business logic
                                messaging: {
                                    isLoading: false,
                                    online: {
                                        loading: true,
                                        error: false,
                                        who: [
                                            {
                                                id: null,
                                                name: "",
                                                avatar: null
                                            },
                                        ]
                                    },
                                    messages: [
                                        {
                                            body: "Hello. \uD83D\uDC4B",
                                            user: {
                                                avatar: "\uD83E\uDD16",
                                                name: "Bot"
                                            },
                                            timestamp: Date.now()
                                        },
                                    ]
                                },
                                //message input **generic to messaging**
                                messageInput: {
                                    body: "Hello. \uD83D\uDC4B",
                                    senderId: "b4b2752d-e5d5-4973-befa-e5b94822629f",
                                    user: {
                                        avatar: "\uD83E\uDD16",
                                        name: "Bot"
                                    },
                                    timestamp: Date.now()
                                },
                                //authentication
                                auth: {
                                    isLoading: false,
                                    isLoggedIn: false,
                                    isLoggedOut: false,
                                    isLoggedInAdmin: false,
                                    token: null,
                                    user: null,
                                    error: null
                                },
                                loginInput: {
                                    username: "username",
                                    password: "password",
                                    confirmPassword: "",
                                    profilePhoto: "https://i.pravatar.cc/30",
                                    bio: "Write a short bio about yourself",
                                    userType: "actor"
                                }
                            };
                        });
                    const useTheme = () => {
                        const theme = useStore((state) => state.theme);
                        return theme;
                    };

                    __webpack_async_result__();
                } catch (e) { __webpack_async_result__(e); }
            });

            /***/
}),

/***/ 6871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sR": () => (/* binding */ elementTheme),
/* harmony export */   "xj": () => (/* binding */ coreTheme)
                /* harmony export */
            });
            /* unused harmony exports palette, colors, dimensions, fonts */
            // ------------------------------------------------------------
            // javascript jss stylesheet for generic site themes
            // ------------------------------------------------------------

            // import '@fontsource/roboto'
            // import '@fontsource/azeret-mono'
            // import '@fontsource/noto-mono'
            // import '@fontsource/open-sans'
            const palette = {
                primary: "#fffc",
                secondary: "#000c",
                success: "#4caf50",
                danger: "#f44336",
                warning: "#ffeb3b",
                info: "#2196f3",
                background: "#fafafa",
                text: "#212121",
                textSecondary: "#fffc",
                textGrey: "#757575"
            };
            const colors = {
                ...palette
            };
            const randomLight = () => {
                const x = Math.random() * 2 - 1;
                const y = Math.random() * 2 - 1;
                const z = Math.random() * 2 - 1;
                const length = Math.sqrt(x * x + y * y + z * z);
                return {
                    x: x / length,
                    y: y / length,
                    z: z / length
                };
            };
            const getShadows = (height, width, sunDirection) => {
                const x = sunDirection.x / (height * 0.5);
                const y = sunDirection.y / (width * 0.5);
                const blur = Math.sqrt(x * x + y * y) * 12;
                const color = `rgba(0, 0, 0, ${blur * 0.02})`;
                const opacity = Math.max(0, Math.min(1, blur - 0.7));
                return `${x} ${y} ${blur} ${color} ${opacity}`;
            };
            const dimensions = {
                zIndexDrawer: "1",
                zIndexModal: "10",
                zIndexSnackbar: "10",
                zIndexTooltip: "10",
                zIndexPopover: "10",
                dimensionShadows: getShadows(typeof window !== "undefined" && window.innerWidth, typeof window !== "undefined" && window.innerHeight, randomLight())
            };
            const generateFontSizeGoldenRatio = ({ length = 9, baseFontSize = 16 }) => {
                const goldenRatio = 1.61803398875;
                return Array.from({
                    length
                }, (v, i) => baseFontSize + i * goldenRatio);
            };
            const fonts = {
                fontCatagory: {
                    sans: '"Inter", "Roboto", sans-serif',
                    serif: "Georgia, serif",
                    monospace: '"Roboto Mono", monospace'
                },
                fontSizes: [
                    12,
                    14,
                    16,
                    20,
                    24,
                    32,
                    48,
                    64,
                    96
                ],
                // fontSizes: generateFontSizeGoldenRatio({ length: 9, baseFontSize: 12 }),
                fontWeights: {
                    light: 300,
                    normal: 400,
                    medium: 500,
                    bold: 700
                },
                lineHeights: {
                    body: 1.5,
                    heading: 1.25
                }
            };
            const coreTheme = {
                fonts: fonts,
                shadows: {
                    small: "0 0 7.5px rgba(0, 2, 15, .3)",
                    large: "0 0 24px rgba(0, 4, 30, .6)"
                },
                borders: {
                    primary: `1px solid ${colors.primary}`,
                    secondary: `1px solid ${colors.secondary}`
                },
                colors: colors,
                breakpoints: {
                    xs: 0,
                    sm: 600,
                    md: 960,
                    lg: 1280,
                    xl: 1920
                },
                space: [
                    0,
                    4,
                    8,
                    16,
                    32,
                    64,
                    128,
                    256,
                    512
                ]
            };
            // const getLayoutGrid = (
            //     breakpoints = {
            //         xs: 3,
            //         sm: 4,
            //         md: 6,
            //         lg: 10,
            //         xl: 12,
            //     }
            // ) => {
            //     const layoutPercentages = Object.keys(breakpoints).reduce((acc, key) => {
            //         acc[key] = `${100 / breakpoints[key]}%`;
            //         return acc;
            //     }, {});
            //     return {
            //         xs: `1fr`,
            //         sm: `repeat(${layoutPercentages.sm}, 1fr)`,
            //         md: `repeat(${layoutPercentages.md}, 1fr)`,
            //         lg: `repeat(${layoutPercentages.lg}, 1fr)`,
            //         xl: `repeat(${layoutPercentages.xl}, 1fr)`,
            //     };
            // };
            const elementTheme = {
                breakpoints: {
                    xs: `(min-width: 0px)`,
                    sm: `(min-width: 600px)`,
                    md: `(min-width: 960px)`,
                    lg: `(min-width: 1280px)`,
                    xl: `(min-width: 1920px)`
                },
                layout: {
                    // grid: getLayoutGrid(),
                    container: {
                        maxWidth: "1200px",
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    column: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    row: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center"
                    }
                },
                box: {
                    maxWidth: "1200px",
                    margin: "0 auto"
                },
                scrollbar: {
                    width: "10px",
                    height: "10px",
                    background: "#fff",
                    borderRadius: coreTheme.space[3]
                },
                variants: {
                    column: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column"
                    },
                    // declaring a grid items as a column / row (the inverse of this)
                    //  start y / end y < spans by index x in the x direction of grid cells
                    //          ^ spans y in the y direction of grid cells
                    grid: {
                        display: "grid",
                        gridGap: coreTheme.space[3],
                        height: "100%",
                        padding: coreTheme.space[3],
                        gridTemplateColumns: "repeat(auto - fit, minmax(250px, 1fr))",
                        gridAutoRows: "200px",
                        gridAutoFlow: "dense"
                    },
                    row: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row"
                    },
                    card: {
                        p: 3,
                        bg: "background",
                        boxShadow: "small",
                        display: "flex",
                        flexDirection: "column"
                    },
                    link: {
                        color: coreTheme.colors.primary,
                        "&:hover": {
                            color: coreTheme.colors.secondary
                        }
                    },
                    navLink: {
                        color: "inherit",
                        "&:hover": {
                            color: coreTheme.colors.secondary
                        }
                    }
                },
                text: {
                    heading: {
                        fontFamily: coreTheme.fonts.fontCatagory.sans,
                        fontWeight: coreTheme.fonts.fontWeights.bold,
                        fontSize: [
                            5,
                            6,
                            7
                        ]
                    },
                    bold: {
                        fontFamily: coreTheme.fonts.fontCatagory.sans,
                        fontWeight: coreTheme.fonts.fontWeights.bold
                    },
                    body: {
                        fontFamily: coreTheme.fonts.fontCatagory.sans,
                        fontWeight: coreTheme.fonts.fontWeights.normal,
                        fontSize: 3
                    },
                    caps: {
                        textTransform: "uppercase",
                        letterSpacing: "0.1em"
                    }
                },
                html: {
                    root: {
                        fontFamily: coreTheme.fonts.fontCatagory.sans,
                        fontWeight: coreTheme.fonts.fontWeights.normal,
                        lineHeight: coreTheme.fonts.lineHeights.body,
                        fontSize: fonts.fontSizes[0]
                    },
                    h1: {
                        fontFamily: coreTheme.fonts.fontCatagory.sans,
                        fontWeight: coreTheme.fonts.fontWeights.bold,
                        fontSize: fonts.fontSizes[7],
                        m: 0,
                        p: 0
                    },
                    h2: {
                        fontFamily: coreTheme.fonts.fontCatagory.sans,
                        fontWeight: coreTheme.fonts.fontWeights.medium,
                        fontSize: fonts.fontSizes[6],
                        m: 0,
                        p: 0
                    },
                    h3: {
                        fontFamily: coreTheme.fonts.fontCatagory.sans,
                        fontWeight: coreTheme.fonts.fontWeights.medium,
                        fontSize: fonts.fontSizes[5],
                        m: 0,
                        p: 0
                    },
                    h4: {
                        fontFamily: coreTheme.fonts.fontCatagory.sans,
                        fontWeight: coreTheme.fonts.fontWeights.medium,
                        fontSize: fonts.fontSizes[4],
                        m: 0,
                        p: 0
                    },
                    h5: {
                        fontFamily: coreTheme.fonts.fontCatagory.sans,
                        fontWeight: coreTheme.fonts.fontWeights.medium,
                        fontSize: fonts.fontSizes[3],
                        m: 0,
                        p: 0
                    },
                    h6: {
                        fontFamily: coreTheme.fonts.fontCatagory.sans,
                        fontWeight: coreTheme.fonts.fontWeights.normal,
                        fontSize: fonts.fontSizes[2],
                        m: 0,
                        p: 0
                    },
                    p: {
                        fontSize: fonts.fontSizes[1],
                        fontWeight: coreTheme.fonts.fontWeights.normal,
                        fontFamily: coreTheme.fonts.fontCatagory.sans,
                        lineHeight: coreTheme.fonts.lineHeights.body,
                        color: coreTheme.colors.text
                    },
                    a: {
                        fontWeight: coreTheme.fonts.fontWeights.normal,
                        fontFamily: coreTheme.fonts.fontCatagory.sans,
                        lineHeight: coreTheme.fonts.lineHeights.body,
                        variant: "text.link"
                    },
                    pre: {
                        fontFamily: coreTheme.fonts.fontCatagory.sans,
                        overflowX: "auto"
                    },
                    buttons: {
                        primary: {
                            display: "flex",
                            alignItems: "center",
                            gap: coreTheme.space[3],
                            color: "background",
                            fontSize: coreTheme.fonts.fontSizes[3],
                            bg: coreTheme.colors.primary,
                            "&:hover": {
                                bg: coreTheme.colors.secondary
                            }
                        },
                        outline: {
                            display: "flex",
                            alignItems: "center",
                            gap: coreTheme.space[3],
                            color: coreTheme.colors.primary,
                            fontSize: coreTheme.fonts.fontSizes[3],
                            bg: "transparent",
                            boxShadow: "inset 0 0 2px",
                            "&:hover": {
                                bg: "background",
                                color: coreTheme.colors.secondary,
                                boxShadow: "inset 0 0 2px"
                            }
                        },
                        secondary: {
                            display: "flex",
                            alignItems: "center",
                            gap: coreTheme.space[3],
                            color: "background",
                            fontSize: coreTheme.fonts.fontSizes[3],
                            bg: coreTheme.colors.secondary,
                            "&:hover": {
                                bg: coreTheme.colors.primary
                            }
                        }
                    },
                    cards: {
                        primary: {
                            bg: "background",
                            fontSize: coreTheme.fonts.fontSizes[2],
                            color: "text",
                            boxShadow: "small"
                        }
                    },
                    nav: {
                        fontSize: coreTheme.fonts.fontSizes[3],
                        fontWeight: "bold",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        color: "inherit",
                        "&:hover, &:focus": {
                            color: coreTheme.colors.secondary
                        }
                    },
                    navLink: {
                        p: 2,
                        fontSize: coreTheme.fonts.fontSizes[2],
                        color: "inherit",
                        "&:hover, &:focus": {
                            color: coreTheme.colors.secondary
                        }
                    },
                    hr: {
                        border: "1px solid",
                        borderColor: "muted"
                    },
                    table: {
                        fontSize: coreTheme.fonts.fontSizes[2],
                        width: "100%",
                        borderCollapse: "separate",
                        borderSpacing: 0
                    },
                    th: {
                        fontSize: coreTheme.fonts.fontSizes[3],
                        textAlign: "left",
                        borderBottomStyle: "solid"
                    },
                    td: {
                        fontSize: coreTheme.fonts.fontSizes[3],
                        textAlign: "left",
                        borderBottomStyle: "solid"
                    },
                    img: {
                        objectFit: "cover",
                        backgroundSize: "cover",
                        maxWidth: "100%",
                        height: "auto"
                    },
                    input: {
                        fontFamily: coreTheme.fonts.fontCatagory.sans,
                        fontSize: 3,
                        borderRadius: "default",
                        borderColor: "inherit",
                        borderStyle: "solid",
                        borderWidth: "1px",
                        color: "inherit",
                        bg: "transparent",
                        p: 2,
                        "&:hover, &:focus": {
                            outline: "none"
                        }
                    },
                    textArea: {
                        fontFamily: coreTheme.fonts.fontCatagory.sans,
                        fontSize: 3,
                        borderRadius: "default",
                        borderColor: "inherit",
                        borderStyle: "solid",
                        borderWidth: "1px",
                        color: "inherit",
                        bg: "transparent",
                        p: 2,
                        "&:hover, &:focus": {
                            outline: "none"
                        }
                    },
                    label: {
                        fontFamily: coreTheme.fonts.fontCatagory.sans,
                        fontSize: 3,
                        color: "inherit",
                        "&:hover, &:focus": {
                            outline: "none"
                        }
                    },
                    select: {
                        fontFamily: coreTheme.fonts.fontCatagory.sans,
                        fontSize: 3,
                        borderRadius: "default",
                        borderColor: "inherit",
                        borderStyle: "solid",
                        borderWidth: "1px",
                        color: "inherit",
                        bg: "transparent",
                        p: 2,
                        "&:hover, &:focus": {
                            outline: "none"
                        }
                    },
                    dropDownSelect: {
                        fontFamily: coreTheme.fonts.fontCatagory.sans,
                        fontSize: 3,
                        borderRadius: "default",
                        borderColor: "inherit",
                        borderStyle: "solid",
                        borderWidth: "1px",
                        color: "inherit",
                        bg: "transparent",
                        p: 2,
                        "&:hover, &:focus": {
                            outline: "none"
                        }
                    }
                }
            };


            /***/
        }),

/***/ 9892:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
                try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dp": () => (/* binding */ useTrackTime),
/* harmony export */   "Nr": () => (/* binding */ useDebounce),
/* harmony export */   "VW": () => (/* binding */ useFormStore)
                    /* harmony export */
                });
/* unused harmony exports callDelayedFunction, useFormValidation, useInterval, reRenderOnVariables, useFormStoreNoValidation, forceUpdate, useClickOutside, useScrollControl, useStateWithCallback, useStateWithCallbackInstant, usePrevious, useEffectUpdate, useToggle, useLocalStorage, useWindowSize, useDimensions */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3743);
                    var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_2__]);
                    _store_store__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
                    /* eslint-disable react-hooks/rules-of-hooks */ /* eslint-disable guard-for-in */ /* eslint-disable consistent-return */ /* eslint-disable no-case-declarations */


                    // ========================================================================== //
                    // Custom react hooks https://usehooks.com/
                    // react hooks allow you to be modular with logic that would be written in
                    // the react pure component anyway, they basically drop in and make reusable
                    // REACT BASED protocals, so logic declared in hook, is essentially logic
                    // youd have in the component anyway.
                    // remember to get output from these via [x,setX] = hookName(input)
                    // remember to be mindful of the data returned in each hook! some are objects
                    // some are arrays!
                    // Don’t call Hooks inside loops, conditions, or nested functions. Instead,
                    // always use Hooks at the top level of your React function
                    // ========================================================================== //
                    const callDelayedFunction = (fn, delay) => {
                        let timeout;
                        return (...args) => {
                            clearTimeout(timeout);
                            timeout = typeof window !== "undefined" && window.setTimeout(() => fn(...args), delay);
                        };
                    };
                    // ========================================================================== //
                    // Forms
                    // ========================================================================== //
                    const useFormValidation = (initialState, validationSchema) => {
                        const { 0: values, 1: setValues } = useState(initialState);
                        const { 0: errors, 1: setErrors } = useState({});
                        const { 0: touched, 1: setTouched } = useState({});
                        const { 0: isSubmitting, 1: setIsSubmitting } = useState(false);
                        const { 0: isValid, 1: setIsValid } = useState(false);
                        useEffect(() => {
                            if (isSubmitting) {
                                const validationErrors = validationSchema.validate(values, {
                                    abortEarly: false
                                });
                                setErrors(validationErrors.errors);
                                setIsValid(validationErrors.isValid);
                            }
                        }, [
                            isSubmitting,
                            values
                        ]);
                        const handleChange = (event) => {
                            const { name, value } = event.target;
                            setValues({
                                ...values,
                                [name]: value
                            });
                        };
                        const handleBlur = (event) => {
                            const { name } = event.target;
                            setTouched({
                                ...touched,
                                [name]: true
                            });
                        };
                        const handleSubmit = (event) => {
                            event.preventDefault();
                            setIsSubmitting(true);
                        };
                        return {
                            values,
                            errors,
                            touched,
                            isSubmitting,
                            isValid,
                            handleChange,
                            handleBlur,
                            handleSubmit
                        };
                    };
                    const useTrackTime = (initialState, interval, timeHandler) => {
                        const { 0: time, 1: setTime } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState);
                        (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                            const timer = setInterval(() => {
                                setTime(timeHandler(Date.now() / 1000));
                            }, interval);
                            return () => clearInterval(timer);
                        }, [
                            time
                        ]);
                        return time;
                    };
                    const useInterval = () => {
                        const [progress, setProgress] = React.useState(0);
                        useEffect(() => {
                            const interval = setInterval(() => Math.sin(progress / 100) * 100, 2);
                            console.warn(progress, interval);
                            return () => clearInterval(interval);
                        }, [
                            progress
                        ]);
                        return progress;
                    };
                    // ========================================================================== //
                    // Zustand hooks
                    // ========================================================================== //
                    // get the store
                    // add method to store
                    // subscribe to store
                    // unsubscribe from store
                    // ========================================================================== //
                    // Re render on variable change
                    // ========================================================================== //
                    const reRenderOnVariables = (variables = []) => {
                        const { 0: rerender, 1: setRerender } = useState(false);
                        useEffect(() => {
                            setRerender(!rerender);
                        }, [
                            ...variables
                        ]);
                    };
                    // ========================================================================== //
                    // Global Store FORM handler **using zustand as global store**
                    // ========================================================================== //
                    const validationTypes = {
                        username: yup__WEBPACK_IMPORTED_MODULE_1__.string().matches(/^[a-zA-Z0-9_.-]*$/, "Only alphanumeric characters, underscores, dashes and periods are allowed").required("Username is required"),
                        text: yup__WEBPACK_IMPORTED_MODULE_1__.string().required("Field Required"),
                        required: yup__WEBPACK_IMPORTED_MODULE_1__.string().required("Required"),
                        selection: yup__WEBPACK_IMPORTED_MODULE_1__.string().required("Please select an option"),
                        fullName: yup__WEBPACK_IMPORTED_MODULE_1__.string().required("Full Name is required"),
                        email: yup__WEBPACK_IMPORTED_MODULE_1__.string().email("Invalid email address").required("Email is required"),
                        password: yup__WEBPACK_IMPORTED_MODULE_1__.string().min(8, "Password must be at least 8 characters").matches(/[a-zA-Z]/, "Password must contain at least one letter").matches(/[0-9]/, "Password must contain at least one number").required("Password is required"),
                        confirmPassword: yup__WEBPACK_IMPORTED_MODULE_1__.string().required("Confirm Password is required"),
                        phone: yup__WEBPACK_IMPORTED_MODULE_1__.string().required("Phone is required"),
                        acceptTerms: yup__WEBPACK_IMPORTED_MODULE_1__.boolean().oneOf([
                            true
                        ], "You must accept the terms and conditions"),
                        textArea: yup__WEBPACK_IMPORTED_MODULE_1__.string().max(500, "Maximum 500 characters only"),
                        file: yup__WEBPACK_IMPORTED_MODULE_1__.mixed().required("File is required").test("fileSize", "File size is too big", (value) => value && value.size <= 2000000),
                        image: yup__WEBPACK_IMPORTED_MODULE_1__.mixed().required("Image is required").test("fileSize", "File size is too large", (value) => value && value.size <= 3000000),
                        video: yup__WEBPACK_IMPORTED_MODULE_1__.mixed().required("Video is required").test("fileSize", "File size is too large", (value) => value && value.size <= 3000000),
                        cleanString: yup__WEBPACK_IMPORTED_MODULE_1__.string().matches(/^[a-zA-Z0-9_.-]*$/, "Only alphanumeric characters, underscores, dashes and periods are allowed"),
                        cleanNumber: yup__WEBPACK_IMPORTED_MODULE_1__.string().matches(/^[0-9]*$/, "Only numbers are allowed")
                    };
                    const useFormStore = (formName = "testForm", fieldName = "text", stateDefaultValue = false, validationType) => {
                        const { 0: input, 1: setFormInput } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(stateDefaultValue ? (0, _store_store__WEBPACK_IMPORTED_MODULE_2__/* .useStore */.oR)((state) => state[formName][fieldName]) : "");
                        const { 0: error, 1: setError } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
                        const changeFormData = (0, _store_store__WEBPACK_IMPORTED_MODULE_2__/* .useStore */.oR)((state) => state.actions.changeFormData);
                        (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                            // if (process.env.NODE_ENV === 'development') console.log(`New Form Input: ${input} for form ${formName}`);
                            // test input for errors
                            validationTypes[validationType].validate(input, {
                                abortEarly: false,
                                strict: true
                            }).then((validationErrors) => {
                                if (validationErrors.errors) {
                                    console.log(validationErrors.errors);
                                    setError(validationErrors.errors);
                                } else setError(false);
                            }).catch((validationErrors) => {
                                console.log(validationErrors.errors);
                                setError(validationErrors.errors);
                            });
                            changeFormData(formName, {
                                [fieldName]: input
                            });
                        }, [
                            input
                        ]);
                        return [
                            input,
                            setFormInput,
                            error
                        ];
                    };
                    const useFormStoreNoValidation = (formName = "testForm", fieldName = "text", stateDefaultValue = false) => {
                        const { 0: input, 1: setFormInput } = useState(stateDefaultValue ? useStore((state) => state[formName][fieldName]) : "");
                        const changeFormData = useStore((state) => state.actions.changeFormData);
                        useEffect(() => {
                            // if (process.env.NODE_ENV === 'development') console.log(`New Form Input: ${input} for form ${formName}`);
                            changeFormData(formName, {
                                [fieldName]: input
                            });
                        }, [
                            input
                        ]);
                        return [
                            input,
                            setFormInput
                        ];
                    };
                    // ========================================================================== //
                    // Force re render
                    // ========================================================================== //
                    const forceUpdate = () => React.useReducer(() => ({}), 0)[1];
                    // ========================================================================== //
                    // Misc
                    // ========================================================================== //
                    const useClickOutside = (ref, callback) => {
                        const handleClick = (e) => {
                            if (ref.current && !ref.current.contains(e.target)) {
                                callback();
                            }
                        };
                        useEffect(() => {
                            document.addEventListener("click", handleClick);
                            return () => {
                                document.removeEventListener("click", handleClick);
                            };
                        });
                    };
                    const useScrollControl = (ref, children) => {
                        const { 0: isScrolled, 1: setIsScrolled } = useState(false);
                        const { 0: isScrolledUp, 1: setIsScrolledUp } = useState(false);
                        const { 0: isScrolledDown, 1: setIsScrolledDown } = useState(false);
                        const { 0: isScrolledLeft, 1: setIsScrolledLeft } = useState(false);
                        const { 0: isScrolledRight, 1: setIsScrolledRight } = useState(false);
                        useEffect(() => {
                            const handleScroll = () => {
                                const { scrollTop, scrollLeft } = ref.current;
                                const { scrollHeight, offsetHeight, scrollWidth, offsetWidth, } = ref.current;
                                const isScrolled = scrollTop + offsetHeight >= scrollHeight;
                                const isScrolledUp = scrollTop <= 0;
                                const isScrolledDown = scrollTop + offsetHeight >= scrollHeight;
                                const isScrolledLeft = scrollLeft <= 0;
                                const isScrolledRight = scrollLeft + offsetWidth >= scrollWidth;
                                setIsScrolled(isScrolled);
                                setIsScrolledUp(isScrolledUp);
                                setIsScrolledDown(isScrolledDown);
                                setIsScrolledLeft(isScrolledLeft);
                                setIsScrolledRight(isScrolledRight);
                            };
                            handleScroll();
                            ref.current.addEventListener("scroll", handleScroll);
                            return () => {
                                ref.current.removeEventListener("scroll", handleScroll);
                            };
                        }, [
                            ref
                        ]);
                        return {
                            isScrolled,
                            isScrolledUp,
                            isScrolledDown,
                            isScrolledLeft,
                            isScrolledRight
                        };
                    };
                    // ========================================================================== //
                    // State based react hooks
                    // ========================================================================== //
                    const useStateWithCallback = (initialState, callback) => {
                        const { 0: state, 1: setState } = useState(initialState);
                        useEffect(() => {
                            callback(state);
                        }, [
                            state,
                            callback
                        ]);
                        return [
                            state,
                            setState
                        ];
                    };
                    const useStateWithCallbackInstant = (initialState, callback) => {
                        const { 0: state, 1: setState } = useState(initialState);
                        useLayoutEffect(() => {
                            callback(state);
                        }, [
                            state,
                            callback
                        ]);
                        return [
                            state,
                            setState
                        ];
                    };
                    // Hook
                    const usePrevious = (value) => {
                        // The ref object is a generic container whose current property is mutable ...
                        // ... and can hold any value, similar to an instance property on a class
                        const ref = useRef();
                        // Store current value in ref
                        useEffect(() => {
                            ref.current = value;
                        }, [
                            value
                        ]); // Only re-run if value changes
                        // Return previous value (happens before update in useEffect above)
                        return ref.current;
                    };
                    // ========================================================================== //
                    // React general purpose hooks
                    // ========================================================================== //
                    const useEffectUpdate = (callback) => {
                        const isFirstRender = useRef(true);
                        useEffect(() => {
                            if (isFirstRender.current) {
                                isFirstRender.current = false; // toggle flag after first render/mounting
                                return;
                            }
                            callback(); // performing action after state has updated
                        }, [
                            callback
                        ]);
                    };
                    const useToggle = (initialState = false) => {
                        // Initialize the state
                        const { 0: state, 1: setState } = useState(initialState);
                        // Define and memorize toggler function in case we pass down the comopnent,
                        // This function change the boolean value to it's opposite value
                        const toggle = useCallback(() => setState((state) => !state), []);
                        return [
                            state,
                            toggle
                        ];
                    };
                    const useLocalStorage = (key, initialValue) => {
                        // State to store our value
                        // Pass initial state function to useState so logic is only executed once
                        const { 0: storedValue, 1: setStoredValue } = useState(() => {
                            try {
                                // Get from local storage by key
                                const item = typeof window !== "undefined" && window.localStorage.getItem(key);
                                // Parse stored json or if none return initialValue
                                return item ? JSON.parse(item) : initialValue;
                            } catch (error) {
                                // If error also return initialValue
                                console.log(error);
                                return initialValue;
                            }
                        });
                        // Return a wrapped version of useState's setter function that ...
                        // ... persists the new value to localStorage.
                        const setLocalStorageValue = (value) => {
                            try {
                                // Allow value to be a function so we have same API as useState
                                const valueToStore = value instanceof Function ? value(storedValue) : value;
                                // Save state
                                setStoredValue(valueToStore);
                                // Save to local storage
                                typeof window !== "undefined" && window.localStorage.setItem(key, JSON.stringify(valueToStore));
                            } catch (error) {
                                // A more advanced implementation would handle the error case
                                console.log(error);
                            }
                        };
                        return [
                            storedValue,
                            setLocalStorageValue
                        ];
                    };
                    const useWindowSize = () => {
                        // Initialize state with undefined width/height so server and client renders match
                        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
                        const { 0: windowSize, 1: setWindowSize } = useState({
                            width: 0,
                            height: 0
                        });
                        useEffect(() => {
                            // Handler to call on window resize
                            function handleResize() {
                                // Set window width/height to state
                                setWindowSize({
                                    width: window?.innerWidth,
                                    height: window?.innerHeight
                                });
                            }
                            // Add event listener
                            typeof window !== "undefined" && window.addEventListener("resize", handleResize);
                            // Call handler right away so state gets updated with initial window size
                            handleResize();
                            // Remove event listener on cleanup
                            return () => typeof window !== "undefined" && window.removeEventListener("resize", handleResize);
                        }, []); // Empty array ensures that effect is only run on mount
                        return windowSize;
                    };
                    // Hook
                    const useDimensions = (targetRef) => {
                        const getDimensions = () => ({
                            width: targetRef.current ? targetRef.current.clientWidth : 0,
                            height: targetRef.current ? targetRef.current.clientHeight : 0
                        });
                        const { 0: dimensions, 1: setDimensions } = useState(getDimensions);
                        const handleResize = () => {
                            setDimensions(getDimensions());
                            // console.log(targetRef.current.clientWidth, getDimensions());
                        };
                        useEffect(() => {
                            typeof window !== "undefined" && window.addEventListener("resize", handleResize);
                            return () => typeof window !== "undefined" && window.removeEventListener("resize", handleResize);
                        }, []);
                        useLayoutEffect(() => {
                            handleResize();
                        }, []);
                        return dimensions;
                    };
                    // ========================================================================== //
                    // Api hooks
                    // ========================================================================== //
                    const useDebounce = (value, delay) => {
                        // State and setters for debounced value
                        const { 0: debouncedValue, 1: setDebouncedValue } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
                        (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                            // Update debounced value after delay
                            const handler = setTimeout(() => {
                                setDebouncedValue(value);
                            }, delay);
                            // Cancel the timeout if value changes (also on delay change or unmount)
                            // This is how we prevent debounced value from updating if value is changed ...
                            // .. within the delay period. Timeout gets cleared and restarted.
                            return () => {
                                clearTimeout(handler);
                            };
                        }, [
                            value,
                            delay
                        ]);
                        return debouncedValue;
                    };

                    __webpack_async_result__();
                } catch (e) { __webpack_async_result__(e); }
            });

            /***/
        })

};
;