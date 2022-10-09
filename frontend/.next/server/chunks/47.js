"use strict";
exports.id = 47;
exports.ids = [47];
exports.modules = {

/***/ 1047:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7139);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3743);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9892);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_progressload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8929);
/* harmony import */ var _apollo_react_hoc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9564);
/* harmony import */ var _apollo_react_hoc__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hoc__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9810);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_3__, _util_index__WEBPACK_IMPORTED_MODULE_4__, _components_progressload__WEBPACK_IMPORTED_MODULE_6__, immer__WEBPACK_IMPORTED_MODULE_8__]);
([_store_store__WEBPACK_IMPORTED_MODULE_3__, _util_index__WEBPACK_IMPORTED_MODULE_4__, _components_progressload__WEBPACK_IMPORTED_MODULE_6__, immer__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function LoginPage() {
    const [userNameInput, setUserNameInput, userNameInputError] = (0,_util_index__WEBPACK_IMPORTED_MODULE_4__/* .useFormStore */ .VW)("loginInput", "username", true, "username");
    const [passwordInput, setPasswordInput, passwordInputError] = (0,_util_index__WEBPACK_IMPORTED_MODULE_4__/* .useFormStore */ .VW)("loginInput", "password", true, "password");
    const inputErrors = [
        userNameInputError,
        passwordInputError
    ];
    const [login, { loading , error , data  }] = (0,_apollo_react_hoc__WEBPACK_IMPORTED_MODULE_7__.useLazyQuery)((0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_queries__WEBPACK_IMPORTED_MODULE_2__/* .loginOne.toString */ .NJ.toString()));
    const theme = (0,_store_store__WEBPACK_IMPORTED_MODULE_3__/* .useTheme */ .Fg)();
    if (data?.loginOne[0]) {
        const [{ username , id , profile_picture , user_type , bio  }] = data?.loginOne;
        _store_store__WEBPACK_IMPORTED_MODULE_3__/* .useStore.setState */ .oR.setState((0,immer__WEBPACK_IMPORTED_MODULE_8__["default"])((state)=>{
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
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Navigate, {
                to: "/dashboard",
                replace: true
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
            data && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    color: theme.core.colors.danger
                },
                children: "No user found with given email and password"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: "formInput",
                style: {
                    ...theme.element.variants.column,
                    gap: theme.core.space[2]
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        className: "input",
                        style: {
                            borderRadius: theme.core.space[1],
                            padding: theme.core.space[2]
                        },
                        placeholder: "email",
                        value: userNameInput,
                        onChange: (e)=>setUserNameInput(e.target.value)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        className: "input",
                        style: {
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
                    login({
                        variables: {
                            username: userNameInput,
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
                    "\uD83D\uDC83 Login",
                    loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_progressload__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                style: {
                    color: theme.core.colors.text
                },
                children: [
                    "Don't have an account? ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
                        to: "/register",
                        children: "Register"
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