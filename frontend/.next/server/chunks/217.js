"use strict";
exports.id = 217;
exports.ids = [217];
exports.modules = {

/***/ 5217:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RegisterPage)
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_progressload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8929);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9810);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_4__, _util_index__WEBPACK_IMPORTED_MODULE_5__, _components_progressload__WEBPACK_IMPORTED_MODULE_7__, immer__WEBPACK_IMPORTED_MODULE_8__]);
([_store_store__WEBPACK_IMPORTED_MODULE_4__, _util_index__WEBPACK_IMPORTED_MODULE_5__, _components_progressload__WEBPACK_IMPORTED_MODULE_7__, immer__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function RegisterPage() {
    const [userNameInput, setUserNameInput, userNameInputError] = (0,_util_index__WEBPACK_IMPORTED_MODULE_5__/* .useFormStore */ .VW)("loginInput", "username", true, "username");
    const [photoInput, setPhotoInput, photoInputError] = (0,_util_index__WEBPACK_IMPORTED_MODULE_5__/* .useFormStore */ .VW)("loginInput", "profilePhoto", true, "password");
    const [bioInput, setBioInput, bioInputError] = (0,_util_index__WEBPACK_IMPORTED_MODULE_5__/* .useFormStore */ .VW)("loginInput", "bio", true, "text");
    const [userTypeInput, setUserTypeInput, userTypeInputError] = (0,_util_index__WEBPACK_IMPORTED_MODULE_5__/* .useFormStore */ .VW)("loginInput", "userType", true, "text");
    const [passwordInput, setPasswordInput, passwordInputError] = (0,_util_index__WEBPACK_IMPORTED_MODULE_5__/* .useFormStore */ .VW)("loginInput", "password", true, "password");
    const inputErrors = [
        userNameInputError,
        photoInputError,
        bioInputError,
        userTypeInputError,
        passwordInputError
    ];
    const [register, { loading , error , data  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)((0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_queries__WEBPACK_IMPORTED_MODULE_2__/* .registerOne.toString */ .PF.toString()));
    const randomNumber = (0,_util_index__WEBPACK_IMPORTED_MODULE_5__/* .useTrackTime */ .Dp)(0, 2500, (time)=>Math.floor(time + Math.random() * 2));
    const theme = (0,_store_store__WEBPACK_IMPORTED_MODULE_4__/* .useTheme */ .Fg)();
    if (data?.registerOne) {
        const { id , username , profile_picture , user_type , bio  } = data?.registerOne;
        _store_store__WEBPACK_IMPORTED_MODULE_4__/* .useStore.setState */ .oR.setState((0,immer__WEBPACK_IMPORTED_MODULE_8__["default"])((state)=>{
            state.auth.isLoggedIn = true;
            state.auth.user = {
                username,
                id,
                profile_picture,
                user_type,
                bio
            };
        }));
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Navigate, {
                to: "/dashboard"
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            ...theme.element.variants.column,
            padding: theme.core.space[3],
            background: theme.core.colors.background,
            whiteSpace: "pre-wrap",
            lineBreak: "anywhere",
            borderRadius: theme.core.space[3],
            flexGrow: 1,
            width: "100%",
            alignItems: "center",
            gap: theme.core.space[4],
            boxShadow: theme.core.shadows.small,
            border: theme.core.borders.primary,
            color: theme.core.colors.text
        },
        children: [
            inputErrors.map((err)=>err && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        color: theme.core.colors.danger
                    },
                    children: err
                })),
            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    color: theme.core.colors.danger
                },
                children: error.message
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    height: "120px",
                    width: "120px",
                    color: theme.core.colors.text,
                    background: theme.core.colors.background,
                    border: theme.core.borders.secondary,
                    borderRadius: "100%",
                    backgroundImage: `url('${photoInput + randomNumber}')`,
                    boxShadow: theme.core.shadows.small,
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: "formInput",
                style: {
                    width: "400px",
                    ...theme.element.variants.column,
                    gap: theme.core.space[4]
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        className: "input",
                        style: {
                            width: "100%",
                            borderRadius: theme.core.space[1],
                            padding: theme.core.space[2]
                        },
                        value: userNameInput,
                        onChange: (e)=>setUserNameInput(e.target.value)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        className: "input",
                        style: {
                            borderRadius: theme.core.space[1],
                            padding: theme.core.space[2],
                            width: "100%"
                        },
                        placeholder: "profile photo",
                        value: photoInput,
                        onChange: (e)=>setPhotoInput(e.target.value)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        className: "input",
                        style: {
                            border: theme.core.borders.secondary,
                            borderRadius: theme.core.space[1],
                            height: "150px",
                            width: "100%",
                            padding: theme.core.space[2]
                        },
                        placeholder: "description",
                        value: bioInput,
                        onChange: (e)=>setBioInput(e.target.value)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                        className: "input",
                        style: {
                            width: "105%",
                            border: theme.core.borders.secondary,
                            borderRadius: theme.core.space[1],
                            padding: theme.core.space[2]
                        },
                        placeholder: "role",
                        value: userTypeInput,
                        onChange: (e)=>setUserTypeInput(e.target.value),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "actor",
                                children: "actor"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "guest",
                                children: "guest"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        className: "input",
                        style: {
                            width: "100%",
                            borderRadius: theme.core.space[1],
                            padding: theme.core.space[2]
                        },
                        value: passwordInput,
                        onChange: (e)=>setPasswordInput(e.target.value)
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                onClick: (e)=>{
                    e.preventDefault();
                    register({
                        variables: {
                            username: userNameInput,
                            bio: bioInput,
                            userType: userTypeInput,
                            password: passwordInput
                        }
                    });
                },
                disabled: inputErrors.every((error)=>error !== false),
                style: {
                    ...inputErrors.every((error)=>error === false) ? {
                        opacity: 1
                    } : {
                        opacity: .3
                    },
                    borderRadius: theme.core.space[1],
                    padding: theme.core.space[3],
                    background: theme.core.colors.success,
                    cursor: "pointer",
                    color: theme.core.colors.textSecondary,
                    boxShadow: "0px 2.5px 7.5px green"
                },
                children: [
                    "\uD83D\uDC83 Register",
                    loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_progressload__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                style: {
                    color: theme.core.colors.text
                },
                children: [
                    "Already have an account? ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
                        to: "/login",
                        children: "Login"
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;