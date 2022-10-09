"use strict";
exports.id = 607;
exports.ids = [607];
exports.modules = {

/***/ 3306:
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
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9892);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_4__, _util_index__WEBPACK_IMPORTED_MODULE_5__]);
([_store_store__WEBPACK_IMPORTED_MODULE_4__, _util_index__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function AddActor() {
    const [newMessageInput, setFormInput, inputError] = (0,_util_index__WEBPACK_IMPORTED_MODULE_5__/* .useFormStore */ .VW)("messageInput", "body", true, "textArea");
    const [newSenderId, setSenderId, senderInputError] = (0,_util_index__WEBPACK_IMPORTED_MODULE_5__/* .useFormStore */ .VW)("messageInput", "senderId", true, "textArea");
    const [sendMessage] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)((0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_queries__WEBPACK_IMPORTED_MODULE_2__/* .insertOneMessage.toString */ .OM.toString()));
    const theme = (0,_store_store__WEBPACK_IMPORTED_MODULE_4__/* .useTheme */ .Fg)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            ...theme.element.variants.row,
            whiteSpace: "pre-wrap",
            lineBreak: "anywhere",
            borderRadius: theme.core.space[3],
            flexGrow: 1,
            height: "100%",
            alignItems: "center",
            gap: theme.core.space[4],
            color: theme.core.colors.text,
            justifyContent: "start"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                className: "formInput",
                style: {
                    ...theme.element.variants.row,
                    gap: theme.core.space[2],
                    width: "50%",
                    height: "100%"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                    className: "input",
                    style: {
                        borderRadius: theme.core.space[2],
                        padding: theme.core.space[2],
                        boxShadow: `inset ${theme.core.shadows.small}`,
                        minHeight: "100px",
                        minWidth: "350px",
                        width: "100%",
                        height: "100%"
                    },
                    placeholder: "first name",
                    value: newMessageInput,
                    onChange: (e)=>{
                        setFormInput(e.target.value);
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: (e)=>{
                    e.preventDefault();
                    alert(`you sent: ${JSON.stringify({
                        "body": newMessageInput,
                        "senderId": newSenderId
                    }, null, 2)}`);
                    sendMessage({
                        variables: {
                            "body": newMessageInput,
                            "senderId": newSenderId
                        }
                    });
                },
                disabled: newMessageInput.length < 5,
                style: {
                    ...newMessageInput.length < 5 ? {
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
                children: "\uD83D\uDCAC Send Message"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2566:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AddReaction)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7139);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3743);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9892);
/* harmony import */ var emoji_picker_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1243);
/* harmony import */ var emoji_picker_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(emoji_picker_react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_4__, _util_index__WEBPACK_IMPORTED_MODULE_5__]);
([_store_store__WEBPACK_IMPORTED_MODULE_4__, _util_index__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function AddReaction({ messageId  }) {
    const [newMessageReaction, setFormInput, inputError] = (0,_util_index__WEBPACK_IMPORTED_MODULE_5__/* .useFormStore */ .VW)("messageInput", "reactions", true, "text");
    const [sendReaction] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)((0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_queries__WEBPACK_IMPORTED_MODULE_2__/* .insertOneMessage.toString */ .OM.toString()));
    const theme = (0,_store_store__WEBPACK_IMPORTED_MODULE_4__/* .useTheme */ .Fg)();
    const [chosenEmoji, setChosenEmoji] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(null);
    const onEmojiClick = (event, emojiObject)=>{
        setFormInput(emojiObject);
    // sendReaction({variables: {reactions: newMessageReaction}})
    };
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
            chosenEmoji ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                children: [
                    "You chose: ",
                    chosenEmoji?.emoji
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "No emoji Chosen"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((emoji_picker_react__WEBPACK_IMPORTED_MODULE_6___default()), {
                onEmojiClick: onEmojiClick,
                native: true
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8174:
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





function DeleteActor({ messageId  }) {
    const [messageInput, setMessageInput] = react__WEBPACK_IMPORTED_MODULE_3___default().useState("full name");
    const [removeMessage] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)((0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_queries__WEBPACK_IMPORTED_MODULE_2__/* .deleteOneMessage.toString */ .er.toString()));
    const theme = (0,_store_store__WEBPACK_IMPORTED_MODULE_4__/* .useTheme */ .Fg)();
    if (messageId) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: (e)=>{
                e.preventDefault();
                alert(`you sent: ${JSON.stringify({
                    id: messageId
                }, null, 2)}`);
                removeMessage({
                    variables: {
                        id: messageId
                    }
                });
            },
            style: {
                border: "none",
                background: "inherit",
                color: theme.core.colors.danger,
                cursor: "pointer"
            },
            children: "☠️ Delete Message"
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
                    value: messageInput,
                    onChange: (e)=>setMessageInput(e.target.value)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: (e)=>{
                    e.preventDefault();
                    alert(`you sent: ${JSON.stringify({
                        id: messageInput
                    }, null, 2)}`);
                    removeMessage({
                        variables: {
                            id: messageInput
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
                children: "Delete Message ❌"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6423:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MessageContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3743);
/* harmony import */ var _deletemessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8174);
/* harmony import */ var _addreaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2566);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_2__, _deletemessage__WEBPACK_IMPORTED_MODULE_3__, _addreaction__WEBPACK_IMPORTED_MODULE_4__]);
([_store_store__WEBPACK_IMPORTED_MODULE_2__, _deletemessage__WEBPACK_IMPORTED_MODULE_3__, _addreaction__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





//https://table-react-component.vercel.app/demo/animation
function MessageContainer({ data  }) {
    const theme = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__/* .useTheme */ .Fg)();
    const [isOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(-1);
    console.log(data);
    //method to sort an array of objects with a timestamp field, containing a data, in ascending order
    const sortByTimestamp = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((a, b)=>{
        return a.timestamp - b.timestamp;
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            ...theme.element.variants.column,
            gap: theme.core.space[1],
            width: "100%",
            position: "relative",
            justifyContent: "start",
            overflowY: "scroll"
        },
        children: data?.sort(sortByTimestamp).map((message, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    // overflow: 'scroll',
                    maxHeight: "200px",
                    padding: theme.core.space[3],
                    ...theme.element.variants.row,
                    width: "90%",
                    margin: theme.core.space[3],
                    justifyContent: "space-between",
                    borderRadius: theme.core.space[2]
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                style: {
                                    opacity: .5
                                },
                                children: message?.timestamp
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                style: {
                                    boxShadow: theme.core.shadows.small,
                                    border: theme.core.borders.primary,
                                    background: theme.core.colors.background,
                                    marginLeft: theme.core.space[4],
                                    marginBottom: -theme.core.space[2],
                                    padding: theme.core.space[3],
                                    position: "relative",
                                    //style border radius like a chat bubble
                                    borderRadius: `100px 100px 100px 0px`
                                },
                                children: [
                                    message?.body,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            background: theme.core.colors.success,
                                            padding: theme.core.space[1],
                                            borderRadius: theme.core.space[3],
                                            position: "absolute",
                                            bottom: -theme.core.space[3],
                                            right: -theme.core.space[4],
                                            ...theme.element.variants.row
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            onClick: ()=>isOpen === index ? setIsOpen(-1) : setIsOpen(index),
                                            children: [
                                                "\uD83D\uDE42",
                                                index === isOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    // onClick={() => setIsOpen(-1)}
                                                    style: {
                                                        background: theme.core.colors.background,
                                                        boxShadow: theme.core.shadows.large,
                                                        borderRadius: theme.core.space[3],
                                                        position: "absolute",
                                                        top: -theme.core.space[2],
                                                        left: 0,
                                                        zIndex: 20,
                                                        ...theme.element.variants.row
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_addreaction__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                        messageId: message?.id
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    maxWidth: 50,
                                    maxHeight: 50,
                                    height: "50px",
                                    width: "50px",
                                    color: theme.core.colors.text,
                                    background: theme.core.colors.background,
                                    border: theme.core.borders.primary,
                                    borderRadius: "100%",
                                    backgroundImage: `url('https://randomuser.me/api/portraits/men/76.jpg')`,
                                    backgroundSize: "cover",
                                    //fit background image
                                    backgroundPosition: "center"
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                style: {
                                    textTransform: "capitalize"
                                },
                                children: `${message?.actor?.firstname}`
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_deletemessage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            messageId: message?.id
                        })
                    })
                ]
            }))
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8607:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3743);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9892);
/* harmony import */ var _components_messenger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6423);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7139);
/* harmony import */ var _components_messenger_addmessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3306);
/* harmony import */ var _components_progressload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8929);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_3__, _util__WEBPACK_IMPORTED_MODULE_4__, _components_messenger__WEBPACK_IMPORTED_MODULE_5__, _components_messenger_addmessage__WEBPACK_IMPORTED_MODULE_7__, _components_progressload__WEBPACK_IMPORTED_MODULE_8__]);
([_store_store__WEBPACK_IMPORTED_MODULE_3__, _util__WEBPACK_IMPORTED_MODULE_4__, _components_messenger__WEBPACK_IMPORTED_MODULE_5__, _components_messenger_addmessage__WEBPACK_IMPORTED_MODULE_7__, _components_progressload__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function ActorsPage() {
    const [actorData, setActorData] = react__WEBPACK_IMPORTED_MODULE_2___default().useState({});
    const { loading , error , data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useSubscription)((0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_queries__WEBPACK_IMPORTED_MODULE_6__/* .getMessagesSubscription.toString */ .bP.toString()));
    const results = (0,_util__WEBPACK_IMPORTED_MODULE_4__/* .useDebounce */ .Nr)(data, 250);
    const theme = (0,_store_store__WEBPACK_IMPORTED_MODULE_3__/* .useTheme */ .Fg)();
    const deps = [
        actorData,
        loading,
        error
    ];
    // Updating state, will trigger listeners
    const actorsSub = _store_store__WEBPACK_IMPORTED_MODULE_3__/* .useStore.subscribe */ .oR.subscribe((state)=>state.users.actors);
    // debugger;
    // Unsubscribe listeners
    // actorsSub()
    if (data) {
        console.log(JSON.stringify(data, null, 2));
    }
    const pageContent = react__WEBPACK_IMPORTED_MODULE_2___default().useCallback(()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        ...theme.element.variants.column,
                        flexDirection: "column-reverse",
                        justifyContent: "start",
                        alignItems: "center",
                        boxShadow: `inset ${theme.core.shadows.small}`,
                        border: theme.core.borders.primary,
                        background: "white",
                        maxHeight: "60vh",
                        height: "100%",
                        width: "100%",
                        position: "relative",
                        padding: theme.core.space[3],
                        borderRadius: theme.core.space[3],
                        overflowX: "hidden"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_messenger__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        data: results?.messages
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_messenger_addmessage__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
            ]
        }), [
        ...deps,
        results,
        loading
    ]);
    const parseServerResponse = react__WEBPACK_IMPORTED_MODULE_2___default().useCallback((data, statusElement)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
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
                overflowY: "scroll",
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
            width: "90%",
            gap: theme.core.space[3],
            margin: theme.core.space[4]
        },
        children: loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: parseServerResponse(null, /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_progressload__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
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