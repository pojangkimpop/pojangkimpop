(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Activity)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/SectionTitle.tsx + 1 modules
var SectionTitle = __webpack_require__(3530);
;// CONCATENATED MODULE: ./src/components/Activity/ActivityItem.tsx

const ActivityItem = ({ name , period , description  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-col md:flex-row gap-6 md:gap-0",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col gap-2",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: `${period[0]}${period[1] ? " - " + period[1] : ""}`
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "whitespace-pre-wrap",
                    children: `${description}`
                })
            ]
        })
    });
};
/* harmony default export */ const Activity_ActivityItem = (ActivityItem);

;// CONCATENATED MODULE: ./src/components/Activity/index.tsx



const Activity = ({ activity  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SectionTitle/* default */.Z, {
                children: "Activities"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col gap-24",
                children: [
                    ...activity
                ].reverse().map((activity)=>/*#__PURE__*/ jsx_runtime_.jsx(Activity_ActivityItem, {
                        ...activity
                    }, activity.id))
            })
        ]
    });
};
/* harmony default export */ const components_Activity = (Activity);


/***/ }),

/***/ 9267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Award)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/SectionTitle.tsx + 1 modules
var SectionTitle = __webpack_require__(3530);
;// CONCATENATED MODULE: ./src/components/Award/AwardItem.tsx

const AwardItem = ({ name , date , organizer , description  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-col md:flex-row gap-6 md:gap-0",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col gap-2",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: date
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: organizer
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "whitespace-pre-wrap",
                    children: `${description}`
                })
            ]
        })
    });
};
/* harmony default export */ const Award_AwardItem = (AwardItem);

;// CONCATENATED MODULE: ./src/components/Award/index.tsx



const Award = ({ award  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SectionTitle/* default */.Z, {
                children: "Award"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col gap-24",
                children: [
                    ...award
                ].reverse().map((certificate)=>/*#__PURE__*/ jsx_runtime_.jsx(Award_AwardItem, {
                        ...certificate
                    }, certificate.id))
            })
        ]
    });
};
/* harmony default export */ const components_Award = (Award);


/***/ }),

/***/ 8330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Certificate)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/SectionTitle.tsx + 1 modules
var SectionTitle = __webpack_require__(3530);
;// CONCATENATED MODULE: ./src/components/Certificate/CertificateItem.tsx

const CertificateItem = ({ name , date , organizer  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-col md:flex-row gap-6 md:gap-0",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col gap-2",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: date
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: organizer
                })
            ]
        })
    });
};
/* harmony default export */ const Certificate_CertificateItem = (CertificateItem);

;// CONCATENATED MODULE: ./src/components/Certificate/index.tsx



const Certificate = ({ certificate  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SectionTitle/* default */.Z, {
                children: "Certificates"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col gap-24",
                children: [
                    ...certificate
                ].reverse().map((certificate)=>/*#__PURE__*/ jsx_runtime_.jsx(Certificate_CertificateItem, {
                        ...certificate
                    }, certificate.id))
            })
        ]
    });
};
/* harmony default export */ const components_Certificate = (Certificate);


/***/ }),

/***/ 1180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ContactItem = ({ children , isEmail , href , className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        target: "_blank",
        rel: "noreferrer",
        href: isEmail ? `mailto:${href}` : href,
        className: "w-fit",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: `px-1 text-xs dark:text-GRAY_HEAVY hover:text-BLACK dark:hover:text-BLACK ${className}`,
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactItem);


/***/ }),

/***/ 7129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Education)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/SectionTitle.tsx + 1 modules
var SectionTitle = __webpack_require__(3530);
;// CONCATENATED MODULE: ./src/components/Education/EducationItem.tsx

const EducationItem = ({ name , description , period  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-col md:flex-row gap-6 md:gap-0",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col gap-2",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: `${period[0]}${period[1] ? " - " + period[1] : ""}`
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "whitespace-pre-wrap",
                    children: `${description}`
                })
            ]
        })
    });
};
/* harmony default export */ const Education_EducationItem = (EducationItem);

;// CONCATENATED MODULE: ./src/components/Education/index.tsx



const Education = ({ education  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SectionTitle/* default */.Z, {
                children: "Education"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col gap-24",
                children: [
                    ...education
                ].reverse().map((education)=>/*#__PURE__*/ jsx_runtime_.jsx(Education_EducationItem, {
                        ...education
                    }, education.id))
            })
        ]
    });
};
/* harmony default export */ const components_Education = (Education);


/***/ }),

/***/ 1794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContactItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1180);


const Footer = ({ contact , name  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "flex flex-col gap-2 justify-center items-center bg-GRAY h-28 text-xs text-white dark:bg-GRAY_EXTRAHEAVY dark:text-GRAY_HEAVY",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex gap-1",
                children: contact.map((contact)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContactItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        ...contact,
                        children: contact.name
                    }, contact.id))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "whitespace-pre-wrap text-center",
                        children: `Copyright 2023. ${name} All rights reserved.`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        href: "https://github.com/sjoleee/very-simple-portfolio",
                        children: "Powered by very-simple-portfolio"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 5222:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3135);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6809);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_1__, remark_gfm__WEBPACK_IMPORTED_MODULE_2__]);
([react_markdown__WEBPACK_IMPORTED_MODULE_1__, remark_gfm__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const Introduce = ({ markdown  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
        remarkPlugins: [
            remark_gfm__WEBPACK_IMPORTED_MODULE_2__["default"]
        ],
        children: markdown ?? ""
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Introduce);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5850:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContactItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1180);
/* harmony import */ var _Introduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5222);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Introduce__WEBPACK_IMPORTED_MODULE_2__]);
_Introduce__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Information = ({ information  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col gap-8",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        className: "leading-[1.15]",
                        children: [
                            "안녕하세요,",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            " 백엔드 개발자",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-PRIMARY font-semibold",
                                children: information.name
                            }),
                            "입니다."
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex gap-1",
                        children: information.contact.map((contact)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContactItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                className: "text-BLACK hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY",
                                ...contact,
                                children: contact.name
                            }, contact.id))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Introduce__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                markdown: information.markdown
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Information);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Layout = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "max-w-4xl mx-auto p-8 flex flex-col gap-28 md:gap-32 md:my-20 my-4 mb-20",
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);


/***/ }),

/***/ 5352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Project_Links)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/assets/images/github.svg
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgGithub = function SvgGithub(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 24,
    height: 24,
    fill: "current",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
  })));
};
/* harmony default export */ const github = (SvgGithub);
;// CONCATENATED MODULE: ./src/assets/images/web.svg
var web_path;
function web_extends() { return web_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, web_extends.apply(null, arguments); }

var SvgWeb = function SvgWeb(props) {
  return /*#__PURE__*/external_react_.createElement("svg", web_extends({
    width: 24,
    height: 24,
    fill: "current",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), web_path || (web_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56ZM14.34 14H9.66c-.1-.66-.16-1.32-.16-2 0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2ZM12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96ZM8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8Zm-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16Zm-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97ZM18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56ZM12 2C6.47 2 2 6.5 2 12A10 10 0 1 0 12 2Z"
  })));
};
/* harmony default export */ const web = (SvgWeb);
;// CONCATENATED MODULE: ./src/components/Project/Links.tsx



const Links = ({ repoUrl , webUrl  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex gap-1",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                target: "_blank",
                rel: "noreferrer",
                href: repoUrl,
                className: "w-fit",
                children: /*#__PURE__*/ jsx_runtime_.jsx(github, {
                    className: "hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white"
                })
            }),
            webUrl && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                target: "_blank",
                rel: "noreferrer",
                href: webUrl,
                className: "w-fit",
                children: /*#__PURE__*/ jsx_runtime_.jsx(web, {
                    className: "hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white"
                })
            })
        ]
    });
};
/* harmony default export */ const Project_Links = (Links);


/***/ }),

/***/ 1456:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3135);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6809);
/* harmony import */ var _Links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5352);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_2__, remark_gfm__WEBPACK_IMPORTED_MODULE_3__]);
([react_markdown__WEBPACK_IMPORTED_MODULE_2__, remark_gfm__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const ProjectItem = ({ name , description , repoUrl , webUrl , period , stack , markdown , imgSrc  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col md:flex-row gap-2 md:gap-0",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col gap-2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex md:flex-col items-center md:items-start mr-4 gap-6",
                    children: [
                        imgSrc && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: imgSrc,
                            width: "200",
                            height: "200",
                            alt: name,
                            className: "object-cover rounded-lg border-[1px] border-GRAY_LIGHT dark:border-white border-solid w-24 h-24"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-48",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex flex-col",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: `${period[0]} - ${period[1]}`
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Links__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    repoUrl: repoUrl,
                                    webUrl: webUrl
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "md:border-GRAY_LIGHT md:border-solid md:border-l-[1px] md:pl-4 markdown flex flex-col w-full gap-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("blockquote", {
                                className: "whitespace-pre-wrap",
                                children: `${description}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex gap-1 flex-wrap",
                                children: stack.map((stack)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: " bg-BLACK dark:bg-white py-[2px] px-1.5 rounded-md text-xs font-medium font-mono whitespace-nowrap text-white dark:text-BLACK",
                                        children: stack
                                    }, stack))
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        remarkPlugins: [
                            remark_gfm__WEBPACK_IMPORTED_MODULE_3__["default"]
                        ],
                        children: markdown ?? ""
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4626:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3530);
/* harmony import */ var _ProjectItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1456);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ProjectItem__WEBPACK_IMPORTED_MODULE_2__]);
_ProjectItem__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Project = ({ project  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionTitle__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        children: "Team Project"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col gap-24",
                        children: [
                            ...project
                        ].reverse().filter((project)=>project.isTeam).map((project)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProjectItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                ...project
                            }, project.id))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionTitle__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        children: "Personal Project"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col gap-24",
                        children: [
                            ...project
                        ].reverse().filter((project)=>!project.isTeam).map((project)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProjectItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                ...project
                            }, project.id))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ResumeTitle = ({ resumeTitle  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-gradient-to-r from-GRADIENT_FROM via-PRIMARY to-GRADIENT_TO h-2 sticky top-0 md:static md:h-20 flex justify-center items-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "text-2xl hidden md:block font-semibold text-white",
            children: resumeTitle.title
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResumeTitle);


/***/ }),

/***/ 3530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_SectionTitle)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Divider.tsx

const Divider = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mt-2 h-[1px] bg-GRAY dark:bg-GRAY_LIGHT mb-16"
    });
};
/* harmony default export */ const components_Divider = (Divider);

;// CONCATENATED MODULE: ./src/components/SectionTitle.tsx



const SectionTitle = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                children: [
                    children,
                    "."
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Divider, {})
        ]
    });
};
/* harmony default export */ const components_SectionTitle = (SectionTitle);


/***/ }),

/***/ 4087:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3135);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6809);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_2__, remark_gfm__WEBPACK_IMPORTED_MODULE_3__]);
([react_markdown__WEBPACK_IMPORTED_MODULE_2__, remark_gfm__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const WorkExperienceItem = ({ name , position , period , markdown , imgSrc  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col md:flex-row gap-6 md:gap-0",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex md:flex-col items-center md:items-start mr-4 gap-6",
                children: [
                    imgSrc && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: imgSrc,
                        width: "200",
                        height: "200",
                        alt: name,
                        className: "object-cover rounded-lg border-[1px] border-GRAY_LIGHT border-solid w-24 h-24"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-48",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "m-0",
                                        children: position
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: `${period[0]} - ${period[1]}`
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "md:border-GRAY_LIGHT md:border-solid md:border-l-[1px] md:pl-4 markdown w-full",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    remarkPlugins: [
                        remark_gfm__WEBPACK_IMPORTED_MODULE_3__["default"]
                    ],
                    children: markdown ?? ""
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkExperienceItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7501:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3530);
/* harmony import */ var _WorkExperienceItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4087);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_WorkExperienceItem__WEBPACK_IMPORTED_MODULE_2__]);
_WorkExperienceItem__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const WorkExperience = ({ workExperience  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionTitle__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                children: "Work Experience"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col gap-24",
                children: [
                    ...workExperience
                ].reverse().map((experience)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WorkExperienceItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        ...experience
                    }, experience.id))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkExperience);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3292);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Activity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9384);
/* harmony import */ var _components_Certificate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8330);
/* harmony import */ var _components_Education__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7129);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1794);
/* harmony import */ var _components_Information__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5850);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6964);
/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4626);
/* harmony import */ var _components_ResumeTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8628);
/* harmony import */ var _components_WorkExperience__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7501);
/* harmony import */ var _components_Award__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9267);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Information__WEBPACK_IMPORTED_MODULE_7__, _components_Project__WEBPACK_IMPORTED_MODULE_9__, _components_WorkExperience__WEBPACK_IMPORTED_MODULE_11__]);
([_components_Information__WEBPACK_IMPORTED_MODULE_7__, _components_Project__WEBPACK_IMPORTED_MODULE_9__, _components_WorkExperience__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











// import ScrollProgress from "@/components/ScrollProgress";


const Home = ({ resumeTitle , information , workExperience , project , activity , education , certificate , award  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ResumeTitle__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                resumeTitle: resumeTitle
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Information__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        information: information
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_WorkExperience__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        workExperience: workExperience
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Project__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        project: project
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Activity__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        activity: activity
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Education__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        education: education
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Certificate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        certificate: certificate
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Award__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        award: award
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                contact: information.contact,
                name: information.name
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
const getStaticProps = async ()=>{
    const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), "data.json");
    const jsonData = await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().readFile(filePath, "utf8");
    const objectData = JSON.parse(jsonData);
    const informationWithData = getImgSrc({
        section: "information",
        item: await getMd({
            section: "information",
            item: {
                ...objectData.information
            }
        })
    });
    const workExperienceWithData = objectData.workExperience.map(async (item)=>{
        return getImgSrc({
            section: "workExperience",
            item: await getMd({
                section: "workExperience",
                item
            })
        });
    });
    const projectWithData = objectData.project.map(async (item)=>{
        return getImgSrc({
            section: "project",
            item: await getMd({
                section: "project",
                item
            })
        });
    });
    return {
        props: {
            ...objectData,
            information: await informationWithData,
            workExperience: await Promise.all(workExperienceWithData),
            project: await Promise.all(projectWithData)
        }
    };
};
const getMd = async ({ section , item  })=>{
    try {
        const markdownModule = await __webpack_require__(6826)(`./${section}/${"id" in item ? item.id : "introduce"}.md`);
        return {
            ...item,
            markdown: markdownModule.default
        };
    } catch  {
        console.log("no markdown");
        return item;
    }
};
const getImgSrc = async ({ section , item  })=>{
    const imgSrc = `/images/${section}/${"id" in item ? item.id : "profile"}.png`;
    const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), "public", imgSrc);
    try {
        await fs_promises__WEBPACK_IMPORTED_MODULE_1__.stat(filePath);
        return {
            ...item,
            imgSrc: imgSrc
        };
    } catch  {
        console.log("no img");
        return item;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6826:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./information/introduce.md": [
		342,
		342
	],
	"./project/0.md": [
		1651,
		651
	],
	"./project/1.md": [
		1944,
		944
	],
	"./project/2.md": [
		1192,
		192
	],
	"./project/3.md": [
		9090,
		90
	],
	"./workExperience/0.md": [
		3052,
		52
	],
	"./workExperience/1.md": [
		9620,
		620
	],
	"./workExperience/2.md": [
		5964,
		964
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 6826;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3135:
/***/ ((module) => {

"use strict";
module.exports = import("react-markdown");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

"use strict";
module.exports = import("remark-gfm");;

/***/ }),

/***/ 3292:
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,675], () => (__webpack_exec__(5970)));
module.exports = __webpack_exports__;

})();