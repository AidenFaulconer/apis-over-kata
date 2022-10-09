"use strict";
exports.id = 649;
exports.ids = [649];
exports.modules = {

/***/ 3129:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AddActor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7139);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3743);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_4__]);
_store_store__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function AddActor() {
    const [actorInput, setActorInput] = react__WEBPACK_IMPORTED_MODULE_3___default().useState("full name");
    const [formInput, setFormInput] = react__WEBPACK_IMPORTED_MODULE_3___default().useState({
        firstname: "",
        middlename: "",
        lastname: "",
        films: [
            {}
        ],
        roles: [
            {}
        ]
    });
    const [addActor] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)((0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_queries__WEBPACK_IMPORTED_MODULE_2__/* .insertOneActor.toString */ .bg.toString()));
    const theme = (0,_store_store__WEBPACK_IMPORTED_MODULE_4__/* .useTheme */ .Fg)();
    const partsOfName = [
        "firstname",
        "middlename",
        "lastname"
    ];
    const processInput = (input)=>input.split(" ").reduce((acc, namePart, index)=>({
                ...acc,
                [partsOfName[index]]: namePart
            }), {});
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            ...theme.element.variants.column,
            padding: theme.core.space[3],
            background: theme.core.colors.background,
            whiteSpace: "pre-wrap",
            lineBreak: "anywhere",
            borderRadius: theme.core.space[3],
            flexGrow: 1,
            height: "100%",
            alignItems: "center",
            gap: theme.core.space[4],
            boxShadow: theme.core.shadows.small,
            border: theme.core.borders.primary,
            color: theme.core.colors.text
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                className: "formInput",
                style: {
                    ...theme.element.variants.column,
                    gap: theme.core.space[2]
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    className: "input",
                    style: {
                        borderRadius: theme.core.space[1],
                        padding: theme.core.space[2]
                    },
                    placeholder: "first name",
                    value: actorInput,
                    onChange: (e)=>setActorInput(e.target.value)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: (e)=>{
                    e.preventDefault();
                    alert(`you sent: ${JSON.stringify(processInput(actorInput), null, 2)}`);
                    addActor({
                        variables: processInput(actorInput)
                    });
                },
                disabled: actorInput.split(" ").length < 3,
                style: {
                    ...actorInput.split(" ").length < 3 ? {
                        opacity: .3
                    } : {
                        opacity: 1
                    },
                    borderRadius: theme.core.space[1],
                    padding: theme.core.space[3],
                    background: theme.core.colors.success,
                    cursor: "pointer",
                    color: theme.core.colors.textSecondary,
                    boxShadow: "0px 2.5px 7.5px green"
                },
                children: "\uD83D\uDC83 Add Actor"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2482:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DeleteActor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7139);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3743);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_4__]);
_store_store__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function DeleteActor({ actorId  }) {
    const [actorInput, setActorInput] = react__WEBPACK_IMPORTED_MODULE_3___default().useState("full name");
    const [removeActor] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)((0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_queries__WEBPACK_IMPORTED_MODULE_2__/* .deleteOneActor.toString */ .at.toString()));
    const theme = (0,_store_store__WEBPACK_IMPORTED_MODULE_4__/* .useTheme */ .Fg)();
    if (actorId) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: (e)=>{
                e.preventDefault();
                alert(`you sent: ${JSON.stringify({
                    id: actorId
                }, null, 2)}`);
                removeActor({
                    variables: {
                        id: actorId
                    }
                });
            },
            style: {
                borderRadius: theme.core.space[2],
                padding: theme.core.space[3],
                background: theme.core.colors.danger,
                cursor: "pointer",
                color: "white",
                border: theme.core.borders.primary,
                boxShadow: "0px 2.5px 7.5px crimson"
            },
            children: "☠️ Delete"
        });
    } else return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            padding: theme.core.space[3],
            background: theme.core.colors.background,
            whiteSpace: "pre-wrap",
            lineBreak: "anywhere",
            borderRadius: theme.core.space[3],
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: theme.core.space[3],
            boxShadow: theme.core.shadows.small
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                className: "formInput",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    className: "input",
                    style: {
                        borderRadius: "30px",
                        padding: "7.5px"
                    },
                    placeholder: "first name",
                    value: actorInput,
                    onChange: (e)=>setActorInput(e.target.value)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: (e)=>{
                    e.preventDefault();
                    alert(`you sent: ${JSON.stringify({
                        firstname: actorInput
                    }, null, 2)}`);
                    removeActor({
                        variables: {
                            firstname: actorInput
                        }
                    });
                },
                style: {
                    border: theme.core.borders.secondary,
                    borderRadius: "30px",
                    padding: "7.5px",
                    background: "red",
                    cursor: "pointer",
                    color: "white"
                },
                children: "Delete Actor ❌"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 27:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchActors)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3743);
/* harmony import */ var _queries_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7139);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9892);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(352);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_3__, _util__WEBPACK_IMPORTED_MODULE_5__, lodash_es__WEBPACK_IMPORTED_MODULE_6__]);
([_store_store__WEBPACK_IMPORTED_MODULE_3__, _util__WEBPACK_IMPORTED_MODULE_5__, lodash_es__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const SearchResults = ({ searchVariables  })=>{
    const theme = (0,_store_store__WEBPACK_IMPORTED_MODULE_3__/* .useTheme */ .Fg)();
    const { loading , error , data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)((0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_queries_index__WEBPACK_IMPORTED_MODULE_4__/* .searchActors.toString */ .cW.toString()), {
        variables: searchVariables
    });
    if (loading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    if (error) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    // if (error) return <div>error...{JSON.stringify(error, null, 2)}</div>
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            ...theme.element.variants.column,
            padding: theme.core.space[1],
            paddingTop: theme.core.space[2],
            paddingBottom: theme.core.space[2],
            maxHeight: "100%",
            maxWidth: "175px",
            marginTop: theme.core.space[1],
            overflowY: "scroll",
            overflowX: "hidden",
            gap: theme.core.space[2],
            boxShadow: theme.core.shadows.small,
            borderRadius: theme.core.space[2]
        },
        children: data && data?.searchActors.map((actor)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                draggable: true,
                style: {
                    ...theme.element.variants.row,
                    fontSize: theme.core.fonts.fontSizes[0],
                    border: theme.core.borders.primary,
                    padding: theme.core.space[2],
                    borderRadius: theme.core.space[1],
                    background: theme.core.colors.info,
                    color: theme.core.colors.primary,
                    boxShadow: theme.core.shadows.small,
                    maxWidth: "125px"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: "\uD83E\uDDD8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: ` ${actor?.firstname} ${actor?.middlename} ${actor?.lastname}`
                    })
                ]
            }))
    }, (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__.uniqueId)());
};
function SearchActors({ fieldName ="fullname" , formName ="userInput"  }) {
    const theme = (0,_store_store__WEBPACK_IMPORTED_MODULE_3__/* .useTheme */ .Fg)();
    const [newActorInput, setFormInput, inputError] = (0,_util__WEBPACK_IMPORTED_MODULE_5__/* .useFormStore */ .VW)(formName, fieldName, true, "fullName");
    const partsOfName = [
        "firstname",
        "middlename",
        "lastname"
    ];
    const processInput = (input)=>input.split(" ").reduce((acc, namePart, index)=>({
                ...acc,
                [partsOfName[index]]: namePart
            }), {});
    const deps = [
        newActorInput,
        inputError
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            ...theme.element.variants.row,
            padding: theme.core.space[3],
            background: theme.core.colors.background,
            whiteSpace: "pre-wrap",
            lineBreak: "anywhere",
            borderRadius: theme.core.space[3],
            flexGrow: 1,
            height: "325px",
            alignItems: "start",
            gap: theme.core.space[4],
            boxShadow: theme.core.shadows.small,
            border: theme.core.borders.primary,
            color: theme.core.colors.text
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            className: "formInput",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    className: "input",
                    style: {
                        borderRadius: theme.core.space[1],
                        padding: theme.core.space[2]
                    },
                    placeholder: "search full name",
                    value: newActorInput,
                    onChange: (e)=>{
                        e.preventDefault();
                        setFormInput(e.target.value);
                    // alert(`you sent: ${JSON.stringify(processInput(newActorInput), null, 2)}`)
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchResults, {
                    searchVariables: processInput(newActorInput)
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4257:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TableComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3345);
/* harmony import */ var rc_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3743);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_3__]);
_store_store__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




//https://table-react-component.vercel.app/demo/animation
function TableComponent({ data , columns  }) {
    const theme = (0,_store_store__WEBPACK_IMPORTED_MODULE_3__/* .useTheme */ .Fg)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((rc_table__WEBPACK_IMPORTED_MODULE_2___default()), {
        sticky: true,
        style: {
            color: theme.core.colors.text,
            boxShadow: theme.core.shadows.small
        },
        scroll: {
            "x": "true",
            "y": "true"
        },
        tableLayout: "auto",
        onHeaderRow: (columns, index)=>{
            return {
                onClick: ()=>{
                    console.log("onClick", columns, index);
                },
                onMouseEnter: ()=>{
                    console.log("onMouseEnter", columns, index);
                }
            };
        },
        columns: columns,
        data: data
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;