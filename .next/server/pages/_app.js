(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
;// CONCATENATED MODULE: external "next-seo"
const external_next_seo_namespaceObject = require("next-seo");
;// CONCATENATED MODULE: external "next-themes"
const external_next_themes_namespaceObject = require("next-themes");
;// CONCATENATED MODULE: ./src/pages/_app.tsx




const DEFAULT_SEO = {
    title: "윤종우 | Back-End Dev",
    description: "안녕하세요, 백엔드 개발자 윤종우입니다.",
    canonical: "https://www.naver.com/",
    openGraph: {
        type: "website",
        locale: "ko_KR",
        url: "https://www.naver.com/",
        title: "윤종우 | Back-End Dev",
        site_name: "윤종우 | Back-End Dev",
        images: [
            {
                url: "/share.png",
                width: 285,
                height: 167,
                alt: "윤종우 | Back-End Dev"
            }
        ]
    },
    additionalLinkTags: [
        {
            rel: "icon",
            href: "/favicon.ico"
        }
    ],
    additionalMetaTags: [
        {
            name: "application-name",
            content: "윤종우 | Back-End Dev"
        },
        {
            name: "msapplication-tooltip",
            content: "윤종우 | Back-End Dev"
        },
        {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
        }
    ]
};
const App = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_namespaceObject.DefaultSeo, {
                ...DEFAULT_SEO
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_themes_namespaceObject.ThemeProvider, {
                attribute: "class",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3103));
module.exports = __webpack_exports__;

})();