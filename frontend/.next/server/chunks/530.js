"use strict";
exports.id = 530;
exports.ids = [530];
exports.modules = {

/***/ 530:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActorsPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7139);
/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4257);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_addactor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3129);
/* harmony import */ var _components_deleteactor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2482);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3743);
/* harmony import */ var _components_searchActor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9892);
/* harmony import */ var _components_progressload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8929);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_table__WEBPACK_IMPORTED_MODULE_3__, _components_addactor__WEBPACK_IMPORTED_MODULE_5__, _components_deleteactor__WEBPACK_IMPORTED_MODULE_6__, _store_store__WEBPACK_IMPORTED_MODULE_7__, _components_searchActor__WEBPACK_IMPORTED_MODULE_8__, _util__WEBPACK_IMPORTED_MODULE_9__, _components_progressload__WEBPACK_IMPORTED_MODULE_10__]);
([_components_table__WEBPACK_IMPORTED_MODULE_3__, _components_addactor__WEBPACK_IMPORTED_MODULE_5__, _components_deleteactor__WEBPACK_IMPORTED_MODULE_6__, _store_store__WEBPACK_IMPORTED_MODULE_7__, _components_searchActor__WEBPACK_IMPORTED_MODULE_8__, _util__WEBPACK_IMPORTED_MODULE_9__, _components_progressload__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const mockColumns = [
    {
        title: "Actions",
        dataIndex: "id",
        key: "id",
        render: (text)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_deleteactor__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                actorId: text
            }),
        width: "100px"
    },
    {
        title: "id",
        dataIndex: "id",
        key: "id",
        width: "150px"
    },
    {
        title: "firstname",
        dataIndex: "firstname",
        width: "150px",
        key: "firstname"
    },
    {
        title: "lastname",
        width: "150px",
        dataIndex: "lastname",
        key: "lastname"
    },
    {
        title: "middlename",
        dataIndex: "middlename",
        width: "150px",
        key: "middlename"
    },
    {
        title: "version",
        dataIndex: "version",
        width: "50px",
        key: "version"
    }, 
];
const mockData = [
    {
        firstname: "firstname",
        lastname: "lastname",
        middlename: "middlename"
    }, 
];
function ActorsPage() {
    const [actorData, setActorData] = react__WEBPACK_IMPORTED_MODULE_4___default().useState({
        data: mockData,
        columns: mockColumns
    });
    const { loading , error , data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useSubscription)((0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_queries__WEBPACK_IMPORTED_MODULE_2__/* .getActorsSubscription.toString */ .mr.toString()));
    const results = (0,_util__WEBPACK_IMPORTED_MODULE_9__/* .useDebounce */ .Nr)(data, 250);
    const theme = (0,_store_store__WEBPACK_IMPORTED_MODULE_7__/* .useTheme */ .Fg)();
    const deps = [
        actorData,
        loading,
        error
    ];
    // Updating state, will trigger listeners
    const actorsSub = _store_store__WEBPACK_IMPORTED_MODULE_7__/* .useStore.subscribe */ .oR.subscribe((state)=>state.users.actors);
    // debugger;
    // Unsubscribe listeners
    // actorsSub()
    if (data) {
        console.log(JSON.stringify(data, null, 2));
    }
    const pageContent = react__WEBPACK_IMPORTED_MODULE_4___default().useCallback(()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    ...theme.element.variants.column,
                    boxShadow: theme.core.shadows.small,
                    border: theme.core.borders.primary,
                    background: "white",
                    minHeight: "300px",
                    height: "100%",
                    position: "relative",
                    padding: theme.core.space[3],
                    borderRadius: theme.core.space[3],
                    overflowY: "scroll"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        style: {
                            ...theme.element.variants.row,
                            justifyContent: "start",
                            gap: theme.core.space[3],
                            paddingBottom: theme.core.space[5]
                        },
                        children: [
                            parseServerResponse(data, /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: "\uD83D\uDFE2"
                            })),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_searchActor__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_addactor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_table__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        data: results?.actors,
                        columns: actorData.columns
                    })
                ]
            })
        }), [
        ...deps,
        results,
        loading
    ]);
    const parseServerResponse = react__WEBPACK_IMPORTED_MODULE_4___default().useCallback((data, statusElement)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                ...theme.element.variants.column,
                background: theme.core.colors.background,
                padding: theme.core.space[4],
                flex: 0,
                height: "100%",
                maxHeight: "300px",
                minWidth: "300px",
                whiteSpace: "pre-wrap",
                lineBreak: "anywhere",
                borderRadius: theme.core.space[3],
                boxShadow: theme.core.shadows.small,
                // overflowY: 'scroll',
                overflowX: "hidden",
                border: theme.core.borders.primary
            },
            children: [
                statusElement,
                data && JSON.stringify(data, null, 2)
            ]
        }), deps);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            ...theme.element.variants.row,
            flexWrap: "wrap",
            gap: theme.core.space[3],
            padding: theme.core.space[4]
        },
        children: loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: parseServerResponse(null, /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_progressload__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
            }))
        }) || error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: parseServerResponse(error, /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "\uD83D\uDD34"
            }))
        }) || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: pageContent()
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;