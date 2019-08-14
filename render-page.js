(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@reach/router"), require("core-js/modules/es6.array.find"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.object.to-string"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.match"), require("core-js/modules/es6.regexp.replace"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.includes"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/es6.string.link"), require("core-js/modules/es6.string.small"), require("core-js/modules/es7.array.includes"), require("core-js/modules/web.dom.iterable"), require("fs"), require("lodash"), require("minimatch"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["@reach/router", "core-js/modules/es6.array.find", "core-js/modules/es6.array.iterator", "core-js/modules/es6.array.sort", "core-js/modules/es6.function.name", "core-js/modules/es6.map", "core-js/modules/es6.object.assign", "core-js/modules/es6.object.to-string", "core-js/modules/es6.regexp.constructor", "core-js/modules/es6.regexp.match", "core-js/modules/es6.regexp.replace", "core-js/modules/es6.regexp.split", "core-js/modules/es6.regexp.to-string", "core-js/modules/es6.string.ends-with", "core-js/modules/es6.string.includes", "core-js/modules/es6.string.iterator", "core-js/modules/es6.string.link", "core-js/modules/es6.string.small", "core-js/modules/es7.array.includes", "core-js/modules/web.dom.iterable", "fs", "lodash", "minimatch", "path", "react", "react-dom/server", "react-helmet"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("@reach/router"), require("core-js/modules/es6.array.find"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.object.to-string"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.match"), require("core-js/modules/es6.regexp.replace"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.includes"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/es6.string.link"), require("core-js/modules/es6.string.small"), require("core-js/modules/es7.array.includes"), require("core-js/modules/web.dom.iterable"), require("fs"), require("lodash"), require("minimatch"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else
		root["lib"] = factory(root["@reach/router"], root["core-js/modules/es6.array.find"], root["core-js/modules/es6.array.iterator"], root["core-js/modules/es6.array.sort"], root["core-js/modules/es6.function.name"], root["core-js/modules/es6.map"], root["core-js/modules/es6.object.assign"], root["core-js/modules/es6.object.to-string"], root["core-js/modules/es6.regexp.constructor"], root["core-js/modules/es6.regexp.match"], root["core-js/modules/es6.regexp.replace"], root["core-js/modules/es6.regexp.split"], root["core-js/modules/es6.regexp.to-string"], root["core-js/modules/es6.string.ends-with"], root["core-js/modules/es6.string.includes"], root["core-js/modules/es6.string.iterator"], root["core-js/modules/es6.string.link"], root["core-js/modules/es6.string.small"], root["core-js/modules/es7.array.includes"], root["core-js/modules/web.dom.iterable"], root["fs"], root["lodash"], root["minimatch"], root["path"], root["react"], root["react-dom/server"], root["react-helmet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_find__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_match__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_replace__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_includes__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_link__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_small__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es7_array_includes__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_minimatch__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var plugins = [{
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-glamor/gatsby-ssr */ "./node_modules/gatsby-plugin-glamor/gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}, {
  plugin: __webpack_require__(/*! ./plugins/gatsby-remark-header-custom-ids/gatsby-ssr */ "./plugins/gatsby-remark-header-custom-ids/gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}, {
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-google-analytics/gatsby-ssr */ "./node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "trackingId": "UA-41298772-1"
  }
}, {
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}]; // During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

var apis = __webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js"); // Run the specified API in any plugins that have implemented it


module.exports = function (api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log("This API doesn't exist", api);
  } // Run each plugin in series.
  // eslint-disable-next-line no-undef


  var results = plugins.map(function (plugin) {
    if (!plugin.plugin[api]) {
      return undefined;
    }

    var result = plugin.plugin[api](args, plugin.options);

    if (result && argTransform) {
      args = argTransform({
        args: args,
        result: result
      });
    }

    return result;
  }); // Filter out undefined results.

  results = results.filter(function (result) {
    return typeof result !== "undefined";
  });

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {Object} $0
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {Object} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */
exports.replaceRenderer = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {Object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {Object} pluginOptions
 * @example
 * const { Helmet } = require("react-helmet")
 *
 * exports.onRenderBody = (
 *   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
 *   pluginOptions
 * ) => {
 *   const helmet = Helmet.renderStatic()
 *   setHtmlAttributes(helmet.htmlAttributes.toComponent())
 *   setBodyAttributes(helmet.bodyAttributes.toComponent())
 *   setHeadComponents([
 *     helmet.title.toComponent(),
 *     helmet.link.toComponent(),
 *     helmet.meta.toComponent(),
 *     helmet.noscript.toComponent(),
 *     helmet.script.toComponent(),
 *     helmet.style.toComponent(),
 *   ])
 * }
 */

exports.onRenderBody = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {Object} $0
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Object} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */

exports.onPreRenderHTML = true;
/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper component around pages that won't get
 * unmounted on page change. For setting Provider components use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapPageElement)
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @example
 * import React from "react"
 * import Layout from "./src/components/layout"
 *
 * export const wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */

exports.wrapPageElement = true;
/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to setup any Providers component that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapRootElement)
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @example
 * import React from "react"
 * import { Provider } from "react-redux"
 *
 * import createStore from "./src/state/createStore"
 * const store = createStore()
 *
 * export const wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */

exports.wrapRootElement = true;

/***/ }),

/***/ "./.cache/data.json":
/*!**************************!*\
  !*** ./.cache/data.json ***!
  \**************************/
/*! exports provided: pages, dataPaths, default */
/***/ (function(module) {

module.exports = {"pages":[{"componentChunkName":"component---src-pages-index-js","jsonName":"index","path":"/"},{"componentChunkName":"component---src-pages-404-js","jsonName":"404-html-516","path":"/404.html"},{"componentChunkName":"component---src-pages-404-js","jsonName":"404-22d","path":"/404/"},{"componentChunkName":"component---src-templates-docs-js","jsonName":"docs-advanced-plugin-apis-html-af8","path":"/docs/advanced-plugin-apis.html"},{"componentChunkName":"component---src-templates-docs-js","jsonName":"docs-atomic-modules-html-c50","path":"/docs/atomic-modules.html"},{"componentChunkName":"component---src-templates-docs-js","jsonName":"docs-code-splitting-html-e39","path":"/docs/code-splitting.html"},{"componentChunkName":"component---src-templates-docs-js","jsonName":"docs-common-plugins-html-95d","path":"/docs/common-plugins.html"},{"componentChunkName":"component---src-templates-docs-js","jsonName":"docs-execution-contexts-html-493","path":"/docs/execution-contexts.html"},{"componentChunkName":"component---src-templates-docs-js","jsonName":"docs-extended-configurations-html-b9b","path":"/docs/extended-configurations.html"},{"componentChunkName":"component---src-templates-docs-js","jsonName":"docs-getting-started-html-f09","path":"/docs/getting-started.html"},{"componentChunkName":"component---src-templates-docs-js","jsonName":"docs-plugin-system-html-3f5","path":"/docs/plugin-system.html"},{"componentChunkName":"component---src-templates-docs-js","jsonName":"docs-roadmap-html-fe9","path":"/docs/roadmap.html"},{"componentChunkName":"component---src-templates-docs-js","jsonName":"docs-the-module-graph-html-523","path":"/docs/the-module-graph.html"},{"componentChunkName":"component---src-pages-versions-js","jsonName":"versions-724","path":"/versions/"}],"dataPaths":{"404-22d":"820/path---404-22-d-bce-0SUcWyAf8ecbYDsMhQkEfPzV8","404-html-516":"285/path---404-html-516-62a-0SUcWyAf8ecbYDsMhQkEfPzV8","dev-404-page-5f9":"386/path---dev-404-page-5-f-9-fab-0SUcWyAf8ecbYDsMhQkEfPzV8","docs-advanced-plugin-apis-html-af8":"318/path---docs-advanced-plugin-apis-html-af-8-6d3-SnvoiO08NUKwuMLlWGqheCl1kL0","docs-atomic-modules-html-c50":"101/path---docs-atomic-modules-html-c-50-6bb-RulftXSJZVPmN0Qz3GPvWS9Pkw","docs-code-splitting-html-e39":"502/path---docs-code-splitting-html-e-39-59e-rGOBBzlbS3wINVJaOMjf4lN9Kk4","docs-common-plugins-html-95d":"51/path---docs-common-plugins-html-95-d-ba0-Cha1edPD4cAqUNWGr66Hnsyk0","docs-execution-contexts-html-493":"802/path---docs-execution-contexts-html-493-2cc-2opDDy9gPe7UiIE5sq1FL7J5iak","docs-extended-configurations-html-b9b":"477/path---docs-extended-configurations-html-b-9-b-e8e-aH3j35QKUf85AbjeCB9rjtOD3zE","docs-getting-started-html-f09":"702/path---docs-getting-started-html-f-09-04d-yxpCrXaEjtm3wkcGiyq7uP0rg","docs-plugin-system-html-3f5":"735/path---docs-plugin-system-html-3-f-5-48f-lSDC9svwVMCm8zCGmPCVbbz5kPs","docs-roadmap-html-fe9":"216/path---docs-roadmap-html-fe-9-800-QHQQsM2CN7gVD5ETn61KLiNLZSM","docs-the-module-graph-html-523":"954/path---docs-the-module-graph-html-523-d78-SEkafD8IGX5HFTUlWdxPlE8de8","index":"890/path---index-6a9-ByJmq3evTYndQ8wrXJ0NDSzEqk","versions-724":"726/path---versions-724-e4e-0SUcWyAf8ecbYDsMhQkEfPzV8"}};

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function HTML(props) {
  return Glamor.createElement("html", props.htmlAttributes, Glamor.createElement("head", null, Glamor.createElement("meta", {
    charSet: "utf-8"
  }), Glamor.createElement("meta", {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge"
  }), Glamor.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), props.headComponents), Glamor.createElement("body", props.bodyAttributes, props.preBodyComponents, Glamor.createElement("noscript", {
    key: "noscript",
    id: "gatsby-noscript"
  }, "This app works best with JavaScript enabled."), Glamor.createElement("div", {
    key: "body",
    id: "___gatsby",
    dangerouslySetInnerHTML: {
      __html: props.body
    }
  }), props.postBodyComponents));
}
HTML.propTypes = {
  htmlAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  headComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  bodyAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  preBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  postBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, StaticQueryContext, StaticQuery, PageRenderer, useStaticQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticQuery", function() { return useStaticQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });




var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return Glamor.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return Glamor.createElement("div", null, "Loading (StaticQuery)");
    }
  });
};

var useStaticQuery = function useStaticQuery(query) {
  if (typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext !== "function" && "production" === "development") {
    throw new Error("You're likely using a version of React that doesn't support Hooks\n" + "Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.");
  }

  var context = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);

  if (context[query] && context[query].data) {
    return context[query].data;
  } else {
    throw new Error("The result of this StaticQuery could not be fetched.\n\n" + "This is likely a bug in Gatsby and if refreshing the page does not fix it, " + "please open an issue in https://github.com/gatsbyjs/gatsby/issues");
  }
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away,. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n." + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (false) {} else if (false) {} else {
  module.exports = function () {
    return null;
  };
}

/***/ }),

/***/ "./.cache/static-entry.js":
/*!********************************!*\
  !*** ./.cache/static-entry.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.ends-with */ "core-js/modules/es6.string.ends-with");
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "core-js/modules/es6.array.sort");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "core-js/modules/es6.regexp.to-string");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "core-js/modules/es6.regexp.split");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "core-js/modules/es6.regexp.constructor");
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "core-js/modules/es6.array.iterator");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "core-js/modules/es6.object.to-string");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "core-js/modules/es6.string.iterator");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.map */ "core-js/modules/es6.map");
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12__);














var React = __webpack_require__(/*! react */ "react");

var fs = __webpack_require__(/*! fs */ "fs");

var _require = __webpack_require__(/*! path */ "path"),
    join = _require.join;

var _require2 = __webpack_require__(/*! react-dom/server */ "react-dom/server"),
    renderToString = _require2.renderToString,
    renderToStaticMarkup = _require2.renderToStaticMarkup;

var _require3 = __webpack_require__(/*! @reach/router */ "@reach/router"),
    ServerLocation = _require3.ServerLocation,
    Router = _require3.Router,
    isRedirect = _require3.isRedirect;

var _require4 = __webpack_require__(/*! lodash */ "lodash"),
    get = _require4.get,
    merge = _require4.merge,
    isObject = _require4.isObject,
    flatten = _require4.flatten,
    uniqBy = _require4.uniqBy;

var apiRunner = __webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");

var syncRequires = __webpack_require__(/*! ./sync-requires */ "./.cache/sync-requires.js");

var _require5 = __webpack_require__(/*! ./data.json */ "./.cache/data.json"),
    dataPaths = _require5.dataPaths,
    pages = _require5.pages;

var _require6 = __webpack_require__(/*! gatsby/package.json */ "./node_modules/gatsby/package.json"),
    gatsbyVersion = _require6.version; // Speed up looking up pages.


var pagesObjectMap = new Map();
pages.forEach(function (p) {
  return pagesObjectMap.set(p.path, p);
});
var stats = JSON.parse(fs.readFileSync(process.cwd() + "/public/webpack.stats.json", "utf-8"));
var chunkMapping = JSON.parse(fs.readFileSync(process.cwd() + "/public/chunk-map.json", "utf-8")); // const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.

var testRequireError = function testRequireError(moduleName, err) {
  var regex = new RegExp("Error: Cannot find module\\s." + moduleName);
  var firstLine = err.toString().split("\n")[0];
  return regex.test(firstLine);
};

var Html;

try {
  Html = __webpack_require__(/*! ../src/html */ "./src/html.js");
} catch (err) {
  if (testRequireError("../src/html", err)) {
    Html = __webpack_require__(/*! ./default-html */ "./.cache/default-html.js");
  } else {
    throw err;
  }
}

Html = Html && Html.__esModule ? Html.default : Html;

var getPage = function getPage(path) {
  return pagesObjectMap.get(path);
};

var createElement = React.createElement;

var sanitizeComponents = function sanitizeComponents(components) {
  if (Array.isArray(components)) {
    // remove falsy items
    return components.filter(function (val) {
      return Array.isArray(val) ? val.length > 0 : val;
    });
  } else {
    // we also accept single components, so we need to handle this case as well
    return components ? [components] : [];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function (pagePath, callback) {
  var _postBodyComponents;

  var bodyHtml = "";
  var headComponents = [Glamor.createElement("meta", {
    name: "generator",
    content: "Gatsby " + gatsbyVersion,
    key: "generator-" + gatsbyVersion
  })];
  var htmlAttributes = {};
  var bodyAttributes = {};
  var preBodyComponents = [];
  var postBodyComponents = [];
  var bodyProps = {};

  var replaceBodyHTMLString = function replaceBodyHTMLString(body) {
    bodyHtml = body;
  };

  var setHeadComponents = function setHeadComponents(components) {
    headComponents = headComponents.concat(sanitizeComponents(components));
  };

  var setHtmlAttributes = function setHtmlAttributes(attributes) {
    htmlAttributes = merge(htmlAttributes, attributes);
  };

  var setBodyAttributes = function setBodyAttributes(attributes) {
    bodyAttributes = merge(bodyAttributes, attributes);
  };

  var setPreBodyComponents = function setPreBodyComponents(components) {
    preBodyComponents = preBodyComponents.concat(sanitizeComponents(components));
  };

  var setPostBodyComponents = function setPostBodyComponents(components) {
    postBodyComponents = postBodyComponents.concat(sanitizeComponents(components));
  };

  var setBodyProps = function setBodyProps(props) {
    bodyProps = merge({}, bodyProps, props);
  };

  var getHeadComponents = function getHeadComponents() {
    return headComponents;
  };

  var replaceHeadComponents = function replaceHeadComponents(components) {
    headComponents = sanitizeComponents(components);
  };

  var getPreBodyComponents = function getPreBodyComponents() {
    return preBodyComponents;
  };

  var replacePreBodyComponents = function replacePreBodyComponents(components) {
    preBodyComponents = sanitizeComponents(components);
  };

  var getPostBodyComponents = function getPostBodyComponents() {
    return postBodyComponents;
  };

  var replacePostBodyComponents = function replacePostBodyComponents(components) {
    postBodyComponents = sanitizeComponents(components);
  };

  var page = getPage(pagePath);
  var dataAndContext = {};

  if (page.jsonName in dataPaths) {
    var pathToJsonData = join(process.cwd(), "/public/static/d", dataPaths[page.jsonName] + ".json");

    try {
      dataAndContext = JSON.parse(fs.readFileSync(pathToJsonData));
    } catch (e) {
      console.log("error", pathToJsonData, e);
      process.exit();
    }
  }

  var RouteHandler =
  /*#__PURE__*/
  function (_React$Component) {
    _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default()(RouteHandler, _React$Component);

    function RouteHandler() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = RouteHandler.prototype;

    _proto.render = function render() {
      var props = Object.assign({}, this.props, dataAndContext, {
        pathContext: dataAndContext.pageContext
      });
      var pageElement = createElement(syncRequires.components[page.componentChunkName], props);
      var wrappedPage = apiRunner("wrapPageElement", {
        element: pageElement,
        props: props
      }, pageElement, function (_ref) {
        var result = _ref.result;
        return {
          element: result,
          props: props
        };
      }).pop();
      return wrappedPage;
    };

    return RouteHandler;
  }(React.Component);

  var routerElement = createElement(ServerLocation, {
    url: "" + "" + pagePath
  }, createElement(Router, {
    baseuri: "" + ""
  }, createElement(RouteHandler, {
    path: "/*"
  })));
  var bodyComponent = apiRunner("wrapRootElement", {
    element: routerElement,
    pathname: pagePath
  }, routerElement, function (_ref2) {
    var result = _ref2.result;
    return {
      element: result,
      pathname: pagePath
    };
  }).pop(); // Let the site or plugin render the page component.

  apiRunner("replaceRenderer", {
    bodyComponent: bodyComponent,
    replaceBodyHTMLString: replaceBodyHTMLString,
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    pathPrefix: ""
  }); // If no one stepped up, we'll handle it.

  if (!bodyHtml) {
    try {
      bodyHtml = renderToString(bodyComponent);
    } catch (e) {
      // ignore @reach/router redirect errors
      if (!isRedirect(e)) throw e;
    }
  } // Create paths to scripts


  var scriptsAndStyles = flatten(["app", page.componentChunkName].map(function (s) {
    var fetchKey = "assetsByChunkName[" + s + "]";
    var chunks = get(stats, fetchKey);
    var namedChunkGroups = get(stats, "namedChunkGroups");

    if (!chunks) {
      return null;
    }

    chunks = chunks.map(function (chunk) {
      if (chunk === "/") {
        return null;
      }

      return {
        rel: "preload",
        name: chunk
      };
    });
    namedChunkGroups[s].assets.forEach(function (asset) {
      return chunks.push({
        rel: "preload",
        name: asset
      });
    });
    var childAssets = namedChunkGroups[s].childAssets;

    var _loop = function _loop(rel) {
      chunks = merge(chunks, childAssets[rel].map(function (chunk) {
        return {
          rel: rel,
          name: chunk
        };
      }));
    };

    for (var rel in childAssets) {
      _loop(rel);
    }

    return chunks;
  })).filter(function (s) {
    return isObject(s);
  }).sort(function (s1, s2) {
    return s1.rel == "preload" ? -1 : 1;
  }); // given priority to preload

  scriptsAndStyles = uniqBy(scriptsAndStyles, function (item) {
    return item.name;
  });
  var scripts = scriptsAndStyles.filter(function (script) {
    return script.name && script.name.endsWith(".js");
  });
  var styles = scriptsAndStyles.filter(function (style) {
    return style.name && style.name.endsWith(".css");
  });
  apiRunner("onRenderBody", {
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    bodyHtml: bodyHtml,
    scripts: scripts,
    styles: styles,
    pathPrefix: ""
  });
  scripts.slice(0).reverse().forEach(function (script) {
    // Add preload/prefetch <link>s for scripts.
    headComponents.push(Glamor.createElement("link", {
      as: "script",
      rel: script.rel,
      key: script.name,
      href: "" + "/" + script.name
    }));
  });

  if (page.jsonName in dataPaths) {
    var dataPath = "" + "/static/d/" + dataPaths[page.jsonName] + ".json";
    headComponents.push(Glamor.createElement("link", {
      as: "fetch",
      rel: "preload",
      key: dataPath,
      href: dataPath,
      crossOrigin: "use-credentials"
    }));
  }

  styles.slice(0).reverse().forEach(function (style) {
    // Add <link>s for styles that should be prefetched
    // otherwise, inline as a <style> tag
    if (style.rel === "prefetch") {
      headComponents.push(Glamor.createElement("link", {
        as: "style",
        rel: style.rel,
        key: style.name,
        href: "" + "/" + style.name
      }));
    } else {
      headComponents.unshift(Glamor.createElement("style", {
        "data-href": "" + "/" + style.name,
        dangerouslySetInnerHTML: {
          __html: fs.readFileSync(join(process.cwd(), "public", style.name), "utf-8")
        }
      }));
    }
  }); // Add page metadata for the current page

  var windowData = "/*<![CDATA[*/window.page=" + JSON.stringify(page) + ";" + (page.jsonName in dataPaths ? "window.dataPath=\"" + dataPaths[page.jsonName] + "\";" : "") + "/*]]>*/";
  postBodyComponents.push(Glamor.createElement("script", {
    key: "script-loader",
    id: "gatsby-script-loader",
    dangerouslySetInnerHTML: {
      __html: windowData
    }
  })); // Add chunk mapping metadata

  var scriptChunkMapping = "/*<![CDATA[*/window.___chunkMapping=" + JSON.stringify(chunkMapping) + ";/*]]>*/";
  postBodyComponents.push(Glamor.createElement("script", {
    key: "chunk-mapping",
    id: "gatsby-chunk-mapping",
    dangerouslySetInnerHTML: {
      __html: scriptChunkMapping
    }
  })); // Filter out prefetched bundles as adding them as a script tag
  // would force high priority fetching.

  var bodyScripts = scripts.filter(function (s) {
    return s.rel !== "prefetch";
  }).map(function (s) {
    var scriptPath = "" + "/" + JSON.stringify(s.name).slice(1, -1);
    return Glamor.createElement("script", {
      key: scriptPath,
      src: scriptPath,
      async: true
    });
  });

  (_postBodyComponents = postBodyComponents).push.apply(_postBodyComponents, bodyScripts);

  apiRunner("onPreRenderHTML", {
    getHeadComponents: getHeadComponents,
    replaceHeadComponents: replaceHeadComponents,
    getPreBodyComponents: getPreBodyComponents,
    replacePreBodyComponents: replacePreBodyComponents,
    getPostBodyComponents: getPostBodyComponents,
    replacePostBodyComponents: replacePostBodyComponents,
    pathname: pagePath,
    pathPrefix: ""
  });
  var html = "<!DOCTYPE html>" + renderToStaticMarkup(Glamor.createElement(Html, Object.assign({}, bodyProps, {
    headComponents: headComponents,
    htmlAttributes: htmlAttributes,
    bodyAttributes: bodyAttributes,
    preBodyComponents: preBodyComponents,
    postBodyComponents: postBodyComponents,
    body: bodyHtml,
    path: pagePath
  })));
  callback(null, html);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./.cache/sync-requires.js":
/*!*********************************!*\
  !*** ./.cache/sync-requires.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js"),
    hot = _require.hot; // prefer default export if available


var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

exports.components = {
  "component---src-templates-docs-js": hot(preferDefault(__webpack_require__(/*! ./src/templates/docs.js */ "./src/templates/docs.js"))),
  "component---src-pages-404-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/404.js */ "./src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js"))),
  "component---src-pages-versions-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/versions.js */ "./src/pages/versions.js")))
};

/***/ }),

/***/ "./content/docs/nav.yml":
/*!******************************!*\
  !*** ./content/docs/nav.yml ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [{"title":"Introduction","items":[{"id":"roadmap","title":"Roadmap"},{"id":"getting-started","title":"Getting Started"},{"id":"extended-configurations","title":"Extended Configurations"}]},{"title":"Plugin System","items":[{"id":"plugin-system","title":"Plugin System"},{"id":"common-plugins","title":"Common Plugins"},{"id":"advanced-plugin-apis","title":"Advanced Plugin APIs"}]},{"title":"Advanced Concepts","isOrdered":true,"items":[{"id":"execution-contexts","title":"Execution Contexts"},{"id":"the-module-graph","title":"The Module Graph"},{"id":"atomic-modules","title":"Atomic Modules"},{"id":"code-splitting","title":"Code Splitting"}]}]

/***/ }),

/***/ "./content/versions.yml":
/*!******************************!*\
  !*** ./content/versions.yml ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [{"title":"0.1.3","changelog":"https://github.com/packem/packem/blob/master/CHANGELOG.md"}]

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/css-in-js-utils/lib/hyphenateProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;

var _hyphenateStyleName = __webpack_require__(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js");

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js":
/*!*************************************************************!*\
  !*** ./node_modules/css-in-js-utils/lib/isPrefixedValue.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;
var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/cxs/dist/index.js":
/*!****************************************!*\
  !*** ./node_modules/cxs/dist/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cache = {};
var prefix = 'x';
var rules = [];
var insert = function insert(rule) {
  return rules.push(rule);
};
var hyph = function hyph(s) {
  return s.replace(/[A-Z]|^ms/g, '-$&').toLowerCase();
};
var mx = function mx(rule, media) {
  return media ? media + '{' + rule + '}' : rule;
};
var rx = function rx(cn, prop, val) {
  return '.' + cn + '{' + hyph(prop) + ':' + val + '}';
};
var noAnd = function noAnd(s) {
  return s.replace(/&/g, '');
};

var parse = function parse(obj) {
  var child = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var media = arguments[2];
  return Object.keys(obj).map(function (key) {
    var val = obj[key];
    if (val === null) return '';
    if (typeof val === 'object') {
      var m2 = /^@/.test(key) ? key : null;
      var c2 = m2 ? child : child + key;
      return parse(val, c2, m2 || media);
    }
    var _key = key + val + child + media;
    if (cache[_key]) return cache[_key];
    var className = prefix + rules.length.toString(36);
    insert(mx(rx(className + noAnd(child), key, val), media));
    cache[_key] = className;
    return className;
  }).join(' ');
};

module.exports = function () {
  for (var _len = arguments.length, styles = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    styles[_key2] = arguments[_key2];
  }

  return styles.map(function (style) {
    return parse(style);
  }).join(' ').trim();
};

module.exports.css = function () {
  return rules.sort().join('');
};

module.exports.reset = function () {
  cache = {};
  while (rules.length) {
    rules.pop();
  }
};

module.exports.prefix = function (val) {
  return prefix = val;
};

if (typeof document !== 'undefined') {
  var sheet = document.head.appendChild(document.createElement('style')).sheet;
  insert = function insert(rule) {
    rules.push(rule);
    sheet.insertRule(rule, sheet.cssRules.length);
  };
}

/***/ }),

/***/ "./node_modules/fbjs/lib/camelize.js":
/*!*******************************************!*\
  !*** ./node_modules/fbjs/lib/camelize.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var _hyphenPattern = /-(.)/g;

/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */
function camelize(string) {
  return string.replace(_hyphenPattern, function (_, character) {
    return character.toUpperCase();
  });
}

module.exports = camelize;

/***/ }),

/***/ "./node_modules/fbjs/lib/camelizeStyleName.js":
/*!****************************************************!*\
  !*** ./node_modules/fbjs/lib/camelizeStyleName.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */



var camelize = __webpack_require__(/*! ./camelize */ "./node_modules/fbjs/lib/camelize.js");

var msPattern = /^-ms-/;

/**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function camelizeStyleName(string) {
  return camelize(string.replace(msPattern, 'ms-'));
}

module.exports = camelizeStyleName;

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/fbjs/lib/hyphenate.js":
/*!********************************************!*\
  !*** ./node_modules/fbjs/lib/hyphenate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

module.exports = hyphenate;

/***/ }),

/***/ "./node_modules/fbjs/lib/hyphenateStyleName.js":
/*!*****************************************************!*\
  !*** ./node_modules/fbjs/lib/hyphenateStyleName.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */



var hyphenate = __webpack_require__(/*! ./hyphenate */ "./node_modules/fbjs/lib/hyphenate.js");

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

/***/ }),

/***/ "./node_modules/fbjs/lib/memoizeStringOnly.js":
/*!****************************************************!*\
  !*** ./node_modules/fbjs/lib/memoizeStringOnly.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @typechecks static-only
 */



/**
 * Memoizes the return value of a function that accepts one string argument.
 */

function memoizeStringOnly(callback) {
  var cache = {};
  return function (string) {
    if (!cache.hasOwnProperty(string)) {
      cache[string] = callback.call(this, string);
    }
    return cache[string];
  };
}

module.exports = memoizeStringOnly;

/***/ }),

/***/ "./node_modules/fbjs/lib/warning.js":
/*!******************************************!*\
  !*** ./node_modules/fbjs/lib/warning.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (false) { var printWarning; }

module.exports = warning;

/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

var _parsePath = __webpack_require__(/*! ./parse-path */ "./node_modules/gatsby-link/parse-path.js");

exports.parsePath = _parsePath.parsePath;

/*global __PATH_PREFIX__ */
function withPrefix(path) {
  return normalizePath("" + "/" + path);
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object,
  partiallyActive: _propTypes.default.bool // Set up IntersectionObserver

};

var handleIntersection = function handleIntersection(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
};

var GatsbyLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "defaultGetProps", function (_ref) {
      var isPartiallyCurrent = _ref.isPartiallyCurrent,
          isCurrent = _ref.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && this.props.innerRef.hasOwnProperty("current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      handleIntersection(ref, function () {
        ___loader.enqueue((0, _parsePath.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace"]);
    var LOCAL_URL = /^\/(?!\/)/;

    if (false) {}

    var prefixedTo = withPrefix(to);
    return _react.default.createElement(_router.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        ___loader.hovering((0, _parsePath.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault(); // Make sure the necessary scripts and data are
          // loaded before continuing.

          navigate(to, {
            state: state,
            replace: replace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool
});

var _default = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(GatsbyLink, (0, _extends2.default)({
    innerRef: ref
  }, props));
});

exports.default = _default;

var navigate = function navigate(to, options) {
  window.___navigate(withPrefix(to), options);
};

exports.navigate = navigate;

var push = function push(to) {
  console.warn("The \"push\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___push(withPrefix(to));
};

exports.push = push;

var replace = function replace(to) {
  console.warn("The \"replace\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___replace(withPrefix(to));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  console.warn("The \"navigateTo\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),

/***/ "./node_modules/gatsby-link/parse-path.js":
/*!************************************************!*\
  !*** ./node_modules/gatsby-link/parse-path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "./node_modules/gatsby-plugin-glamor/gatsby-ssr.js":
/*!*********************************************************!*\
  !*** ./node_modules/gatsby-plugin-glamor/gatsby-ssr.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _require = __webpack_require__(/*! glamor/server */ "./node_modules/glamor/server.js"),
    renderStaticOptimized = _require.renderStaticOptimized;

exports.replaceRenderer = function (_ref) {
  var bodyComponent = _ref.bodyComponent,
      replaceBodyHTMLString = _ref.replaceBodyHTMLString,
      setHeadComponents = _ref.setHeadComponents;

  var _renderStaticOptimize = renderStaticOptimized(function () {
    return (0, _server.renderToString)(bodyComponent);
  }),
      html = _renderStaticOptimize.html,
      css = _renderStaticOptimize.css,
      ids = _renderStaticOptimize.ids;

  replaceBodyHTMLString(html);
  setHeadComponents([_react.default.createElement("style", {
    id: "glamor-styles",
    key: "glamor-styles",
    dangerouslySetInnerHTML: {
      __html: css
    }
  }), _react.default.createElement("script", {
    id: "glamor-ids",
    key: "glamor-ids",
    dangerouslySetInnerHTML: {
      __html: "\n        // <![CDATA[\n        window._glamor = " + JSON.stringify(ids) + "\n        // ]]>\n        "
    }
  })]);
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var knownOptions = {
  clientId: "string",
  sampleRate: "number",
  siteSpeedSampleRate: "number",
  alwaysSendReferrer: "boolean",
  allowAnchor: "boolean",
  cookieName: "string",
  cookieExpires: "number",
  storeGac: "boolean",
  legacyCookieDomain: "string",
  legacyHistoryImport: "boolean",
  allowLinker: "boolean"
};

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents,
      setPostBodyComponents = _ref.setPostBodyComponents;

  if (false) {} // Lighthouse recommends pre-connecting to google analytics


  setHeadComponents([_react.default.createElement("link", {
    rel: "preconnect dns-prefetch",
    key: "preconnect-google-analytics",
    href: "https://www.google-analytics.com"
  })]);
  var excludeGAPaths = [];

  if (typeof pluginOptions.exclude !== "undefined") {
    var Minimatch = __webpack_require__(/*! minimatch */ "minimatch").Minimatch;

    pluginOptions.exclude.map(function (exclude) {
      var mm = new Minimatch(exclude);
      excludeGAPaths.push(mm.makeRe());
    });
  }

  var gaCreateOptions = {};

  for (var option in knownOptions) {
    if (typeof pluginOptions[option] === knownOptions[option]) {
      gaCreateOptions[option] = pluginOptions[option];
    }
  }

  var setComponents = pluginOptions.head ? setHeadComponents : setPostBodyComponents;
  return setComponents([_react.default.createElement("script", {
    key: "gatsby-plugin-google-analytics",
    dangerouslySetInnerHTML: {
      __html: "\n  " + (excludeGAPaths.length ? "window.excludeGAPaths=[" + excludeGAPaths.join(",") + "];" : "") + "\n  " + (typeof pluginOptions.anonymize !== "undefined" && pluginOptions.anonymize === true ? "function gaOptout(){document.cookie=disableStr+'=true; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/',window[disableStr]=!0}var gaProperty='" + pluginOptions.trackingId + "',disableStr='ga-disable-'+gaProperty;document.cookie.indexOf(disableStr+'=true')>-1&&(window[disableStr]=!0);" : "") + "\n  if(" + (typeof pluginOptions.respectDNT !== "undefined" && pluginOptions.respectDNT == true ? "!(navigator.doNotTrack == \"1\" || window.doNotTrack == \"1\")" : "true") + ") {\n    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n  }\n  if (typeof ga === \"function\") {\n    ga('create', '" + pluginOptions.trackingId + "', '" + (typeof pluginOptions.cookieDomain === "string" ? pluginOptions.cookieDomain : "auto") + "', " + (typeof pluginOptions.name === "string" ? "'" + pluginOptions.name + "', " : "") + JSON.stringify(gaCreateOptions) + ");\n      " + (typeof pluginOptions.anonymize !== "undefined" && pluginOptions.anonymize === true ? "ga('set', 'anonymizeIp', true);" : "") + "\n      " + (typeof pluginOptions.optimizeId !== "undefined" ? "ga('require', '" + pluginOptions.optimizeId + "');" : "") + "\n      " + (typeof pluginOptions.experimentId !== "undefined" ? "ga('set', 'expId', '" + pluginOptions.experimentId + "');" : "") + "\n      " + (typeof pluginOptions.variationId !== "undefined" ? "ga('set', 'expVar', '" + pluginOptions.variationId + "');" : "") + "}\n      "
    }
  })]);
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.onRenderBody = void 0;

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var onRenderBody = function onRenderBody(_ref) {
  var setHeadComponents = _ref.setHeadComponents,
      setHtmlAttributes = _ref.setHtmlAttributes,
      setBodyAttributes = _ref.setBodyAttributes;

  var helmet = _reactHelmet.Helmet.renderStatic(); // These action functions were added partway through the Gatsby 1.x cycle.


  if (setHtmlAttributes) {
    setHtmlAttributes(helmet.htmlAttributes.toComponent());
  }

  if (setBodyAttributes) {
    setBodyAttributes(helmet.bodyAttributes.toComponent());
  }

  setHeadComponents([helmet.title.toComponent(), helmet.link.toComponent(), helmet.meta.toComponent(), helmet.noscript.toComponent(), helmet.script.toComponent(), helmet.style.toComponent()]);
};

exports.onRenderBody = onRenderBody;

/***/ }),

/***/ "./node_modules/gatsby/package.json":
/*!******************************************!*\
  !*** ./node_modules/gatsby/package.json ***!
  \******************************************/
/*! exports provided: name, description, version, author, bin, bugs, dependencies, devDependencies, engines, files, homepage, keywords, license, main, module, peerDependencies, repository, resolutions, scripts, types, yargs, gitHead, default */
/***/ (function(module) {

module.exports = {"name":"gatsby","description":"Blazing fast modern site generator for React","version":"2.3.14","author":"Kyle Mathews <mathews.kyle@gmail.com>","bin":{"gatsby":"./dist/bin/gatsby.js"},"bugs":{"url":"https://github.com/gatsbyjs/gatsby/issues"},"dependencies":{"@babel/code-frame":"^7.0.0","@babel/core":"^7.0.0","@babel/parser":"^7.0.0","@babel/polyfill":"^7.0.0","@babel/runtime":"^7.0.0","@babel/traverse":"^7.0.0","@gatsbyjs/relay-compiler":"2.0.0-printer-fix.2","@mikaelkristiansson/domready":"^1.0.9","@pieh/friendly-errors-webpack-plugin":"1.7.0-chalk-2","@reach/router":"^1.1.1","@stefanprobst/lokijs":"^1.5.6-b","address":"1.0.3","autoprefixer":"^9.4.3","babel-core":"7.0.0-bridge.0","babel-eslint":"^9.0.0","babel-loader":"^8.0.0","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-dynamic-import-node":"^1.2.0","babel-plugin-remove-graphql-queries":"^2.6.3","babel-preset-gatsby":"^0.1.11","better-opn":"0.1.4","better-queue":"^3.8.6","bluebird":"^3.5.0","browserslist":"3.2.8","cache-manager":"^2.9.0","cache-manager-fs-hash":"^0.0.6","chalk":"^2.3.2","chokidar":"2.1.2","common-tags":"^1.4.0","compression":"^1.7.3","convert-hrtime":"^2.0.0","copyfiles":"^1.2.0","core-js":"^2.5.0","css-loader":"^1.0.0","debug":"^3.1.0","del":"^3.0.0","detect-port":"^1.2.1","devcert-san":"^0.3.3","dotenv":"^4.0.0","eslint":"^5.6.0","eslint-config-react-app":"^3.0.0","eslint-loader":"^2.1.0","eslint-plugin-flowtype":"^2.46.1","eslint-plugin-graphql":"^2.0.0","eslint-plugin-import":"^2.9.0","eslint-plugin-jsx-a11y":"^6.0.3","eslint-plugin-react":"^7.8.2","event-source-polyfill":"^1.0.5","express":"^4.16.3","express-graphql":"^0.6.12","fast-levenshtein":"~2.0.4","file-loader":"^1.1.11","flat":"^4.0.0","fs-exists-cached":"1.0.0","fs-extra":"^5.0.0","gatsby-cli":"^2.5.5","gatsby-link":"^2.0.16","gatsby-plugin-page-creator":"^2.0.12","gatsby-react-router-scroll":"^2.0.7","gatsby-telemetry":"^1.0.5","glob":"^7.1.1","graphql":"^14.1.1","graphql-compose":"^6.0.3","graphql-playground-middleware-express":"^1.7.10","graphql-relay":"^0.6.0","graphql-tools":"^3.0.4","hash-mod":"^0.0.5","invariant":"^2.2.4","is-relative":"^1.0.0","is-relative-url":"^2.0.0","is-wsl":"^1.1.0","jest-worker":"^23.2.0","joi":"12.x.x","json-loader":"^0.5.7","json-stringify-safe":"^5.0.1","kebab-hash":"^0.1.2","lodash":"^4.17.10","md5":"^2.2.1","md5-file":"^3.1.1","mime":"^2.2.0","mini-css-extract-plugin":"^0.4.0","mitt":"^1.1.2","mkdirp":"^0.5.1","moment":"^2.21.0","name-all-modules-plugin":"^1.0.1","normalize-path":"^2.1.1","null-loader":"^0.1.1","opentracing":"^0.14.3","optimize-css-assets-webpack-plugin":"^5.0.1","parseurl":"^1.3.2","physical-cpu-count":"^2.0.0","pnp-webpack-plugin":"^1.4.1","postcss-flexbugs-fixes":"^3.0.0","postcss-loader":"^2.1.3","prop-types":"^15.6.1","raw-loader":"^0.5.1","react-dev-utils":"^4.2.1","react-error-overlay":"^3.0.0","react-hot-loader":"^4.6.2","redux":"^4.0.0","request":"^2.85.0","semver":"^5.6.0","shallow-compare":"^1.2.2","sift":"^5.1.0","signal-exit":"^3.0.2","slash":"^1.0.0","socket.io":"^2.0.3","stack-trace":"^0.0.10","string-similarity":"^1.2.0","style-loader":"^0.21.0","terser-webpack-plugin":"^1.2.2","true-case-path":"^1.0.3","type-of":"^2.0.1","url-loader":"^1.0.1","util.promisify":"^1.0.0","uuid":"^3.1.0","v8-compile-cache":"^1.1.0","webpack":"~4.28.4","webpack-dev-middleware":"^3.0.1","webpack-dev-server":"^3.1.14","webpack-hot-middleware":"^2.21.0","webpack-merge":"^4.1.0","webpack-stats-plugin":"^0.1.5","xstate":"^4.3.2","yaml-loader":"^0.5.0"},"devDependencies":{"@babel/cli":"^7.0.0","@babel/runtime":"^7.0.0","babel-preset-gatsby-package":"^0.1.4","cross-env":"^5.1.4","rimraf":"^2.6.1"},"engines":{"node":">=6.0.0"},"files":["cache-dir","dist","graphql.js","index.d.ts"],"homepage":"https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme","keywords":["blog","generator","jekyll","markdown","react","ssg","website"],"license":"MIT","main":"cache-dir/commonjs/gatsby-browser-entry.js","module":"cache-dir/gatsby-browser-entry.js","peerDependencies":{"react":"^16.4.2","react-dom":"^16.4.2"},"repository":{"type":"git","url":"git+https://github.com/gatsbyjs/gatsby.git"},"resolutions":{"graphql":"^14.1.1"},"scripts":{"build":"npm run build:src && npm run build:internal-plugins && npm run build:rawfiles && npm run build:cjs","build:internal-plugins":"copyfiles -u 1 src/internal-plugins/**/package.json dist","build:rawfiles":"copyfiles -u 1 src/internal-plugins/**/raw_* dist","build:cjs":"babel cache-dir --out-dir cache-dir/commonjs --ignore **/__tests__","build:src":"babel src --out-dir dist --source-maps --ignore **/gatsby-cli.js,**/raw_*,**/__tests__","clean-test-bundles":"find test/ -type f -name bundle.js* -exec rm -rf {} +","prebuild":"rimraf dist && rimraf cache-dir/commonjs","prepare":"cross-env NODE_ENV=production npm run build","watch":"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch"},"types":"index.d.ts","yargs":{"boolean-negation":false},"gitHead":"169c9640938864414189bfb744694678bf973a89"};

/***/ }),

/***/ "./node_modules/github-buttons/dist/buttons.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/github-buttons/dist/buttons.esm.js ***!
  \*********************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render$1; });
/*!
 * github-buttons v2.2.10
 * (c) 2019 なつき
 * @license BSD-2-Clause
 */
var document = window.document;

var location = document.location;

var encodeURIComponent = window.encodeURIComponent;

var decodeURIComponent = window.decodeURIComponent;

var Math = window.Math;

var HTMLElement = window.HTMLElement;

var XMLHttpRequest = window.XMLHttpRequest;

var createElementInDocument = function (document) {
  return function (tag, props, children) {
    var el = document.createElement(tag);
    if (props) {
      for (var prop in props) {
        var val = props[prop];
        if (val != null) {
          if (el[prop] != null) {
            el[prop] = val;
          } else {
            el.setAttribute(prop, val);
          }
        }
      }
    }
    if (children) {
      for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        el.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
      }
    }
    return el
  }
};

var createElement = createElementInDocument(document);

var dispatchOnce = function (func) {
  var onceToken;
  return function () {
    if (!onceToken) {
      onceToken = 1;
      func.apply(this, arguments);
    }
  }
};

var name = "github-buttons";
var version = "2.2.10";

var iframeURL = 'https://' + (/* istanbul ignore next */  'unpkg.com/' + name + '@' + version + '/dist' ) + '/buttons.html';

var apiBaseURL = 'https://api.github.com';

var useXHR = XMLHttpRequest && XMLHttpRequest.prototype && 'withCredentials' in XMLHttpRequest.prototype;

var useShadowDOM = useXHR && HTMLElement && HTMLElement.prototype.attachShadow && !HTMLElement.prototype.attachShadow.prototype;

var onEvent = function (target, eventName, func) {
  /* istanbul ignore else: IE lt 9 */
  if (target.addEventListener) {
    target.addEventListener(eventName, func);
  } else {
    target.attachEvent('on' + eventName, func);
  }
};

var offEvent = function (target, eventName, func) {
  /* istanbul ignore else: IE lt 9 */
  if (target.removeEventListener) {
    target.removeEventListener(eventName, func);
  } else {
    target.detachEvent('on' + eventName, func);
  }
};

var onceEvent = function (target, eventName, func) {
  var callback = function (event) {
    offEvent(target, eventName, callback);
    return func(event)
  };
  onEvent(target, eventName, callback);
};

var onceReadyStateChange = /* istanbul ignore next: IE lt 9 */ function (target, regex, func) {
  var eventName = 'readystatechange';
  var callback = function (event) {
    if (regex.test(target.readyState)) {
      offEvent(target, eventName, callback);
      return func(event)
    }
  };
  onEvent(target, eventName, callback);
};

var parseOptions = function (anchor) {
  var options = {
    href: anchor.href,
    title: anchor.title,
    'aria-label': anchor.getAttribute('aria-label')
  };
  var ref = ['icon', 'text', 'size', 'show-count'];
  for (var i = 0, len = ref.length; i < len; i++) {
    var attribute = 'data-' + ref[i];
    options[attribute] = anchor.getAttribute(attribute);
  }
  if (options['data-text'] == null) {
    options['data-text'] = anchor.textContent || anchor.innerText;
  }
  return options
};

var cssText = "body{margin:0}a{color:#24292e;text-decoration:none;outline:0}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}.widget{display:inline-block;overflow:hidden;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif;font-size:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.btn,.social-count{display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;border:1px solid #c5c9cc;border-radius:0.25em}.btn{background-color:#eff3f6;background-image:-webkit-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);background-position:-1px -1px;background-repeat:repeat-x;background-size:110% 110%;border-color:rgba(27,31,35,0.2);-ms-filter:\"progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')\";*filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')}.btn:active{background-color:#e9ecef;background-image:none;border-color:#a5a9ac;border-color:rgba(27,31,35,0.35);box-shadow:inset 0 0.15em 0.3em rgba(27,31,35,0.15)}.btn:focus,.btn:hover{background-color:#e6ebf1;background-image:-webkit-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:-moz-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);border-color:#a5a9ac;border-color:rgba(27,31,35,0.35);-ms-filter:\"progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0')\";*filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0')}.social-count{position:relative;margin-left:5px;background-color:#fff}.social-count:focus,.social-count:hover{color:#0366d6}.social-count b,.social-count i{position:absolute;top:50%;left:0;display:block;width:0;height:0;margin:-4px 0 0 -4px;border:solid transparent;border-width:4px 4px 4px 0;_line-height:0;_border-top-color:red !important;_border-bottom-color:red !important;_border-left-color:red !important;_filter:chroma(color=red)}.social-count b{border-right-color:#c5c9cc}.social-count i{margin-left:-3px;border-right-color:#fff}.lg .btn,.lg .social-count{height:16px;padding:5px 10px;font-size:12px;line-height:16px}.lg .social-count{margin-left:6px}.lg .social-count b,.lg .social-count i{margin:-5px 0 0 -5px;border-width:5px 5px 5px 0}.lg .social-count i{margin-left:-4px}\n";

var data = {"mark-github":{"width":16,"height":16,"path":"<path fill-rule=\"evenodd\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z\"/>"},"eye":{"width":16,"height":16,"path":"<path fill-rule=\"evenodd\" d=\"M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z\"/>"},"star":{"width":14,"height":16,"path":"<path fill-rule=\"evenodd\" d=\"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z\"/>"},"repo-forked":{"width":10,"height":16,"path":"<path fill-rule=\"evenodd\" d=\"M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z\"/>"},"issue-opened":{"width":14,"height":16,"path":"<path fill-rule=\"evenodd\" d=\"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z\"/>"},"cloud-download":{"width":16,"height":16,"path":"<path fill-rule=\"evenodd\" d=\"M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z\"/>"}};

var octicon = function (icon, height) {
  icon = ('' + icon).toLowerCase().replace(/^octicon-/, '');
  if (!{}.hasOwnProperty.call(data, icon)) {
    icon = 'mark-github';
  }
  return '<svg version="1.1" width="' + (height * data[icon].width / data[icon].height) + '" height="' + height + '" viewBox="0 0 ' + data[icon].width + ' ' + data[icon].height + '" class="octicon octicon-' + icon + '" aria-hidden="true">' + data[icon].path + '</svg>'
};

var queues = {};

var fetch = function (url, func) {
  var queue = queues[url] || (queues[url] = []);
  if (queue.push(func) > 1) {
    return
  }

  var callback = dispatchOnce(function () {
    delete queues[url];
    while ((func = queue.shift())) {
      func.apply(null, arguments);
    }
  });

  if (useXHR) {
    var xhr = new XMLHttpRequest();
    onEvent(xhr, 'abort', callback);
    onEvent(xhr, 'error', callback);
    onEvent(xhr, 'load', function () {
      var data;
      try {
        data = JSON.parse(xhr.responseText);
      } catch (error) {
        callback(error);
        return
      }
      callback(xhr.status !== 200, data);
    });
    xhr.open('GET', url);
    xhr.send();
  } else {
    var contentWindow = this || window;
    contentWindow._ = function (json) {
      contentWindow._ = null;
      callback(json.meta.status !== 200, json.data);
    };
    var script = createElementInDocument(contentWindow.document)('script', {
      async: true,
      src: url + (/\?/.test(url) ? '&' : '?') + 'callback=_'
    });
    var onloadend = /* istanbul ignore next: IE lt 9 */ function () {
      if (contentWindow._) {
        contentWindow._({
          meta: {}
        });
      }
    };
    onEvent(script, 'load', onloadend);
    onEvent(script, 'error', onloadend);
    /* istanbul ignore if: IE lt 9 */
    if (script.readyState) {
      onceReadyStateChange(script, /de|m/, onloadend);
    }
    contentWindow.document.getElementsByTagName('head')[0].appendChild(script);
  }
};

var render = function (root, options, func) {
  var createElement = createElementInDocument(root.ownerDocument);

  var style = root.appendChild(createElement('style', {
    type: 'text/css'
  }));
  /* istanbul ignore if: IE lt 9 */
  if (style.styleSheet) {
    style.styleSheet.cssText = cssText;
  } else {
    style.appendChild(root.ownerDocument.createTextNode(cssText));
  }

  var btn = createElement('a', {
    className: 'btn',
    href: options.href,
    target: '_blank',
    innerHTML: octicon(options['data-icon'], /^large$/i.test(options['data-size']) ? 16 : 14),
    'aria-label': options['aria-label'] || void 0
  }, [
    ' ',
    createElement('span', {}, [options['data-text'] || ''])
  ]);
  if (!/\.github\.com$/.test('.' + btn.hostname)) {
    btn.href = '#';
    btn.target = '_self';
  } else if (/^https?:\/\/((gist\.)?github\.com\/[^/?#]+\/[^/?#]+\/archive\/|github\.com\/[^/?#]+\/[^/?#]+\/releases\/download\/|codeload\.github\.com\/)/.test(btn.href)) {
    btn.target = '_top';
  }

  var widget = root.appendChild(createElement('div', {
    className: 'widget' + (/^large$/i.test(options['data-size']) ? ' lg' : '')
  }, [
    btn
  ]));

  var match;
  if (!(/^(true|1)$/i.test(options['data-show-count']) && btn.hostname === 'github.com') ||
      !((match = btn.pathname.replace(/^(?!\/)/, '/').match(/^\/([^/?#]+)(?:\/([^/?#]+)(?:\/(?:(subscription)|(fork)|(issues)|([^/?#]+)))?)?(?:[/?#]|$)/)) && !match[6])) {
    if (func) {
      func(widget);
    }
    return
  }

  var api, href, property;
  if (match[2]) {
    api = '/repos/' + match[1] + '/' + match[2];
    if (match[3]) {
      property = 'subscribers_count';
      href = 'watchers';
    } else if (match[4]) {
      property = 'forks_count';
      href = 'network';
    } else if (match[5]) {
      property = 'open_issues_count';
      href = 'issues';
    } else {
      property = 'stargazers_count';
      href = 'stargazers';
    }
  } else {
    api = '/users/' + match[1];
    href = property = 'followers';
  }
  fetch.call(this, apiBaseURL + api, function (error, json) {
    if (!error) {
      var data = json[property];
      widget.appendChild(createElement('a', {
        className: 'social-count',
        href: json.html_url + '/' + href,
        target: '_blank',
        'aria-label': data + ' ' + property.replace(/_count$/, '').replace('_', ' ').slice(0, data < 2 ? -1 : void 0) + ' on GitHub'
      }, [
        createElement('b'),
        createElement('i'),
        createElement('span', {}, [('' + data).replace(/\B(?=(\d{3})+(?!\d))/g, ',')])
      ]));
    }
    if (func) {
      func(widget);
    }
  });
};

var stringify = function (obj) {
  var params = [];
  for (var name in obj) {
    var value = obj[name];
    if (value != null) {
      params.push(encodeURIComponent(name) + '=' + encodeURIComponent(value));
    }
  }
  return params.join('&')
};

var devicePixelRatio = window.devicePixelRatio || /* istanbul ignore next */ 1;

var ceilPixel = function (px) {
  return (devicePixelRatio > 1 ? Math.ceil(Math.round(px * devicePixelRatio) / devicePixelRatio * 2) / 2 : Math.ceil(px)) || 0
};

var get = function (el) {
  var width = el.offsetWidth;
  var height = el.offsetHeight;
  if (el.getBoundingClientRect) {
    var boundingClientRect = el.getBoundingClientRect();
    width = Math.max(width, ceilPixel(boundingClientRect.width));
    height = Math.max(height, ceilPixel(boundingClientRect.height));
  }
  return [width, height]
};

var set = function (el, size) {
  el.style.width = size[0] + 'px';
  el.style.height = size[1] + 'px';
};

var render$1 = function (options, func) {
  if (options == null || func == null) {
    return
  }
  if (options.getAttribute) {
    options = parseOptions(options);
  }
  if (useShadowDOM) {
    var host = createElement('span', {
      title: options.title || void 0
    });
    render(host.attachShadow({ mode: 'closed' }), options, function () {
      func(host);
    });
  } else {
    var iframe = createElement('iframe', {
      src: 'javascript:0',
      title: options.title || void 0,
      allowtransparency: true,
      scrolling: 'no',
      frameBorder: 0
    });
    set(iframe, [0, 0]);
    iframe.style.border = 'none';
    var callback = function () {
      var contentWindow = iframe.contentWindow;
      var body;
      try {
        body = contentWindow.document.body;
      } catch (_) /* istanbul ignore next: IE 11 */ {
        document.body.appendChild(iframe.parentNode.removeChild(iframe));
        return
      }
      offEvent(iframe, 'load', callback);
      render.call(contentWindow, body, options, function (widget) {
        var size = get(widget);
        iframe.parentNode.removeChild(iframe);
        onceEvent(iframe, 'load', function () {
          set(iframe, size);
        });
        iframe.src = iframeURL + '#' + (iframe.name = stringify(options));
        func(iframe);
      });
    };
    onEvent(iframe, 'load', callback);
    document.body.appendChild(iframe);
  }
};




/***/ }),

/***/ "./node_modules/glamor/lib/CSSPropertyOperations/CSSProperty.js":
/*!**********************************************************************!*\
  !*** ./node_modules/glamor/lib/CSSPropertyOperations/CSSProperty.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSProperty
 */

/**
 * CSS properties which accept numbers but are not in units of "px".
 */

var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowStart: true,
  gridRowEnd: true,
  gridColumn: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true

  /**
   * @param {string} prefix vendor-specific prefix, eg: Webkit
   * @param {string} key style name, eg: transitionDuration
   * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
   * WebkitTransitionDuration
   */
};function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Most style properties can be unset by doing .style[prop] = '' but IE8
 * doesn't like doing that with shorthand properties so for the properties that
 * IE8 breaks on, which are listed here, we instead unset each of the
 * individual properties. See http://bugs.jquery.com/ticket/12385.
 * The 4-value 'clock' properties like margin, padding, border-width seem to
 * behave without any problems. Curiously, list-style works too without any
 * special prodding.
 */
var shorthandPropertyExpansions = {
  background: {
    backgroundAttachment: true,
    backgroundColor: true,
    backgroundImage: true,
    backgroundPositionX: true,
    backgroundPositionY: true,
    backgroundRepeat: true
  },
  backgroundPosition: {
    backgroundPositionX: true,
    backgroundPositionY: true
  },
  border: {
    borderWidth: true,
    borderStyle: true,
    borderColor: true
  },
  borderBottom: {
    borderBottomWidth: true,
    borderBottomStyle: true,
    borderBottomColor: true
  },
  borderLeft: {
    borderLeftWidth: true,
    borderLeftStyle: true,
    borderLeftColor: true
  },
  borderRight: {
    borderRightWidth: true,
    borderRightStyle: true,
    borderRightColor: true
  },
  borderTop: {
    borderTopWidth: true,
    borderTopStyle: true,
    borderTopColor: true
  },
  font: {
    fontStyle: true,
    fontVariant: true,
    fontWeight: true,
    fontSize: true,
    lineHeight: true,
    fontFamily: true
  },
  outline: {
    outlineWidth: true,
    outlineStyle: true,
    outlineColor: true
  }
};

var CSSProperty = {
  isUnitlessNumber: isUnitlessNumber,
  shorthandPropertyExpansions: shorthandPropertyExpansions
};

exports.default = CSSProperty;

/***/ }),

/***/ "./node_modules/glamor/lib/CSSPropertyOperations/dangerousStyleValue.js":
/*!******************************************************************************!*\
  !*** ./node_modules/glamor/lib/CSSPropertyOperations/dangerousStyleValue.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CSSProperty = __webpack_require__(/*! ./CSSProperty */ "./node_modules/glamor/lib/CSSPropertyOperations/CSSProperty.js");

var _CSSProperty2 = _interopRequireDefault(_CSSProperty);

var _warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule dangerousStyleValue
 */

var isUnitlessNumber = _CSSProperty2.default.isUnitlessNumber;
var styleWarnings = {};

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @param {ReactDOMComponent} component
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(name, value, component) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901

  var isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';
  }

  var isNonNumeric = isNaN(value);
  if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
    return '' + value; // cast to string
  }

  if (typeof value === 'string') {
    if (false) { var warnings, warned, ownerName, owner; }
    value = value.trim();
  }
  return value + 'px';
}

exports.default = dangerousStyleValue;

/***/ }),

/***/ "./node_modules/glamor/lib/CSSPropertyOperations/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/glamor/lib/CSSPropertyOperations/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processStyleName = undefined;
exports.createMarkupForStyles = createMarkupForStyles;

var _camelizeStyleName = __webpack_require__(/*! fbjs/lib/camelizeStyleName */ "./node_modules/fbjs/lib/camelizeStyleName.js");

var _camelizeStyleName2 = _interopRequireDefault(_camelizeStyleName);

var _dangerousStyleValue = __webpack_require__(/*! ./dangerousStyleValue */ "./node_modules/glamor/lib/CSSPropertyOperations/dangerousStyleValue.js");

var _dangerousStyleValue2 = _interopRequireDefault(_dangerousStyleValue);

var _hyphenateStyleName = __webpack_require__(/*! fbjs/lib/hyphenateStyleName */ "./node_modules/fbjs/lib/hyphenateStyleName.js");

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

var _memoizeStringOnly = __webpack_require__(/*! fbjs/lib/memoizeStringOnly */ "./node_modules/fbjs/lib/memoizeStringOnly.js");

var _memoizeStringOnly2 = _interopRequireDefault(_memoizeStringOnly);

var _warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var processStyleName = exports.processStyleName = (0, _memoizeStringOnly2.default)(_hyphenateStyleName2.default); /**
                                                                                                                   * Copyright 2013-present, Facebook, Inc.
                                                                                                                   * All rights reserved.
                                                                                                                   *
                                                                                                                   * This source code is licensed under the BSD-style license found in the
                                                                                                                   * LICENSE file in the root directory of this source tree. An additional grant
                                                                                                                   * of patent rights can be found in the PATENTS file in the same directory.
                                                                                                                   *
                                                                                                                   * @providesModule CSSPropertyOperations
                                                                                                                   */

if (false) { var warnValidStyle, checkRenderMessage, warnStyleValueIsNaN, warnStyleValueWithSemicolon, warnBadVendoredStyleName, warnHyphenatedStyleName, warnedForNaNValue, warnedStyleValues, warnedStyleNames, badStyleValueWithSemicolonPattern, badVendoredStyleNamePattern; }

/**
   * Serializes a mapping of style properties for use as inline styles:
   *
   *   > createMarkupForStyles({width: '200px', height: 0})
   *   "width:200px;height:0;"
   *
   * Undefined values are ignored so that declarative programming is easier.
   * The result should be HTML-escaped before insertion into the DOM.
   *
   * @param {object} styles
   * @param {ReactDOMComponent} component
   * @return {?string}
   */

function createMarkupForStyles(styles, component) {
  var serialized = '';
  for (var styleName in styles) {
    var isCustomProp = styleName.indexOf('--') === 0;
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    if (styleName === 'label') {
      continue;
    }
    var styleValue = styles[styleName];
    if (false) {}
    if (styleValue != null) {
      if (isCustomProp) {
        serialized += styleName + ':' + styleValue + ';';
      } else {
        serialized += processStyleName(styleName) + ':';
        serialized += (0, _dangerousStyleValue2.default)(styleName, styleValue, component) + ';';
      }
    }
  }
  return serialized || null;
}

/***/ }),

/***/ "./node_modules/glamor/lib/clean.js":
/*!******************************************!*\
  !*** ./node_modules/glamor/lib/clean.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = clean;
// Returns true for null, false, undefined and {}
function isFalsy(value) {
  return value === null || value === undefined || value === false || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && Object.keys(value).length === 0;
}

function cleanObject(object) {
  if (isFalsy(object)) return null;
  if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object') return object;

  var acc = {},
      keys = Object.keys(object),
      hasFalsy = false;
  for (var i = 0; i < keys.length; i++) {
    var value = object[keys[i]];
    var filteredValue = clean(value);
    if (filteredValue === null || filteredValue !== value) {
      hasFalsy = true;
    }
    if (filteredValue !== null) {
      acc[keys[i]] = filteredValue;
    }
  }
  return Object.keys(acc).length === 0 ? null : hasFalsy ? acc : object;
}

function cleanArray(rules) {
  var hasFalsy = false;
  var filtered = [];
  rules.forEach(function (rule) {
    var filteredRule = clean(rule);
    if (filteredRule === null || filteredRule !== rule) {
      hasFalsy = true;
    }
    if (filteredRule !== null) {
      filtered.push(filteredRule);
    }
  });
  return filtered.length == 0 ? null : hasFalsy ? filtered : rules;
}

// Takes style array or object provided by user and clears all the falsy data 
// If there is no styles left after filtration returns null
function clean(input) {
  return Array.isArray(input) ? cleanArray(input) : cleanObject(input);
}

/***/ }),

/***/ "./node_modules/glamor/lib/hash.js":
/*!*****************************************!*\
  !*** ./node_modules/glamor/lib/hash.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = doHash;
// murmurhash2 via https://gist.github.com/raycmorgan/588423

function doHash(str, seed) {
  var m = 0x5bd1e995;
  var r = 24;
  var h = seed ^ str.length;
  var length = str.length;
  var currentIndex = 0;

  while (length >= 4) {
    var k = UInt32(str, currentIndex);

    k = Umul32(k, m);
    k ^= k >>> r;
    k = Umul32(k, m);

    h = Umul32(h, m);
    h ^= k;

    currentIndex += 4;
    length -= 4;
  }

  switch (length) {
    case 3:
      h ^= UInt16(str, currentIndex);
      h ^= str.charCodeAt(currentIndex + 2) << 16;
      h = Umul32(h, m);
      break;

    case 2:
      h ^= UInt16(str, currentIndex);
      h = Umul32(h, m);
      break;

    case 1:
      h ^= str.charCodeAt(currentIndex);
      h = Umul32(h, m);
      break;
  }

  h ^= h >>> 13;
  h = Umul32(h, m);
  h ^= h >>> 15;

  return h >>> 0;
}

function UInt32(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
}

function UInt16(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
}

function Umul32(n, m) {
  n = n | 0;
  m = m | 0;
  var nlo = n & 0xffff;
  var nhi = n >>> 16;
  var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
  return res;
}

/***/ }),

/***/ "./node_modules/glamor/lib/index.js":
/*!******************************************!*\
  !*** ./node_modules/glamor/lib/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = exports.merge = exports.$ = exports.style = exports.presets = exports.keyframes = exports.fontFace = exports.insertGlobal = exports.insertRule = exports.plugins = exports.styleSheet = undefined;
exports.speedy = speedy;
exports.simulations = simulations;
exports.simulate = simulate;
exports.cssLabels = cssLabels;
exports.isLikeRule = isLikeRule;
exports.idFor = idFor;
exports.css = css;
exports.rehydrate = rehydrate;
exports.flush = flush;
exports.select = select;
exports.parent = parent;
exports.media = media;
exports.pseudo = pseudo;
exports.active = active;
exports.any = any;
exports.checked = checked;
exports.disabled = disabled;
exports.empty = empty;
exports.enabled = enabled;
exports._default = _default;
exports.first = first;
exports.firstChild = firstChild;
exports.firstOfType = firstOfType;
exports.fullscreen = fullscreen;
exports.focus = focus;
exports.hover = hover;
exports.indeterminate = indeterminate;
exports.inRange = inRange;
exports.invalid = invalid;
exports.lastChild = lastChild;
exports.lastOfType = lastOfType;
exports.left = left;
exports.link = link;
exports.onlyChild = onlyChild;
exports.onlyOfType = onlyOfType;
exports.optional = optional;
exports.outOfRange = outOfRange;
exports.readOnly = readOnly;
exports.readWrite = readWrite;
exports.required = required;
exports.right = right;
exports.root = root;
exports.scope = scope;
exports.target = target;
exports.valid = valid;
exports.visited = visited;
exports.dir = dir;
exports.lang = lang;
exports.not = not;
exports.nthChild = nthChild;
exports.nthLastChild = nthLastChild;
exports.nthLastOfType = nthLastOfType;
exports.nthOfType = nthOfType;
exports.after = after;
exports.before = before;
exports.firstLetter = firstLetter;
exports.firstLine = firstLine;
exports.selection = selection;
exports.backdrop = backdrop;
exports.placeholder = placeholder;
exports.cssFor = cssFor;
exports.attribsFor = attribsFor;

var _objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _sheet = __webpack_require__(/*! ./sheet.js */ "./node_modules/glamor/lib/sheet.js");

var _CSSPropertyOperations = __webpack_require__(/*! ./CSSPropertyOperations */ "./node_modules/glamor/lib/CSSPropertyOperations/index.js");

var _clean = __webpack_require__(/*! ./clean.js */ "./node_modules/glamor/lib/clean.js");

var _clean2 = _interopRequireDefault(_clean);

var _plugins = __webpack_require__(/*! ./plugins */ "./node_modules/glamor/lib/plugins.js");

var _hash = __webpack_require__(/*! ./hash */ "./node_modules/glamor/lib/hash.js");

var _hash2 = _interopRequireDefault(_hash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/* stylesheet */


var styleSheet = exports.styleSheet = new _sheet.StyleSheet();
// an isomorphic StyleSheet shim. hides all the nitty gritty.

// /**************** LIFTOFF IN 3... 2... 1... ****************/
styleSheet.inject(); //eslint-disable-line indent
// /****************      TO THE MOOOOOOON     ****************/

// convenience function to toggle speedy
function speedy(bool) {
  return styleSheet.speedy(bool);
}

// plugins
// we include these by default
var plugins = exports.plugins = styleSheet.plugins = new _plugins.PluginSet([_plugins.prefixes, _plugins.contentWrap, _plugins.fallbacks]);
plugins.media = new _plugins.PluginSet(); // neat! media, font-face, keyframes
plugins.fontFace = new _plugins.PluginSet();
plugins.keyframes = new _plugins.PluginSet([_plugins.prefixes, _plugins.fallbacks]);

// define some constants

var isDev =  false || !"production";
var isTest = "production" === 'test';
var isBrowser = typeof window !== 'undefined';

/**** simulations  ****/

// a flag to enable simulation meta tags on dom nodes
// defaults to true in dev mode. recommend *not* to
// toggle often.
var canSimulate = isDev;

// we use these flags for issuing warnings when simulate is called
// in prod / in incorrect order
var warned1 = false,
    warned2 = false;

// toggles simulation activity. shouldn't be needed in most cases
function simulations() {
  var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  canSimulate = !!bool;
}

// use this on dom nodes to 'simulate' pseudoclasses
// <div {...hover({ color: 'red' })} {...simulate('hover', 'visited')}>...</div>
// you can even send in some weird ones, as long as it's in simple format
// and matches an existing rule on the element
// eg simulate('nthChild2', ':hover:active') etc
function simulate() {
  for (var _len = arguments.length, pseudos = Array(_len), _key = 0; _key < _len; _key++) {
    pseudos[_key] = arguments[_key];
  }

  pseudos = (0, _clean2.default)(pseudos);
  if (!pseudos) return {};
  if (!canSimulate) {
    if (!warned1) {
      console.warn('can\'t simulate without once calling simulations(true)'); //eslint-disable-line no-console
      warned1 = true;
    }
    if (!isDev && !isTest && !warned2) {
      console.warn('don\'t use simulation outside dev'); //eslint-disable-line no-console
      warned2 = true;
    }
    return {};
  }
  return pseudos.reduce(function (o, p) {
    return o['data-simulate-' + simple(p)] = '', o;
  }, {});
}

/**** labels ****/
// toggle for debug labels.
// *shouldn't* have to mess with this manually
var hasLabels = isDev;

function cssLabels(bool) {
  hasLabels = !!bool;
}

// takes a string, converts to lowercase, strips out nonalphanumeric.
function simple(str) {
  var char = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return str.toLowerCase().replace(/[^a-z0-9]/g, char);
}

// hashes a string to something 'unique'
// we use this to generate ids for styles


function hashify(obj) {
  var str = JSON.stringify(obj);
  var toRet = (0, _hash2.default)(str).toString(36);
  if (obj.label && obj.label.length > 0 && isDev) {
    return simple(obj.label.join('.'), '-') + '-' + toRet;
  }
  return toRet;
}

// of shape { 'data-css-<id>': '' }
function isLikeRule(rule) {
  var keys = Object.keys(rule).filter(function (x) {
    return x !== 'toString';
  });
  if (keys.length !== 1) {
    return false;
  }
  return !!/data\-css\-([a-zA-Z0-9\-_]+)/.exec(keys[0]);
}

// extracts id from a { 'data-css-<id>': ''} like object
function idFor(rule) {
  var keys = Object.keys(rule).filter(function (x) {
    return x !== 'toString';
  });
  if (keys.length !== 1) throw new Error('not a rule');
  var regex = /data\-css\-([a-zA-Z0-9\-_]+)/;
  var match = regex.exec(keys[0]);
  if (!match) throw new Error('not a rule');
  return match[1];
}

// from https://github.com/j2css/j2c/blob/5d381c2d721d04b54fabe6a165d587247c3087cb/src/helpers.js#L28-L61

// "Tokenizes" the selectors into parts relevant for the next function.
// Strings and comments are matched, but ignored afterwards.
// This is not a full tokenizers. It only recognizes comas, parentheses,
// strings and comments.
// regexp generated by scripts/regexps.js then trimmed by hand
var selectorTokenizer = /[(),]|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\//g;

/**
 * This will split a coma-separated selector list into individual selectors,
 * ignoring comas in strings, comments and in :pseudo-selectors(parameter, lists).
 *
 * @param {string} selector
 * @return {string[]}
 */

function splitSelector(selector) {
  if (selector.indexOf(',') === -1) {
    return [selector];
  }

  var indices = [],
      res = [],
      inParen = 0,
      o;
  /*eslint-disable no-cond-assign*/
  while (o = selectorTokenizer.exec(selector)) {
    /*eslint-enable no-cond-assign*/
    switch (o[0]) {
      case '(':
        inParen++;break;
      case ')':
        inParen--;break;
      case ',':
        if (inParen) break;indices.push(o.index);
    }
  }
  for (o = indices.length; o--;) {
    res.unshift(selector.slice(indices[o] + 1));
    selector = selector.slice(0, indices[o]);
  }
  res.unshift(selector);
  return res;
}

function selector(id, path) {
  if (!id) {
    return path.replace(/\&/g, '');
  }
  if (!path) return '.css-' + id + ',[data-css-' + id + ']';

  var x = splitSelector(path).map(function (x) {
    return x.indexOf('&') >= 0 ? [x.replace(/\&/mg, '.css-' + id), x.replace(/\&/mg, '[data-css-' + id + ']')].join(',') // todo - make sure each sub selector has an &
    : '.css-' + id + x + ',[data-css-' + id + ']' + x;
  }).join(',');

  if (canSimulate && /^\&\:/.exec(path) && !/\s/.exec(path)) {
    x += ',.css-' + id + '[data-simulate-' + simple(path) + '],[data-css-' + id + '][data-simulate-' + simple(path) + ']';
  }
  return x;
}

// end https://github.com/j2css/j2c/blob/5d381c2d721d04b54fabe6a165d587247c3087cb/src/helpers.js#L28-L61


function toCSS(_ref) {
  var selector = _ref.selector,
      style = _ref.style;

  var result = plugins.transform({ selector: selector, style: style });
  return result.selector + '{' + (0, _CSSPropertyOperations.createMarkupForStyles)(result.style) + '}';
}

function deconstruct(style) {
  // we can be sure it's not infinitely nested here
  var plain = void 0,
      selects = void 0,
      medias = void 0,
      supports = void 0;
  Object.keys(style).forEach(function (key) {
    if (key.indexOf('&') >= 0) {
      selects = selects || {};
      selects[key] = style[key];
    } else if (key.indexOf('@media') === 0) {
      medias = medias || {};
      medias[key] = deconstruct(style[key]);
    } else if (key.indexOf('@supports') === 0) {
      supports = supports || {};
      supports[key] = deconstruct(style[key]);
    } else if (key === 'label') {
      if (style.label.length > 0) {
        plain = plain || {};
        plain.label = hasLabels ? style.label.join('.') : '';
      }
    } else {
      plain = plain || {};
      plain[key] = style[key];
    }
  });
  return { plain: plain, selects: selects, medias: medias, supports: supports };
}

function deconstructedStyleToCSS(id, style) {
  var css = [];

  // plugins here
  var plain = style.plain,
      selects = style.selects,
      medias = style.medias,
      supports = style.supports;

  if (plain) {
    css.push(toCSS({ style: plain, selector: selector(id) }));
  }
  if (selects) {
    Object.keys(selects).forEach(function (key) {
      return css.push(toCSS({ style: selects[key], selector: selector(id, key) }));
    });
  }
  if (medias) {
    Object.keys(medias).forEach(function (key) {
      return css.push(key + '{' + deconstructedStyleToCSS(id, medias[key]).join('') + '}');
    });
  }
  if (supports) {
    Object.keys(supports).forEach(function (key) {
      return css.push(key + '{' + deconstructedStyleToCSS(id, supports[key]).join('') + '}');
    });
  }
  return css;
}

// this cache to track which rules have
// been inserted into the stylesheet
var inserted = styleSheet.inserted = {};

// and helpers to insert rules into said styleSheet
function insert(spec) {
  if (!inserted[spec.id]) {
    inserted[spec.id] = true;
    var deconstructed = deconstruct(spec.style);
    var rules = deconstructedStyleToCSS(spec.id, deconstructed);
    inserted[spec.id] = isBrowser ? true : rules;
    rules.forEach(function (cssRule) {
      return styleSheet.insert(cssRule);
    });
  }
}

// a simple cache to store generated rules
var registered = styleSheet.registered = {};
function register(spec) {
  if (!registered[spec.id]) {
    registered[spec.id] = spec;
  }
}

function _getRegistered(rule) {
  if (isLikeRule(rule)) {
    var ret = registered[idFor(rule)];
    if (ret == null) {
      throw new Error('[glamor] an unexpected rule cache miss occurred. This is probably a sign of multiple glamor instances in your app. See https://github.com/threepointone/glamor/issues/79');
    }
    return ret;
  }
  return rule;
}

// todo - perf
var ruleCache = {};
function toRule(spec) {
  register(spec);
  insert(spec);

  if (ruleCache[spec.id]) {
    return ruleCache[spec.id];
  }

  var ret = _defineProperty({}, 'data-css-' + spec.id, hasLabels ? spec.label || '' : '');
  Object.defineProperty(ret, 'toString', {
    enumerable: false, value: function value() {
      return 'css-' + spec.id;
    }
  });
  ruleCache[spec.id] = ret;
  return ret;
}

function log() {
  //eslint-disable-line no-unused-vars
  console.log(this); //eslint-disable-line no-console
  return this;
}

function isSelector(key) {
  var possibles = [':', '.', '[', '>', ' '],
      found = false,
      ch = key.charAt(0);
  for (var i = 0; i < possibles.length; i++) {
    if (ch === possibles[i]) {
      found = true;
      break;
    }
  }
  return found || key.indexOf('&') >= 0;
}

function joinSelectors(a, b) {
  var as = splitSelector(a).map(function (a) {
    return !(a.indexOf('&') >= 0) ? '&' + a : a;
  });
  var bs = splitSelector(b).map(function (b) {
    return !(b.indexOf('&') >= 0) ? '&' + b : b;
  });

  return bs.reduce(function (arr, b) {
    return arr.concat(as.map(function (a) {
      return b.replace(/\&/g, a);
    }));
  }, []).join(',');
}

function joinMediaQueries(a, b) {
  return a ? '@media ' + a.substring(6) + ' and ' + b.substring(6) : b;
}

function isMediaQuery(key) {
  return key.indexOf('@media') === 0;
}

function isSupports(key) {
  return key.indexOf('@supports') === 0;
}

function joinSupports(a, b) {
  return a ? '@supports ' + a.substring(9) + ' and ' + b.substring(9) : b;
}

// flatten a nested array
function flatten(inArr) {
  var arr = [];
  for (var i = 0; i < inArr.length; i++) {
    if (Array.isArray(inArr[i])) arr = arr.concat(flatten(inArr[i]));else arr = arr.concat(inArr[i]);
  }
  return arr;
}

var prefixedPseudoSelectors = {
  '::placeholder': ['::-webkit-input-placeholder', '::-moz-placeholder', '::-ms-input-placeholder'],
  ':fullscreen': [':-webkit-full-screen', ':-moz-full-screen', ':-ms-fullscreen']

  // mutable! modifies dest.
};function build(dest, _ref2) {
  var _ref2$selector = _ref2.selector,
      selector = _ref2$selector === undefined ? '' : _ref2$selector,
      _ref2$mq = _ref2.mq,
      mq = _ref2$mq === undefined ? '' : _ref2$mq,
      _ref2$supp = _ref2.supp,
      supp = _ref2$supp === undefined ? '' : _ref2$supp,
      _ref2$src = _ref2.src,
      src = _ref2$src === undefined ? {} : _ref2$src;


  if (!Array.isArray(src)) {
    src = [src];
  }
  src = flatten(src);

  src.forEach(function (_src) {
    if (isLikeRule(_src)) {
      var reg = _getRegistered(_src);
      if (reg.type !== 'css') {
        throw new Error('cannot merge this rule');
      }
      _src = reg.style;
    }
    _src = (0, _clean2.default)(_src);
    if (_src && _src.composes) {
      build(dest, { selector: selector, mq: mq, supp: supp, src: _src.composes });
    }
    Object.keys(_src || {}).forEach(function (key) {
      if (isSelector(key)) {

        if (prefixedPseudoSelectors[key]) {
          prefixedPseudoSelectors[key].forEach(function (p) {
            return build(dest, { selector: joinSelectors(selector, p), mq: mq, supp: supp, src: _src[key] });
          });
        }

        build(dest, { selector: joinSelectors(selector, key), mq: mq, supp: supp, src: _src[key] });
      } else if (isMediaQuery(key)) {
        build(dest, { selector: selector, mq: joinMediaQueries(mq, key), supp: supp, src: _src[key] });
      } else if (isSupports(key)) {
        build(dest, { selector: selector, mq: mq, supp: joinSupports(supp, key), src: _src[key] });
      } else if (key === 'composes') {
        // ignore, we already dealth with it
      } else {
        var _dest = dest;
        if (supp) {
          _dest[supp] = _dest[supp] || {};
          _dest = _dest[supp];
        }
        if (mq) {
          _dest[mq] = _dest[mq] || {};
          _dest = _dest[mq];
        }
        if (selector) {
          _dest[selector] = _dest[selector] || {};
          _dest = _dest[selector];
        }

        if (key === 'label') {
          if (hasLabels) {
            dest.label = dest.label.concat(_src.label);
          }
        } else {
          _dest[key] = _src[key];
        }
      }
    });
  });
}

function _css(rules) {
  var style = { label: [] };
  build(style, { src: rules }); // mutative! but worth it.

  var spec = {
    id: hashify(style),
    style: style, label: hasLabels ? style.label.join('.') : '',
    type: 'css'
  };
  return toRule(spec);
}

var nullrule = {
  // 'data-css-nil': ''
};
Object.defineProperty(nullrule, 'toString', {
  enumerable: false, value: function value() {
    return 'css-nil';
  }
});

var inputCaches = typeof WeakMap !== 'undefined' ? [nullrule, new WeakMap(), new WeakMap(), new WeakMap()] : [nullrule];

var warnedWeakMapError = false;
function multiIndexCache(fn) {
  return function (args) {
    if (inputCaches[args.length]) {
      var coi = inputCaches[args.length];
      var ctr = 0;
      while (ctr < args.length - 1) {
        if (!coi.has(args[ctr])) {
          coi.set(args[ctr], new WeakMap());
        }
        coi = coi.get(args[ctr]);
        ctr++;
      }
      if (coi.has(args[args.length - 1])) {
        var ret = coi.get(args[ctr]);

        if (registered[ret.toString().substring(4)]) {
          // make sure it hasn't been flushed
          return ret;
        }
      }
    }
    var value = fn(args);
    if (inputCaches[args.length]) {
      var _ctr = 0,
          _coi = inputCaches[args.length];
      while (_ctr < args.length - 1) {
        _coi = _coi.get(args[_ctr]);
        _ctr++;
      }
      try {
        _coi.set(args[_ctr], value);
      } catch (err) {
        if (isDev && !warnedWeakMapError) {
          var _console;

          warnedWeakMapError = true;
          (_console = console).warn.apply(_console, ['failed setting the WeakMap cache for args:'].concat(_toConsumableArray(args))); // eslint-disable-line no-console
          console.warn('this should NOT happen, please file a bug on the github repo.'); // eslint-disable-line no-console
        }
      }
    }
    return value;
  };
}

var cachedCss = typeof WeakMap !== 'undefined' ? multiIndexCache(_css) : _css;

function css() {
  for (var _len2 = arguments.length, rules = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    rules[_key2] = arguments[_key2];
  }

  if (rules[0] && rules[0].length && rules[0].raw) {
    throw new Error('you forgot to include glamor/babel in your babel plugins.');
  }

  rules = (0, _clean2.default)(rules);
  if (!rules) {
    return nullrule;
  }

  return cachedCss(rules);
}

css.insert = function (css) {
  var spec = {
    id: hashify(css),
    css: css,
    type: 'raw'
  };
  register(spec);
  if (!inserted[spec.id]) {
    styleSheet.insert(spec.css);
    inserted[spec.id] = isBrowser ? true : [spec.css];
  }
};

var insertRule = exports.insertRule = css.insert;

css.global = function (selector, style) {
  style = (0, _clean2.default)(style);
  if (style) {
    return css.insert(toCSS({ selector: selector, style: style }));
  }
};

var insertGlobal = exports.insertGlobal = css.global;

function insertKeyframe(spec) {
  if (!inserted[spec.id]) {
    var inner = Object.keys(spec.keyframes).map(function (kf) {
      var result = plugins.keyframes.transform({ id: spec.id, name: kf, style: spec.keyframes[kf] });
      return result.name + '{' + (0, _CSSPropertyOperations.createMarkupForStyles)(result.style) + '}';
    }).join('');

    var rules = ['-webkit-', '-moz-', '-o-', ''].map(function (prefix) {
      return '@' + prefix + 'keyframes ' + (spec.name + '_' + spec.id) + '{' + inner + '}';
    });
    rules.forEach(function (rule) {
      return styleSheet.insert(rule);
    });

    inserted[spec.id] = isBrowser ? true : rules;
  }
}
css.keyframes = function (name, kfs) {
  if (!kfs) {
    kfs = name, name = 'animation';
  }

  // do not ignore empty keyframe definitions for now.
  kfs = (0, _clean2.default)(kfs) || {};
  var spec = {
    id: hashify({ name: name, kfs: kfs }),
    type: 'keyframes',
    name: name,
    keyframes: kfs
  };
  register(spec);
  insertKeyframe(spec);
  return name + '_' + spec.id;
};

// we don't go all out for fonts as much, giving a simple font loading strategy
// use a fancier lib if you need moar power
css.fontFace = function (font) {
  font = (0, _clean2.default)(font);
  var spec = {
    id: hashify(font),
    type: 'font-face',
    font: font
  };
  register(spec);
  insertFontFace(spec);

  return font.fontFamily;
};

var fontFace = exports.fontFace = css.fontFace;
var keyframes = exports.keyframes = css.keyframes;

function insertFontFace(spec) {
  if (!inserted[spec.id]) {
    var rule = '@font-face{' + (0, _CSSPropertyOperations.createMarkupForStyles)(spec.font) + '}';
    styleSheet.insert(rule);
    inserted[spec.id] = isBrowser ? true : [rule];
  }
}

// rehydrate the insertion cache with ids sent from
// renderStatic / renderStaticOptimized
function rehydrate(ids) {
  // load up ids
  (0, _objectAssign2.default)(inserted, ids.reduce(function (o, i) {
    return o[i] = true, o;
  }, {}));
  // assume css loaded separately
}

// clears out the cache and empties the stylesheet
// best for tests, though there might be some value for SSR.

function flush() {
  inserted = styleSheet.inserted = {};
  registered = styleSheet.registered = {};
  ruleCache = {};
  styleSheet.flush();
  styleSheet.inject();
}

var presets = exports.presets = {
  mobile: '(min-width: 400px)',
  Mobile: '@media (min-width: 400px)',
  phablet: '(min-width: 550px)',
  Phablet: '@media (min-width: 550px)',
  tablet: '(min-width: 750px)',
  Tablet: '@media (min-width: 750px)',
  desktop: '(min-width: 1000px)',
  Desktop: '@media (min-width: 1000px)',
  hd: '(min-width: 1200px)',
  Hd: '@media (min-width: 1200px)'
};

var style = exports.style = css;

function select(selector) {
  for (var _len3 = arguments.length, styles = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    styles[_key3 - 1] = arguments[_key3];
  }

  if (!selector) {
    return style(styles);
  }
  return css(_defineProperty({}, selector, styles));
}
var $ = exports.$ = select;

function parent(selector) {
  for (var _len4 = arguments.length, styles = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    styles[_key4 - 1] = arguments[_key4];
  }

  return css(_defineProperty({}, selector + ' &', styles));
}

var merge = exports.merge = css;
var compose = exports.compose = css;

function media(query) {
  for (var _len5 = arguments.length, rules = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    rules[_key5 - 1] = arguments[_key5];
  }

  return css(_defineProperty({}, '@media ' + query, rules));
}

function pseudo(selector) {
  for (var _len6 = arguments.length, styles = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    styles[_key6 - 1] = arguments[_key6];
  }

  return css(_defineProperty({}, selector, styles));
}

// allllll the pseudoclasses

function active(x) {
  return pseudo(':active', x);
}

function any(x) {
  return pseudo(':any', x);
}

function checked(x) {
  return pseudo(':checked', x);
}

function disabled(x) {
  return pseudo(':disabled', x);
}

function empty(x) {
  return pseudo(':empty', x);
}

function enabled(x) {
  return pseudo(':enabled', x);
}

function _default(x) {
  return pseudo(':default', x); // note '_default' name
}

function first(x) {
  return pseudo(':first', x);
}

function firstChild(x) {
  return pseudo(':first-child', x);
}

function firstOfType(x) {
  return pseudo(':first-of-type', x);
}

function fullscreen(x) {
  return pseudo(':fullscreen', x);
}

function focus(x) {
  return pseudo(':focus', x);
}

function hover(x) {
  return pseudo(':hover', x);
}

function indeterminate(x) {
  return pseudo(':indeterminate', x);
}

function inRange(x) {
  return pseudo(':in-range', x);
}

function invalid(x) {
  return pseudo(':invalid', x);
}

function lastChild(x) {
  return pseudo(':last-child', x);
}

function lastOfType(x) {
  return pseudo(':last-of-type', x);
}

function left(x) {
  return pseudo(':left', x);
}

function link(x) {
  return pseudo(':link', x);
}

function onlyChild(x) {
  return pseudo(':only-child', x);
}

function onlyOfType(x) {
  return pseudo(':only-of-type', x);
}

function optional(x) {
  return pseudo(':optional', x);
}

function outOfRange(x) {
  return pseudo(':out-of-range', x);
}

function readOnly(x) {
  return pseudo(':read-only', x);
}

function readWrite(x) {
  return pseudo(':read-write', x);
}

function required(x) {
  return pseudo(':required', x);
}

function right(x) {
  return pseudo(':right', x);
}

function root(x) {
  return pseudo(':root', x);
}

function scope(x) {
  return pseudo(':scope', x);
}

function target(x) {
  return pseudo(':target', x);
}

function valid(x) {
  return pseudo(':valid', x);
}

function visited(x) {
  return pseudo(':visited', x);
}

// parameterized pseudoclasses
function dir(p, x) {
  return pseudo(':dir(' + p + ')', x);
}
function lang(p, x) {
  return pseudo(':lang(' + p + ')', x);
}
function not(p, x) {
  // should this be a plugin?
  var selector = p.split(',').map(function (x) {
    return x.trim();
  }).map(function (x) {
    return ':not(' + x + ')';
  });
  if (selector.length === 1) {
    return pseudo(':not(' + p + ')', x);
  }
  return select(selector.join(''), x);
}
function nthChild(p, x) {
  return pseudo(':nth-child(' + p + ')', x);
}
function nthLastChild(p, x) {
  return pseudo(':nth-last-child(' + p + ')', x);
}
function nthLastOfType(p, x) {
  return pseudo(':nth-last-of-type(' + p + ')', x);
}
function nthOfType(p, x) {
  return pseudo(':nth-of-type(' + p + ')', x);
}

// pseudoelements
function after(x) {
  return pseudo('::after', x);
}
function before(x) {
  return pseudo('::before', x);
}
function firstLetter(x) {
  return pseudo('::first-letter', x);
}
function firstLine(x) {
  return pseudo('::first-line', x);
}
function selection(x) {
  return pseudo('::selection', x);
}
function backdrop(x) {
  return pseudo('::backdrop', x);
}
function placeholder(x) {
  // https://github.com/threepointone/glamor/issues/14
  return css({ '::placeholder': x });
}

/*** helpers for web components ***/
// https://github.com/threepointone/glamor/issues/16

function cssFor() {
  for (var _len7 = arguments.length, rules = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    rules[_key7] = arguments[_key7];
  }

  rules = (0, _clean2.default)(rules);
  return rules ? rules.map(function (r) {
    var style = { label: [] };
    build(style, { src: r }); // mutative! but worth it.
    return deconstructedStyleToCSS(hashify(style), deconstruct(style)).join('');
  }).join('') : '';
}

function attribsFor() {
  for (var _len8 = arguments.length, rules = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    rules[_key8] = arguments[_key8];
  }

  rules = (0, _clean2.default)(rules);
  var htmlAttributes = rules ? rules.map(function (rule) {
    idFor(rule); // throwaway check for rule
    var key = Object.keys(rule)[0],
        value = rule[key];
    return key + '="' + (value || '') + '"';
  }).join(' ') : '';

  return htmlAttributes;
}

/***/ }),

/***/ "./node_modules/glamor/lib/plugins.js":
/*!********************************************!*\
  !*** ./node_modules/glamor/lib/plugins.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.PluginSet = PluginSet;
exports.fallbacks = fallbacks;
exports.contentWrap = contentWrap;
exports.prefixes = prefixes;

var _objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _CSSPropertyOperations = __webpack_require__(/*! ./CSSPropertyOperations */ "./node_modules/glamor/lib/CSSPropertyOperations/index.js");

var _prefixer = __webpack_require__(/*! ./prefixer */ "./node_modules/glamor/lib/prefixer.js");

var _prefixer2 = _interopRequireDefault(_prefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDev = function (x) {
  return x === 'development' || !x;
}("production");

function PluginSet(initial) {
  this.fns = initial || [];
}

(0, _objectAssign2.default)(PluginSet.prototype, {
  add: function add() {
    var _this = this;

    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    fns.forEach(function (fn) {
      if (_this.fns.indexOf(fn) >= 0) {
        if (isDev) {
          console.warn('adding the same plugin again, ignoring'); //eslint-disable-line no-console
        }
      } else {
        _this.fns = [fn].concat(_this.fns);
      }
    });
  },
  remove: function remove(fn) {
    this.fns = this.fns.filter(function (x) {
      return x !== fn;
    });
  },
  clear: function clear() {
    this.fns = [];
  },
  transform: function transform(o) {
    return this.fns.reduce(function (o, fn) {
      return fn(o);
    }, o);
  }
});

function fallbacks(node) {
  var hasArray = Object.keys(node.style).map(function (x) {
    return Array.isArray(node.style[x]);
  }).indexOf(true) >= 0;
  if (hasArray) {
    var style = node.style;

    var flattened = Object.keys(style).reduce(function (o, key) {
      o[key] = Array.isArray(style[key]) ? style[key].join('; ' + (0, _CSSPropertyOperations.processStyleName)(key) + ': ') : style[key];
      return o;
    }, {});
    // todo - 
    // flatten arrays which haven't been flattened yet 
    return (0, _objectAssign2.default)({}, node, { style: flattened });
  }
  return node;
}

var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit'];

function contentWrap(node) {
  if (node.style.content) {
    var cont = node.style.content;
    if (contentValues.indexOf(cont) >= 0) {
      return node;
    }
    if (/^(attr|calc|counters?|url)\(/.test(cont)) {
      return node;
    }
    if (cont.charAt(0) === cont.charAt(cont.length - 1) && (cont.charAt(0) === '"' || cont.charAt(0) === "'")) {
      return node;
    }
    return _extends({}, node, { style: _extends({}, node.style, { content: '"' + cont + '"' }) });
  }
  return node;
}

function prefixes(node) {
  return (0, _objectAssign2.default)({}, node, { style: (0, _prefixer2.default)(_extends({}, node.style)) });
}

/***/ }),

/***/ "./node_modules/glamor/lib/prefixer.js":
/*!*********************************************!*\
  !*** ./node_modules/glamor/lib/prefixer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixer;

var _staticData = __webpack_require__(/*! inline-style-prefixer/static/staticData */ "./node_modules/inline-style-prefixer/static/staticData.js");

var _staticData2 = _interopRequireDefault(_staticData);

var _prefixProperty = __webpack_require__(/*! inline-style-prefixer/utils/prefixProperty */ "./node_modules/inline-style-prefixer/utils/prefixProperty.js");

var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

var _prefixValue = __webpack_require__(/*! inline-style-prefixer/utils/prefixValue */ "./node_modules/inline-style-prefixer/utils/prefixValue.js");

var _prefixValue2 = _interopRequireDefault(_prefixValue);

var _cursor = __webpack_require__(/*! inline-style-prefixer/static/plugins/cursor */ "./node_modules/inline-style-prefixer/static/plugins/cursor.js");

var _cursor2 = _interopRequireDefault(_cursor);

var _crossFade = __webpack_require__(/*! inline-style-prefixer/static/plugins/crossFade */ "./node_modules/inline-style-prefixer/static/plugins/crossFade.js");

var _crossFade2 = _interopRequireDefault(_crossFade);

var _filter = __webpack_require__(/*! inline-style-prefixer/static/plugins/filter */ "./node_modules/inline-style-prefixer/static/plugins/filter.js");

var _filter2 = _interopRequireDefault(_filter);

var _flex = __webpack_require__(/*! inline-style-prefixer/static/plugins/flex */ "./node_modules/inline-style-prefixer/static/plugins/flex.js");

var _flex2 = _interopRequireDefault(_flex);

var _flexboxOld = __webpack_require__(/*! inline-style-prefixer/static/plugins/flexboxOld */ "./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js");

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

var _gradient = __webpack_require__(/*! inline-style-prefixer/static/plugins/gradient */ "./node_modules/inline-style-prefixer/static/plugins/gradient.js");

var _gradient2 = _interopRequireDefault(_gradient);

var _imageSet = __webpack_require__(/*! inline-style-prefixer/static/plugins/imageSet */ "./node_modules/inline-style-prefixer/static/plugins/imageSet.js");

var _imageSet2 = _interopRequireDefault(_imageSet);

var _position = __webpack_require__(/*! inline-style-prefixer/static/plugins/position */ "./node_modules/inline-style-prefixer/static/plugins/position.js");

var _position2 = _interopRequireDefault(_position);

var _sizing = __webpack_require__(/*! inline-style-prefixer/static/plugins/sizing */ "./node_modules/inline-style-prefixer/static/plugins/sizing.js");

var _sizing2 = _interopRequireDefault(_sizing);

var _transition = __webpack_require__(/*! inline-style-prefixer/static/plugins/transition */ "./node_modules/inline-style-prefixer/static/plugins/transition.js");

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugins = [_crossFade2.default, _cursor2.default, _filter2.default, _flexboxOld2.default, _gradient2.default, _imageSet2.default, _position2.default, _sizing2.default, _transition2.default, _flex2.default]; // custom facade for inline-style-prefixer

var prefixMap = _staticData2.default.prefixMap;

function prefixer(style) {
  for (var property in style) {
    var value = style[property];

    var processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

    // only modify the value if it was touched
    // by any plugin to prevent unnecessary mutations
    if (processedValue) {
      style[property] = processedValue;
    }

    (0, _prefixProperty2.default)(prefixMap, property, style);
  }
  return style;
}

/***/ }),

/***/ "./node_modules/glamor/lib/react.js":
/*!******************************************!*\
  !*** ./node_modules/glamor/lib/react.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dom = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(/*! ./index.js */ "./node_modules/glamor/lib/index.js");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index[key];
    }
  });
});
exports.createElement = createElement;
exports.vars = vars;
exports.makeTheme = makeTheme;
exports.propMerge = propMerge;

var _objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// convenience

// allows for elements to have a 'css' prop
function createElement(tag, allProps) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  // todo - pull ids from className as well?
  if (allProps && allProps.css) {
    var css = allProps.css,
        className = allProps.className,
        props = _objectWithoutProperties(allProps, ['css', 'className']);

    var rule = Array.isArray(css) ? _index.merge.apply(undefined, _toConsumableArray(css)) : (0, _index.isLikeRule)(css) ? css : (0, _index.style)(css);
    className = className ? className + ' ' + rule : rule;
    props.className = className;
    return _react2.default.createElement.apply(_react2.default, [tag, props].concat(children));
  }
  return _react2.default.createElement.apply(_react2.default, [tag, allProps].concat(children));
}

var dom = exports.dom = createElement;

// css vars, done right
// see examples/vars for usage
function vars() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function (Target) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
      _inherits(Vars, _React$Component);

      function Vars() {
        _classCallCheck(this, Vars);

        return _possibleConstructorReturn(this, (Vars.__proto__ || Object.getPrototypeOf(Vars)).apply(this, arguments));
      }

      _createClass(Vars, [{
        key: 'getChildContext',
        value: function getChildContext() {
          return {
            glamorCssVars: _extends({}, this.context.glamorCssVars, typeof value === 'function' ? value(this.props) : value)
          };
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(Target, _extends({}, this.props, { vars: this.context.glamorCssVars || (typeof value === 'function' ? value(this.props) : value) }), this.props.children);
        }
      }]);

      return Vars;
    }(_react2.default.Component), _class.childContextTypes = {
      glamorCssVars: _propTypes2.default.object
    }, _class.contextTypes = {
      glamorCssVars: _propTypes2.default.object
    }, _temp;
  };
}

var themeIndex = 0;

function makeTheme() {

  var key = 'data-glamor-theme-' + themeIndex++;

  var fn = function fn(_default) {
    return function (Target) {
      var _class2, _temp2;

      return _temp2 = _class2 = function (_React$Component2) {
        _inherits(Theme, _React$Component2);

        function Theme() {
          _classCallCheck(this, Theme);

          return _possibleConstructorReturn(this, (Theme.__proto__ || Object.getPrototypeOf(Theme)).apply(this, arguments));
        }

        _createClass(Theme, [{
          key: 'render',
          value: function render() {
            return _react2.default.createElement(Target, _extends({}, this.props, _defineProperty({}, key, _index.merge.apply(undefined, [typeof _default === 'function' ? _default(this.props) : _default].concat(_toConsumableArray(this.context[key] || []))))));
          }
        }]);

        return Theme;
      }(_react2.default.Component), _class2.contextTypes = _defineProperty({}, key, _propTypes2.default.arrayOf(_propTypes2.default.object)), _temp2;
    };
  };

  fn.key = key;
  fn.add = function (_style) {
    return function (Target) {
      var _class3, _temp3;

      return _temp3 = _class3 = function (_React$Component3) {
        _inherits(ThemeOverride, _React$Component3);

        function ThemeOverride() {
          _classCallCheck(this, ThemeOverride);

          return _possibleConstructorReturn(this, (ThemeOverride.__proto__ || Object.getPrototypeOf(ThemeOverride)).apply(this, arguments));
        }

        _createClass(ThemeOverride, [{
          key: 'getChildContext',
          value: function getChildContext() {
            return _defineProperty({}, key, [typeof _style === 'function' ? _style(this.props) : _style].concat(_toConsumableArray(this.context[key] || [])));
          }
        }, {
          key: 'render',
          value: function render() {
            return _react2.default.createElement(Target, this.props);
          }
        }]);

        return ThemeOverride;
      }(_react2.default.Component), _class3.contextTypes = _defineProperty({}, key, _propTypes2.default.arrayOf(_propTypes2.default.object)), _class3.childContextTypes = _defineProperty({}, key, _propTypes2.default.arrayOf(_propTypes2.default.object)), _temp3;
    };
  };
  return fn;
}

function toStyle(s) {
  return s != null && (0, _index.isLikeRule)(s) ? s : (0, _index.style)(s);
}

// propMerge will take an arbitrary object "props", filter out glamor data-css-* styles and merge it with "mergeStyle"
// use it for react components composing
function propMerge(mergeStyle, props) {
  var glamorStyleKeys = Object.keys(props).filter(function (x) {
    return !!/data\-css\-([a-zA-Z0-9\-_]+)/.exec(x);
  });

  // no glamor styles in obj
  if (glamorStyleKeys.length === 0) {
    return _extends({}, props, toStyle(mergeStyle));
  }

  if (glamorStyleKeys.length > 1) {
    console.warn('[glamor] detected multiple data attributes on an element. This may lead to unexpected style because of css insertion order.'); // eslint-disable-line no-console

    // just append "mergeStyle" to props, because we dunno in which order glamor styles were added to props
    return _extends({}, props, toStyle(mergeStyle));
  }

  var dataCssKey = glamorStyleKeys[0];
  var cssData = props[dataCssKey];

  var mergedStyles = (0, _index.merge)(mergeStyle, _defineProperty({}, dataCssKey, cssData));

  var restProps = (0, _objectAssign2.default)({}, props);
  delete restProps[dataCssKey];

  return _extends({}, restProps, mergedStyles);
}

/***/ }),

/***/ "./node_modules/glamor/lib/server.js":
/*!*******************************************!*\
  !*** ./node_modules/glamor/lib/server.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderStatic = renderStatic;
exports.renderStaticOptimized = renderStaticOptimized;

var _index = __webpack_require__(/*! ./index.js */ "./node_modules/glamor/lib/index.js");

/**** serverside stuff ****/

// the api's copied from aphrodite, with 1 key difference
// we include *all* the css generated by the app
// to optimize to only include generated styles on the pages
// use renderStaticOptimized
function renderStatic(fn) {
  var html = fn();
  if (html === undefined) {
    throw new Error('did you forget to return from renderToString?');
  }

  var rules = _index.styleSheet.rules(),
      css = rules.map(function (r) {
    return r.cssText;
  }).join('');
  return { html: html, ids: Object.keys(_index.styleSheet.inserted), css: css, rules: rules };
}

function renderStaticOptimized(fn) {
  // parse out ids from html
  // reconstruct css/rules/cache to pass
  var html = fn();
  if (html === undefined) {
    throw new Error('did you forget to return from renderToString?');
  }
  var o = { html: html, ids: [], css: '', rules: [] };
  var regex = /css\-([a-zA-Z0-9\-_]+)/gm;
  var match = void 0,
      ids = {};
  while ((match = regex.exec(html)) !== null) {
    if (!ids[match[1] + '']) {
      ids[match[1] + ''] = true;
    }
  }

  o.rules = _index.styleSheet.rules().filter(function (x) {
    var regex = /css\-([a-zA-Z0-9\-_]+)/gm;
    var match = regex.exec(x.cssText);
    if (match && ids[match[1] + '']) {
      return true;
    }
    if (!match) {
      return true;
    }
    return false;
  });
  o.ids = Object.keys(_index.styleSheet.inserted).filter(function (id) {
    return !!ids[id + ''] || _index.styleSheet.registered[id].type === 'raw' || _index.styleSheet.registered[id].type === 'keyframes' || _index.styleSheet.registered[id].type === 'font-face';
  });
  o.css = o.rules.map(function (x) {
    return x.cssText;
  }).join('');

  return o;
}

/***/ }),

/***/ "./node_modules/glamor/lib/sheet.js":
/*!******************************************!*\
  !*** ./node_modules/glamor/lib/sheet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyleSheet = StyleSheet;

var _objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* 

high performance StyleSheet for css-in-js systems 

- uses multiple style tags behind the scenes for millions of rules 
- uses `insertRule` for appending in production for *much* faster performance
- 'polyfills' on server side 


// usage

import StyleSheet from 'glamor/lib/sheet'
let styleSheet = new StyleSheet()

styleSheet.inject() 
- 'injects' the stylesheet into the page (or into memory if on server)

styleSheet.insert('#box { border: 1px solid red; }') 
- appends a css rule into the stylesheet 

styleSheet.flush() 
- empties the stylesheet of all its contents


*/

function last(arr) {
  return arr[arr.length - 1];
}

function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }

  // this weirdness brought to you by firefox 
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}

var isBrowser = typeof window !== 'undefined';
var isDev =  false || !"production"; //(x => (x === 'development') || !x)(process.env.NODE_ENV)
var isTest = "production" === 'test';

var oldIE = function () {
  if (isBrowser) {
    var div = document.createElement('div');
    div.innerHTML = '<!--[if lt IE 10]><i></i><![endif]-->';
    return div.getElementsByTagName('i').length === 1;
  }
}();

function makeStyleTag() {
  var tag = document.createElement('style');
  tag.type = 'text/css';
  tag.setAttribute('data-glamor', '');
  tag.appendChild(document.createTextNode(''));
  (document.head || document.getElementsByTagName('head')[0]).appendChild(tag);
  return tag;
}

function StyleSheet() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$speedy = _ref.speedy,
      speedy = _ref$speedy === undefined ? !isDev && !isTest : _ref$speedy,
      _ref$maxLength = _ref.maxLength,
      maxLength = _ref$maxLength === undefined ? isBrowser && oldIE ? 4000 : 65000 : _ref$maxLength;

  this.isSpeedy = speedy; // the big drawback here is that the css won't be editable in devtools
  this.sheet = undefined;
  this.tags = [];
  this.maxLength = maxLength;
  this.ctr = 0;
}

(0, _objectAssign2.default)(StyleSheet.prototype, {
  getSheet: function getSheet() {
    return sheetForTag(last(this.tags));
  },
  inject: function inject() {
    var _this = this;

    if (this.injected) {
      throw new Error('already injected stylesheet!');
    }
    if (isBrowser) {
      this.tags[0] = makeStyleTag();
    } else {
      // server side 'polyfill'. just enough behavior to be useful.
      this.sheet = {
        cssRules: [],
        insertRule: function insertRule(rule) {
          // enough 'spec compliance' to be able to extract the rules later  
          // in other words, just the cssText field 
          _this.sheet.cssRules.push({ cssText: rule });
        }
      };
    }
    this.injected = true;
  },
  speedy: function speedy(bool) {
    if (this.ctr !== 0) {
      throw new Error('cannot change speedy mode after inserting any rule to sheet. Either call speedy(' + bool + ') earlier in your app, or call flush() before speedy(' + bool + ')');
    }
    this.isSpeedy = !!bool;
  },
  _insert: function _insert(rule) {
    // this weirdness for perf, and chrome's weird bug 
    // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
    try {
      var sheet = this.getSheet();
      sheet.insertRule(rule, rule.indexOf('@import') !== -1 ? 0 : sheet.cssRules.length);
    } catch (e) {
      if (isDev) {
        // might need beter dx for this 
        console.warn('whoops, illegal rule inserted', rule); //eslint-disable-line no-console
      }
    }
  },
  insert: function insert(rule) {

    if (isBrowser) {
      // this is the ultrafast version, works across browsers 
      if (this.isSpeedy && this.getSheet().insertRule) {
        this._insert(rule);
      }
      // more browser weirdness. I don't even know    
      // else if(this.tags.length > 0 && this.tags::last().styleSheet) {      
      //   this.tags::last().styleSheet.cssText+= rule
      // }
      else {
          if (rule.indexOf('@import') !== -1) {
            var tag = last(this.tags);
            tag.insertBefore(document.createTextNode(rule), tag.firstChild);
          } else {
            last(this.tags).appendChild(document.createTextNode(rule));
          }
        }
    } else {
      // server side is pretty simple         
      this.sheet.insertRule(rule, rule.indexOf('@import') !== -1 ? 0 : this.sheet.cssRules.length);
    }

    this.ctr++;
    if (isBrowser && this.ctr % this.maxLength === 0) {
      this.tags.push(makeStyleTag());
    }
    return this.ctr - 1;
  },

  // commenting this out till we decide on v3's decision 
  // _replace(index, rule) {
  //   // this weirdness for perf, and chrome's weird bug 
  //   // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
  //   try {  
  //     let sheet = this.getSheet()        
  //     sheet.deleteRule(index) // todo - correct index here     
  //     sheet.insertRule(rule, index)
  //   }
  //   catch(e) {
  //     if(isDev) {
  //       // might need beter dx for this 
  //       console.warn('whoops, problem replacing rule', rule) //eslint-disable-line no-console
  //     }          
  //   }          

  // }
  // replace(index, rule) {
  //   if(isBrowser) {
  //     if(this.isSpeedy && this.getSheet().insertRule) {
  //       this._replace(index, rule)
  //     }
  //     else {
  //       let _slot = Math.floor((index  + this.maxLength) / this.maxLength) - 1        
  //       let _index = (index % this.maxLength) + 1
  //       let tag = this.tags[_slot]
  //       tag.replaceChild(document.createTextNode(rule), tag.childNodes[_index])
  //     }
  //   }
  //   else {
  //     let rules = this.sheet.cssRules
  //     this.sheet.cssRules = [ ...rules.slice(0, index), { cssText: rule }, ...rules.slice(index + 1) ]
  //   }
  // }
  delete: function _delete(index) {
    // we insert a blank rule when 'deleting' so previously returned indexes remain stable
    return this.replace(index, '');
  },
  flush: function flush() {
    if (isBrowser) {
      this.tags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
      });
      this.tags = [];
      this.sheet = null;
      this.ctr = 0;
      // todo - look for remnants in document.styleSheets
    } else {
      // simpler on server 
      this.sheet.cssRules = [];
    }
    this.injected = false;
  },
  rules: function rules() {
    if (!isBrowser) {
      return this.sheet.cssRules;
    }
    var arr = [];
    this.tags.forEach(function (tag) {
      return arr.splice.apply(arr, [arr.length, 0].concat(_toConsumableArray(Array.from(sheetForTag(tag).cssRules))));
    });
    return arr;
  }
});

/***/ }),

/***/ "./node_modules/glamor/react.js":
/*!**************************************!*\
  !*** ./node_modules/glamor/react.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/react.js */ "./node_modules/glamor/lib/react.js")


/***/ }),

/***/ "./node_modules/glamor/server.js":
/*!***************************************!*\
  !*** ./node_modules/glamor/server.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/server */ "./node_modules/glamor/lib/server.js")


/***/ }),

/***/ "./node_modules/hex2rgba/index.js":
/*!****************************************!*\
  !*** ./node_modules/hex2rgba/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Constants.
 */
var BASE = 16;
var HEX_REGEX = /^#?[a-fA-F0-9]+$/;
var HEX_SHORTHAND_LENGTH = 3;
var HEX_LENGTH = 6;

/**
 * Converts hexadecimal to RGBA.
 *
 * @param  {String}        hex     - The hexadecimal.
 * @param  {Number|String} [alpha] - The alpha transparency.
 * @return {String}                - The RGBA.
 */
module.exports = function hex2rgba(hex, alpha) {
    if (!HEX_REGEX.test(hex)) {
        throw Error('hex2rgba: first argument has invalid hexadecimal characters');
    }

    // trim unnecessary characters
    if (hex[0] === '#') {
        hex = hex.slice(1);
    }

    // expand shorthand
    if (hex.length === HEX_SHORTHAND_LENGTH) {
        hex = hex.split('');
        hex.splice(2, 0, hex[2]);
        hex.splice(1, 0, hex[1]);
        hex.splice(0, 0, hex[0]);
        hex = hex.join('');
    }

    if (hex.length !== HEX_LENGTH) {
        throw Error('hex2rgba: first argument has invalid hexadecimal length');
    }

    // convert hex to rgb
    var values = [
        parseInt(hex.slice(0, 2), BASE),
        parseInt(hex.slice(2, 4), BASE),
        parseInt(hex.slice(4, 6), BASE)
    ];

    alpha = typeof alpha === 'number' ? alpha : parseFloat(alpha);
    if (alpha >= 0 && alpha <= 1) {
        values.push(alpha);
    } else {
        values.push(1);
    }

    return 'rgba(' + values.join(',') + ')';
};


/***/ }),

/***/ "./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g
var msPattern = /^ms-/
var cache = {}

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower)
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/* harmony default export */ __webpack_exports__["default"] = (hyphenateStyleName);


/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/crossFade.js":
/*!************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/crossFade.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];
function crossFade(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/cursor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/cursor.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;
var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/filter.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/filter.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-filter-function
var prefixes = ['-webkit-', ''];
function filter(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/flex.js":
/*!*******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/flex.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return values[value];
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/gradient.js":
/*!***********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/gradient.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/imageSet.js":
/*!***********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/imageSet.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-image-set
var prefixes = ['-webkit-', ''];
function imageSet(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/position.js":
/*!***********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/position.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/sizing.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/sizing.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;
var prefixes = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/transition.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/transition.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = __webpack_require__(/*! css-in-js-utils/lib/hyphenateProperty */ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js");

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _capitalizeString = __webpack_require__(/*! ../../utils/capitalizeString */ "./node_modules/inline-style-prefixer/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap);
    // if the property is already prefixed
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
    return outputValue;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/staticData.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/staticData.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var w = ["Webkit"];
var m = ["Moz"];
var ms = ["ms"];
var wm = ["Webkit", "Moz"];
var wms = ["Webkit", "ms"];
var wmms = ["Webkit", "Moz", "ms"];

exports.default = {
  plugins: [],
  prefixMap: { "appearance": wm, "userSelect": wmms, "textEmphasisPosition": w, "textEmphasis": w, "textEmphasisStyle": w, "textEmphasisColor": w, "boxDecorationBreak": w, "clipPath": w, "maskImage": w, "maskMode": w, "maskRepeat": w, "maskPosition": w, "maskClip": w, "maskOrigin": w, "maskSize": w, "maskComposite": w, "mask": w, "maskBorderSource": w, "maskBorderMode": w, "maskBorderSlice": w, "maskBorderWidth": w, "maskBorderOutset": w, "maskBorderRepeat": w, "maskBorder": w, "maskType": w, "textDecorationStyle": w, "textDecorationSkip": w, "textDecorationLine": w, "textDecorationColor": w, "filter": w, "fontFeatureSettings": w, "breakAfter": wmms, "breakBefore": wmms, "breakInside": wmms, "columnCount": wm, "columnFill": wm, "columnGap": wm, "columnRule": wm, "columnRuleColor": wm, "columnRuleStyle": wm, "columnRuleWidth": wm, "columns": wm, "columnSpan": wm, "columnWidth": wm, "writingMode": wms, "flex": w, "flexBasis": w, "flexDirection": w, "flexGrow": w, "flexFlow": w, "flexShrink": w, "flexWrap": w, "alignContent": w, "alignItems": w, "alignSelf": w, "justifyContent": w, "order": w, "transform": w, "transformOrigin": w, "transformOriginX": w, "transformOriginY": w, "backfaceVisibility": w, "perspective": w, "perspectiveOrigin": w, "transformStyle": w, "transformOriginZ": w, "animation": w, "animationDelay": w, "animationDirection": w, "animationFillMode": w, "animationDuration": w, "animationIterationCount": w, "animationName": w, "animationPlayState": w, "animationTimingFunction": w, "backdropFilter": w, "fontKerning": w, "scrollSnapType": wms, "scrollSnapPointsX": wms, "scrollSnapPointsY": wms, "scrollSnapDestination": wms, "scrollSnapCoordinate": wms, "shapeImageThreshold": w, "shapeImageMargin": w, "shapeImageOutside": w, "hyphens": wmms, "flowInto": wms, "flowFrom": wms, "regionFragment": wms, "textAlignLast": m, "tabSize": m, "wrapFlow": ms, "wrapThrough": ms, "wrapMargin": ms, "gridTemplateColumns": ms, "gridTemplateRows": ms, "gridTemplateAreas": ms, "gridTemplate": ms, "gridAutoColumns": ms, "gridAutoRows": ms, "gridAutoFlow": ms, "grid": ms, "gridRowStart": ms, "gridColumnStart": ms, "gridRowEnd": ms, "gridRow": ms, "gridColumn": ms, "gridColumnEnd": ms, "gridColumnGap": ms, "gridRowGap": ms, "gridArea": ms, "gridGap": ms, "textSizeAdjust": wms, "borderImage": w, "borderImageOutset": w, "borderImageRepeat": w, "borderImageSlice": w, "borderImageSource": w, "borderImageWidth": w, "transitionDelay": w, "transitionDuration": w, "transitionProperty": w, "transitionTimingFunction": w }
};
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/capitalizeString.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/capitalizeString.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeString;
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/prefixProperty.js":
/*!********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/prefixProperty.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixProperty;

var _capitalizeString = __webpack_require__(/*! ./capitalizeString */ "./node_modules/inline-style-prefixer/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var requiredPrefixes = prefixProperties[property];
    for (var i = 0, len = requiredPrefixes.length; i < len; ++i) {
      style[requiredPrefixes[i] + (0, _capitalizeString2.default)(property)] = style[property];
    }
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/prefixValue.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/prefixValue.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixValue;
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/performance-now/lib/performance-now.js":
/*!*************************************************************!*\
  !*** ./node_modules/performance-now/lib/performance-now.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map


/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/raf/index.js":
/*!***********************************!*\
  !*** ./node_modules/raf/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var now = __webpack_require__(/*! performance-now */ "./node_modules/performance-now/lib/performance-now.js")
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}


/***/ }),

/***/ "./node_modules/react-fast-compare/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-fast-compare/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;
var hasElementType = typeof Element !== 'undefined';

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;
    // end fast-deep-equal

    // start react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element && b instanceof Element)
      return a === b;

    // custom handling for React
    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    }
    // end react-fast-compare

    // fast-deep-equal index.js 2.0.1
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message && error.message.match(/stack|recursion/i)) || (error.number === -2146828260)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/react-github-btn/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-github-btn/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class GitHubButton extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor (props) {
    super(props)
    this.$ = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef()
    this._ = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef()
  }
  render () {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('span', { ref: this.$ }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('a', { ...this.props, ref: this._ }, this.props.children))
  }
  componentDidMount () {
    this.paint()
  }
  componentWillUpdate () {
    this.reset()
  }
  componentDidUpdate () {
    this.paint()
  }
  componentWillUnmount () {
    this.reset()
  }
  paint () {
    const _ = this.$.current.appendChild(document.createElement('span'))
    Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(null, /*! github-buttons */ "./node_modules/github-buttons/dist/buttons.esm.js")).then(({ render }) => {
      render(_.appendChild(this._.current), function (el) {
        try {
          _.parentNode.replaceChild(el, _)
        } catch (_) {}
      })
    })
  }
  reset () {
    this.$.current.replaceChild(this._.current, this.$.current.lastChild)
  }
}

/* harmony default export */ __webpack_exports__["default"] = (GitHubButton);


/***/ }),

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) { var parent, cache, hot; } else {
  // prod mode
  exports.hot = function(a) {
    return a
  }
}


/***/ }),

/***/ "./node_modules/react-motion/lib/Motion.js":
/*!*************************************************!*\
  !*** ./node_modules/react-motion/lib/Motion.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _mapToZero = __webpack_require__(/*! ./mapToZero */ "./node_modules/react-motion/lib/mapToZero.js");

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = __webpack_require__(/*! ./stripStyle */ "./node_modules/react-motion/lib/stripStyle.js");

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = __webpack_require__(/*! ./stepper */ "./node_modules/react-motion/lib/stepper.js");

var _stepper4 = _interopRequireDefault(_stepper3);

var _performanceNow = __webpack_require__(/*! performance-now */ "./node_modules/performance-now/lib/performance-now.js");

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = __webpack_require__(/*! ./shouldStopAnimation */ "./node_modules/react-motion/lib/shouldStopAnimation.js");

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var msPerFrame = 1000 / 60;

var Motion = (function (_React$Component) {
  _inherits(Motion, _React$Component);

  _createClass(Motion, null, [{
    key: 'propTypes',
    value: {
      // TOOD: warn against putting a config in here
      defaultStyle: _propTypes2['default'].objectOf(_propTypes2['default'].number),
      style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired,
      children: _propTypes2['default'].func.isRequired,
      onRest: _propTypes2['default'].func
    },
    enumerable: true
  }]);

  function Motion(props) {
    var _this = this;

    _classCallCheck(this, Motion);

    _React$Component.call(this, props);
    this.wasAnimating = false;
    this.animationID = null;
    this.prevTime = 0;
    this.accumulatedTime = 0;
    this.unreadPropStyle = null;

    this.clearUnreadPropStyle = function (destStyle) {
      var dirty = false;
      var _state = _this.state;
      var currentStyle = _state.currentStyle;
      var currentVelocity = _state.currentVelocity;
      var lastIdealStyle = _state.lastIdealStyle;
      var lastIdealVelocity = _state.lastIdealVelocity;

      for (var key in destStyle) {
        if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
          continue;
        }

        var styleValue = destStyle[key];
        if (typeof styleValue === 'number') {
          if (!dirty) {
            dirty = true;
            currentStyle = _extends({}, currentStyle);
            currentVelocity = _extends({}, currentVelocity);
            lastIdealStyle = _extends({}, lastIdealStyle);
            lastIdealVelocity = _extends({}, lastIdealVelocity);
          }

          currentStyle[key] = styleValue;
          currentVelocity[key] = 0;
          lastIdealStyle[key] = styleValue;
          lastIdealVelocity[key] = 0;
        }
      }

      if (dirty) {
        _this.setState({ currentStyle: currentStyle, currentVelocity: currentVelocity, lastIdealStyle: lastIdealStyle, lastIdealVelocity: lastIdealVelocity });
      }
    };

    this.startAnimationIfNecessary = function () {
      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
      // call cb? No, otherwise accidental parent rerender causes cb trigger
      _this.animationID = _raf2['default'](function (timestamp) {
        // check if we need to animate in the first place
        var propsStyle = _this.props.style;
        if (_shouldStopAnimation2['default'](_this.state.currentStyle, propsStyle, _this.state.currentVelocity)) {
          if (_this.wasAnimating && _this.props.onRest) {
            _this.props.onRest();
          }

          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.wasAnimating = false;
          _this.accumulatedTime = 0;
          return;
        }

        _this.wasAnimating = true;

        var currentTime = timestamp || _performanceNow2['default']();
        var timeDelta = currentTime - _this.prevTime;
        _this.prevTime = currentTime;
        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
        // more than 10 frames? prolly switched browser tab. Restart
        if (_this.accumulatedTime > msPerFrame * 10) {
          _this.accumulatedTime = 0;
        }

        if (_this.accumulatedTime === 0) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.startAnimationIfNecessary();
          return;
        }

        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

        var newLastIdealStyle = {};
        var newLastIdealVelocity = {};
        var newCurrentStyle = {};
        var newCurrentVelocity = {};

        for (var key in propsStyle) {
          if (!Object.prototype.hasOwnProperty.call(propsStyle, key)) {
            continue;
          }

          var styleValue = propsStyle[key];
          if (typeof styleValue === 'number') {
            newCurrentStyle[key] = styleValue;
            newCurrentVelocity[key] = 0;
            newLastIdealStyle[key] = styleValue;
            newLastIdealVelocity[key] = 0;
          } else {
            var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
            var newLastIdealVelocityValue = _this.state.lastIdealVelocity[key];
            for (var i = 0; i < framesToCatchUp; i++) {
              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

              newLastIdealStyleValue = _stepper[0];
              newLastIdealVelocityValue = _stepper[1];
            }

            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

            var nextIdealX = _stepper2[0];
            var nextIdealV = _stepper2[1];

            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
            newLastIdealStyle[key] = newLastIdealStyleValue;
            newLastIdealVelocity[key] = newLastIdealVelocityValue;
          }
        }

        _this.animationID = null;
        // the amount we're looped over above
        _this.accumulatedTime -= framesToCatchUp * msPerFrame;

        _this.setState({
          currentStyle: newCurrentStyle,
          currentVelocity: newCurrentVelocity,
          lastIdealStyle: newLastIdealStyle,
          lastIdealVelocity: newLastIdealVelocity
        });

        _this.unreadPropStyle = null;

        _this.startAnimationIfNecessary();
      });
    };

    this.state = this.defaultState();
  }

  Motion.prototype.defaultState = function defaultState() {
    var _props = this.props;
    var defaultStyle = _props.defaultStyle;
    var style = _props.style;

    var currentStyle = defaultStyle || _stripStyle2['default'](style);
    var currentVelocity = _mapToZero2['default'](currentStyle);
    return {
      currentStyle: currentStyle,
      currentVelocity: currentVelocity,
      lastIdealStyle: currentStyle,
      lastIdealVelocity: currentVelocity
    };
  };

  // it's possible that currentStyle's value is stale: if props is immediately
  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
  // at 0 (didn't have time to tick and interpolate even once). If we naively
  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
  // In reality currentStyle should be 400

  Motion.prototype.componentDidMount = function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  };

  Motion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    if (this.unreadPropStyle != null) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyle);
    }

    this.unreadPropStyle = props.style;
    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  };

  Motion.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  };

  Motion.prototype.render = function render() {
    var renderedChildren = this.props.children(this.state.currentStyle);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  };

  return Motion;
})(_react2['default'].Component);

exports['default'] = Motion;
module.exports = exports['default'];

// after checking for unreadPropStyle != null, we manually go set the
// non-interpolating values (those that are a number, without a spring
// config)

/***/ }),

/***/ "./node_modules/react-motion/lib/StaggeredMotion.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-motion/lib/StaggeredMotion.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _mapToZero = __webpack_require__(/*! ./mapToZero */ "./node_modules/react-motion/lib/mapToZero.js");

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = __webpack_require__(/*! ./stripStyle */ "./node_modules/react-motion/lib/stripStyle.js");

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = __webpack_require__(/*! ./stepper */ "./node_modules/react-motion/lib/stepper.js");

var _stepper4 = _interopRequireDefault(_stepper3);

var _performanceNow = __webpack_require__(/*! performance-now */ "./node_modules/performance-now/lib/performance-now.js");

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = __webpack_require__(/*! ./shouldStopAnimation */ "./node_modules/react-motion/lib/shouldStopAnimation.js");

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var msPerFrame = 1000 / 60;

function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
  for (var i = 0; i < currentStyles.length; i++) {
    if (!_shouldStopAnimation2['default'](currentStyles[i], styles[i], currentVelocities[i])) {
      return false;
    }
  }
  return true;
}

var StaggeredMotion = (function (_React$Component) {
  _inherits(StaggeredMotion, _React$Component);

  _createClass(StaggeredMotion, null, [{
    key: 'propTypes',
    value: {
      // TOOD: warn against putting a config in here
      defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].objectOf(_propTypes2['default'].number)),
      styles: _propTypes2['default'].func.isRequired,
      children: _propTypes2['default'].func.isRequired
    },
    enumerable: true
  }]);

  function StaggeredMotion(props) {
    var _this = this;

    _classCallCheck(this, StaggeredMotion);

    _React$Component.call(this, props);
    this.animationID = null;
    this.prevTime = 0;
    this.accumulatedTime = 0;
    this.unreadPropStyles = null;

    this.clearUnreadPropStyle = function (unreadPropStyles) {
      var _state = _this.state;
      var currentStyles = _state.currentStyles;
      var currentVelocities = _state.currentVelocities;
      var lastIdealStyles = _state.lastIdealStyles;
      var lastIdealVelocities = _state.lastIdealVelocities;

      var someDirty = false;
      for (var i = 0; i < unreadPropStyles.length; i++) {
        var unreadPropStyle = unreadPropStyles[i];
        var dirty = false;

        for (var key in unreadPropStyle) {
          if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
            continue;
          }

          var styleValue = unreadPropStyle[key];
          if (typeof styleValue === 'number') {
            if (!dirty) {
              dirty = true;
              someDirty = true;
              currentStyles[i] = _extends({}, currentStyles[i]);
              currentVelocities[i] = _extends({}, currentVelocities[i]);
              lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
              lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
            }
            currentStyles[i][key] = styleValue;
            currentVelocities[i][key] = 0;
            lastIdealStyles[i][key] = styleValue;
            lastIdealVelocities[i][key] = 0;
          }
        }
      }

      if (someDirty) {
        _this.setState({ currentStyles: currentStyles, currentVelocities: currentVelocities, lastIdealStyles: lastIdealStyles, lastIdealVelocities: lastIdealVelocities });
      }
    };

    this.startAnimationIfNecessary = function () {
      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
      // call cb? No, otherwise accidental parent rerender causes cb trigger
      _this.animationID = _raf2['default'](function (timestamp) {
        var destStyles = _this.props.styles(_this.state.lastIdealStyles);

        // check if we need to animate in the first place
        if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities)) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.accumulatedTime = 0;
          return;
        }

        var currentTime = timestamp || _performanceNow2['default']();
        var timeDelta = currentTime - _this.prevTime;
        _this.prevTime = currentTime;
        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
        // more than 10 frames? prolly switched browser tab. Restart
        if (_this.accumulatedTime > msPerFrame * 10) {
          _this.accumulatedTime = 0;
        }

        if (_this.accumulatedTime === 0) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.startAnimationIfNecessary();
          return;
        }

        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

        var newLastIdealStyles = [];
        var newLastIdealVelocities = [];
        var newCurrentStyles = [];
        var newCurrentVelocities = [];

        for (var i = 0; i < destStyles.length; i++) {
          var destStyle = destStyles[i];
          var newCurrentStyle = {};
          var newCurrentVelocity = {};
          var newLastIdealStyle = {};
          var newLastIdealVelocity = {};

          for (var key in destStyle) {
            if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
              continue;
            }

            var styleValue = destStyle[key];
            if (typeof styleValue === 'number') {
              newCurrentStyle[key] = styleValue;
              newCurrentVelocity[key] = 0;
              newLastIdealStyle[key] = styleValue;
              newLastIdealVelocity[key] = 0;
            } else {
              var newLastIdealStyleValue = _this.state.lastIdealStyles[i][key];
              var newLastIdealVelocityValue = _this.state.lastIdealVelocities[i][key];
              for (var j = 0; j < framesToCatchUp; j++) {
                var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

                newLastIdealStyleValue = _stepper[0];
                newLastIdealVelocityValue = _stepper[1];
              }

              var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

              var nextIdealX = _stepper2[0];
              var nextIdealV = _stepper2[1];

              newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
              newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
              newLastIdealStyle[key] = newLastIdealStyleValue;
              newLastIdealVelocity[key] = newLastIdealVelocityValue;
            }
          }

          newCurrentStyles[i] = newCurrentStyle;
          newCurrentVelocities[i] = newCurrentVelocity;
          newLastIdealStyles[i] = newLastIdealStyle;
          newLastIdealVelocities[i] = newLastIdealVelocity;
        }

        _this.animationID = null;
        // the amount we're looped over above
        _this.accumulatedTime -= framesToCatchUp * msPerFrame;

        _this.setState({
          currentStyles: newCurrentStyles,
          currentVelocities: newCurrentVelocities,
          lastIdealStyles: newLastIdealStyles,
          lastIdealVelocities: newLastIdealVelocities
        });

        _this.unreadPropStyles = null;

        _this.startAnimationIfNecessary();
      });
    };

    this.state = this.defaultState();
  }

  StaggeredMotion.prototype.defaultState = function defaultState() {
    var _props = this.props;
    var defaultStyles = _props.defaultStyles;
    var styles = _props.styles;

    var currentStyles = defaultStyles || styles().map(_stripStyle2['default']);
    var currentVelocities = currentStyles.map(function (currentStyle) {
      return _mapToZero2['default'](currentStyle);
    });
    return {
      currentStyles: currentStyles,
      currentVelocities: currentVelocities,
      lastIdealStyles: currentStyles,
      lastIdealVelocities: currentVelocities
    };
  };

  StaggeredMotion.prototype.componentDidMount = function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  };

  StaggeredMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    if (this.unreadPropStyles != null) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyles);
    }

    this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  };

  StaggeredMotion.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  };

  StaggeredMotion.prototype.render = function render() {
    var renderedChildren = this.props.children(this.state.currentStyles);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  };

  return StaggeredMotion;
})(_react2['default'].Component);

exports['default'] = StaggeredMotion;
module.exports = exports['default'];

// it's possible that currentStyle's value is stale: if props is immediately
// changed from 0 to 400 to spring(0) again, the async currentStyle is still
// at 0 (didn't have time to tick and interpolate even once). If we naively
// compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
// In reality currentStyle should be 400

// after checking for unreadPropStyles != null, we manually go set the
// non-interpolating values (those that are a number, without a spring
// config)

/***/ }),

/***/ "./node_modules/react-motion/lib/TransitionMotion.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-motion/lib/TransitionMotion.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _mapToZero = __webpack_require__(/*! ./mapToZero */ "./node_modules/react-motion/lib/mapToZero.js");

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = __webpack_require__(/*! ./stripStyle */ "./node_modules/react-motion/lib/stripStyle.js");

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = __webpack_require__(/*! ./stepper */ "./node_modules/react-motion/lib/stepper.js");

var _stepper4 = _interopRequireDefault(_stepper3);

var _mergeDiff = __webpack_require__(/*! ./mergeDiff */ "./node_modules/react-motion/lib/mergeDiff.js");

var _mergeDiff2 = _interopRequireDefault(_mergeDiff);

var _performanceNow = __webpack_require__(/*! performance-now */ "./node_modules/performance-now/lib/performance-now.js");

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = __webpack_require__(/*! ./shouldStopAnimation */ "./node_modules/react-motion/lib/shouldStopAnimation.js");

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var msPerFrame = 1000 / 60;

// the children function & (potential) styles function asks as param an
// Array<TransitionPlainStyle>, where each TransitionPlainStyle is of the format
// {key: string, data?: any, style: PlainStyle}. However, the way we keep
// internal states doesn't contain such a data structure (check the state and
// TransitionMotionState). So when children function and others ask for such
// data we need to generate them on the fly by combining mergedPropsStyles and
// currentStyles/lastIdealStyles
function rehydrateStyles(mergedPropsStyles, unreadPropStyles, plainStyles) {
  // Copy the value to a `const` so that Flow understands that the const won't
  // change and will be non-nullable in the callback below.
  var cUnreadPropStyles = unreadPropStyles;
  if (cUnreadPropStyles == null) {
    return mergedPropsStyles.map(function (mergedPropsStyle, i) {
      return {
        key: mergedPropsStyle.key,
        data: mergedPropsStyle.data,
        style: plainStyles[i]
      };
    });
  }
  return mergedPropsStyles.map(function (mergedPropsStyle, i) {
    for (var j = 0; j < cUnreadPropStyles.length; j++) {
      if (cUnreadPropStyles[j].key === mergedPropsStyle.key) {
        return {
          key: cUnreadPropStyles[j].key,
          data: cUnreadPropStyles[j].data,
          style: plainStyles[i]
        };
      }
    }
    return { key: mergedPropsStyle.key, data: mergedPropsStyle.data, style: plainStyles[i] };
  });
}

function shouldStopAnimationAll(currentStyles, destStyles, currentVelocities, mergedPropsStyles) {
  if (mergedPropsStyles.length !== destStyles.length) {
    return false;
  }

  for (var i = 0; i < mergedPropsStyles.length; i++) {
    if (mergedPropsStyles[i].key !== destStyles[i].key) {
      return false;
    }
  }

  // we have the invariant that mergedPropsStyles and
  // currentStyles/currentVelocities/last* are synced in terms of cells, see
  // mergeAndSync comment for more info
  for (var i = 0; i < mergedPropsStyles.length; i++) {
    if (!_shouldStopAnimation2['default'](currentStyles[i], destStyles[i].style, currentVelocities[i])) {
      return false;
    }
  }

  return true;
}

// core key merging logic

// things to do: say previously merged style is {a, b}, dest style (prop) is {b,
// c}, previous current (interpolating) style is {a, b}
// **invariant**: current[i] corresponds to merged[i] in terms of key

// steps:
// turn merged style into {a?, b, c}
//    add c, value of c is destStyles.c
//    maybe remove a, aka call willLeave(a), then merged is either {b, c} or {a, b, c}
// turn current (interpolating) style from {a, b} into {a?, b, c}
//    maybe remove a
//    certainly add c, value of c is willEnter(c)
// loop over merged and construct new current
// dest doesn't change, that's owner's
function mergeAndSync(willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldLastIdealStyles, oldLastIdealVelocities) {
  var newMergedPropsStyles = _mergeDiff2['default'](oldMergedPropsStyles, destStyles, function (oldIndex, oldMergedPropsStyle) {
    var leavingStyle = willLeave(oldMergedPropsStyle);
    if (leavingStyle == null) {
      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
      return null;
    }
    if (_shouldStopAnimation2['default'](oldCurrentStyles[oldIndex], leavingStyle, oldCurrentVelocities[oldIndex])) {
      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
      return null;
    }
    return { key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data, style: leavingStyle };
  });

  var newCurrentStyles = [];
  var newCurrentVelocities = [];
  var newLastIdealStyles = [];
  var newLastIdealVelocities = [];
  for (var i = 0; i < newMergedPropsStyles.length; i++) {
    var newMergedPropsStyleCell = newMergedPropsStyles[i];
    var foundOldIndex = null;
    for (var j = 0; j < oldMergedPropsStyles.length; j++) {
      if (oldMergedPropsStyles[j].key === newMergedPropsStyleCell.key) {
        foundOldIndex = j;
        break;
      }
    }
    // TODO: key search code
    if (foundOldIndex == null) {
      var plainStyle = willEnter(newMergedPropsStyleCell);
      newCurrentStyles[i] = plainStyle;
      newLastIdealStyles[i] = plainStyle;

      var velocity = _mapToZero2['default'](newMergedPropsStyleCell.style);
      newCurrentVelocities[i] = velocity;
      newLastIdealVelocities[i] = velocity;
    } else {
      newCurrentStyles[i] = oldCurrentStyles[foundOldIndex];
      newLastIdealStyles[i] = oldLastIdealStyles[foundOldIndex];
      newCurrentVelocities[i] = oldCurrentVelocities[foundOldIndex];
      newLastIdealVelocities[i] = oldLastIdealVelocities[foundOldIndex];
    }
  }

  return [newMergedPropsStyles, newCurrentStyles, newCurrentVelocities, newLastIdealStyles, newLastIdealVelocities];
}

var TransitionMotion = (function (_React$Component) {
  _inherits(TransitionMotion, _React$Component);

  _createClass(TransitionMotion, null, [{
    key: 'propTypes',
    value: {
      defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
        key: _propTypes2['default'].string.isRequired,
        data: _propTypes2['default'].any,
        style: _propTypes2['default'].objectOf(_propTypes2['default'].number).isRequired
      })),
      styles: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
        key: _propTypes2['default'].string.isRequired,
        data: _propTypes2['default'].any,
        style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired
      }))]).isRequired,
      children: _propTypes2['default'].func.isRequired,
      willEnter: _propTypes2['default'].func,
      willLeave: _propTypes2['default'].func,
      didLeave: _propTypes2['default'].func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      willEnter: function willEnter(styleThatEntered) {
        return _stripStyle2['default'](styleThatEntered.style);
      },
      // recall: returning null makes the current unmounting TransitionStyle
      // disappear immediately
      willLeave: function willLeave() {
        return null;
      },
      didLeave: function didLeave() {}
    },
    enumerable: true
  }]);

  function TransitionMotion(props) {
    var _this = this;

    _classCallCheck(this, TransitionMotion);

    _React$Component.call(this, props);
    this.unmounting = false;
    this.animationID = null;
    this.prevTime = 0;
    this.accumulatedTime = 0;
    this.unreadPropStyles = null;

    this.clearUnreadPropStyle = function (unreadPropStyles) {
      var _mergeAndSync = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, unreadPropStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);

      var mergedPropsStyles = _mergeAndSync[0];
      var currentStyles = _mergeAndSync[1];
      var currentVelocities = _mergeAndSync[2];
      var lastIdealStyles = _mergeAndSync[3];
      var lastIdealVelocities = _mergeAndSync[4];

      for (var i = 0; i < unreadPropStyles.length; i++) {
        var unreadPropStyle = unreadPropStyles[i].style;
        var dirty = false;

        for (var key in unreadPropStyle) {
          if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
            continue;
          }

          var styleValue = unreadPropStyle[key];
          if (typeof styleValue === 'number') {
            if (!dirty) {
              dirty = true;
              currentStyles[i] = _extends({}, currentStyles[i]);
              currentVelocities[i] = _extends({}, currentVelocities[i]);
              lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
              lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
              mergedPropsStyles[i] = {
                key: mergedPropsStyles[i].key,
                data: mergedPropsStyles[i].data,
                style: _extends({}, mergedPropsStyles[i].style)
              };
            }
            currentStyles[i][key] = styleValue;
            currentVelocities[i][key] = 0;
            lastIdealStyles[i][key] = styleValue;
            lastIdealVelocities[i][key] = 0;
            mergedPropsStyles[i].style[key] = styleValue;
          }
        }
      }

      // unlike the other 2 components, we can't detect staleness and optionally
      // opt out of setState here. each style object's data might contain new
      // stuff we're not/cannot compare
      _this.setState({
        currentStyles: currentStyles,
        currentVelocities: currentVelocities,
        mergedPropsStyles: mergedPropsStyles,
        lastIdealStyles: lastIdealStyles,
        lastIdealVelocities: lastIdealVelocities
      });
    };

    this.startAnimationIfNecessary = function () {
      if (_this.unmounting) {
        return;
      }

      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
      // call cb? No, otherwise accidental parent rerender causes cb trigger
      _this.animationID = _raf2['default'](function (timestamp) {
        // https://github.com/chenglou/react-motion/pull/420
        // > if execution passes the conditional if (this.unmounting), then
        // executes async defaultRaf and after that component unmounts and after
        // that the callback of defaultRaf is called, then setState will be called
        // on unmounted component.
        if (_this.unmounting) {
          return;
        }

        var propStyles = _this.props.styles;
        var destStyles = typeof propStyles === 'function' ? propStyles(rehydrateStyles(_this.state.mergedPropsStyles, _this.unreadPropStyles, _this.state.lastIdealStyles)) : propStyles;

        // check if we need to animate in the first place
        if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities, _this.state.mergedPropsStyles)) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.accumulatedTime = 0;
          return;
        }

        var currentTime = timestamp || _performanceNow2['default']();
        var timeDelta = currentTime - _this.prevTime;
        _this.prevTime = currentTime;
        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
        // more than 10 frames? prolly switched browser tab. Restart
        if (_this.accumulatedTime > msPerFrame * 10) {
          _this.accumulatedTime = 0;
        }

        if (_this.accumulatedTime === 0) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.startAnimationIfNecessary();
          return;
        }

        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

        var _mergeAndSync2 = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, destStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);

        var newMergedPropsStyles = _mergeAndSync2[0];
        var newCurrentStyles = _mergeAndSync2[1];
        var newCurrentVelocities = _mergeAndSync2[2];
        var newLastIdealStyles = _mergeAndSync2[3];
        var newLastIdealVelocities = _mergeAndSync2[4];

        for (var i = 0; i < newMergedPropsStyles.length; i++) {
          var newMergedPropsStyle = newMergedPropsStyles[i].style;
          var newCurrentStyle = {};
          var newCurrentVelocity = {};
          var newLastIdealStyle = {};
          var newLastIdealVelocity = {};

          for (var key in newMergedPropsStyle) {
            if (!Object.prototype.hasOwnProperty.call(newMergedPropsStyle, key)) {
              continue;
            }

            var styleValue = newMergedPropsStyle[key];
            if (typeof styleValue === 'number') {
              newCurrentStyle[key] = styleValue;
              newCurrentVelocity[key] = 0;
              newLastIdealStyle[key] = styleValue;
              newLastIdealVelocity[key] = 0;
            } else {
              var newLastIdealStyleValue = newLastIdealStyles[i][key];
              var newLastIdealVelocityValue = newLastIdealVelocities[i][key];
              for (var j = 0; j < framesToCatchUp; j++) {
                var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

                newLastIdealStyleValue = _stepper[0];
                newLastIdealVelocityValue = _stepper[1];
              }

              var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

              var nextIdealX = _stepper2[0];
              var nextIdealV = _stepper2[1];

              newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
              newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
              newLastIdealStyle[key] = newLastIdealStyleValue;
              newLastIdealVelocity[key] = newLastIdealVelocityValue;
            }
          }

          newLastIdealStyles[i] = newLastIdealStyle;
          newLastIdealVelocities[i] = newLastIdealVelocity;
          newCurrentStyles[i] = newCurrentStyle;
          newCurrentVelocities[i] = newCurrentVelocity;
        }

        _this.animationID = null;
        // the amount we're looped over above
        _this.accumulatedTime -= framesToCatchUp * msPerFrame;

        _this.setState({
          currentStyles: newCurrentStyles,
          currentVelocities: newCurrentVelocities,
          lastIdealStyles: newLastIdealStyles,
          lastIdealVelocities: newLastIdealVelocities,
          mergedPropsStyles: newMergedPropsStyles
        });

        _this.unreadPropStyles = null;

        _this.startAnimationIfNecessary();
      });
    };

    this.state = this.defaultState();
  }

  TransitionMotion.prototype.defaultState = function defaultState() {
    var _props = this.props;
    var defaultStyles = _props.defaultStyles;
    var styles = _props.styles;
    var willEnter = _props.willEnter;
    var willLeave = _props.willLeave;
    var didLeave = _props.didLeave;

    var destStyles = typeof styles === 'function' ? styles(defaultStyles) : styles;

    // this is special. for the first time around, we don't have a comparison
    // between last (no last) and current merged props. we'll compute last so:
    // say default is {a, b} and styles (dest style) is {b, c}, we'll
    // fabricate last as {a, b}
    var oldMergedPropsStyles = undefined;
    if (defaultStyles == null) {
      oldMergedPropsStyles = destStyles;
    } else {
      oldMergedPropsStyles = defaultStyles.map(function (defaultStyleCell) {
        // TODO: key search code
        for (var i = 0; i < destStyles.length; i++) {
          if (destStyles[i].key === defaultStyleCell.key) {
            return destStyles[i];
          }
        }
        return defaultStyleCell;
      });
    }
    var oldCurrentStyles = defaultStyles == null ? destStyles.map(function (s) {
      return _stripStyle2['default'](s.style);
    }) : defaultStyles.map(function (s) {
      return _stripStyle2['default'](s.style);
    });
    var oldCurrentVelocities = defaultStyles == null ? destStyles.map(function (s) {
      return _mapToZero2['default'](s.style);
    }) : defaultStyles.map(function (s) {
      return _mapToZero2['default'](s.style);
    });

    var _mergeAndSync3 = mergeAndSync(
    // Because this is an old-style createReactClass component, Flow doesn't
    // understand that the willEnter and willLeave props have default values
    // and will always be present.
    willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldCurrentStyles, // oldLastIdealStyles really
    oldCurrentVelocities);

    var mergedPropsStyles = _mergeAndSync3[0];
    var currentStyles = _mergeAndSync3[1];
    var currentVelocities = _mergeAndSync3[2];
    var lastIdealStyles = _mergeAndSync3[3];
    var lastIdealVelocities = _mergeAndSync3[4];
    // oldLastIdealVelocities really

    return {
      currentStyles: currentStyles,
      currentVelocities: currentVelocities,
      lastIdealStyles: lastIdealStyles,
      lastIdealVelocities: lastIdealVelocities,
      mergedPropsStyles: mergedPropsStyles
    };
  };

  // after checking for unreadPropStyles != null, we manually go set the
  // non-interpolating values (those that are a number, without a spring
  // config)

  TransitionMotion.prototype.componentDidMount = function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  };

  TransitionMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    if (this.unreadPropStyles) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyles);
    }

    var styles = props.styles;
    if (typeof styles === 'function') {
      this.unreadPropStyles = styles(rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles));
    } else {
      this.unreadPropStyles = styles;
    }

    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  };

  TransitionMotion.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounting = true;
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  };

  TransitionMotion.prototype.render = function render() {
    var hydratedStyles = rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles);
    var renderedChildren = this.props.children(hydratedStyles);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  };

  return TransitionMotion;
})(_react2['default'].Component);

exports['default'] = TransitionMotion;
module.exports = exports['default'];

// list of styles, each containing interpolating values. Part of what's passed
// to children function. Notice that this is
// Array<ActualInterpolatingStyleObject>, without the wrapper that is {key: ...,
// data: ... style: ActualInterpolatingStyleObject}. Only mergedPropsStyles
// contains the key & data info (so that we only have a single source of truth
// for these, and to save space). Check the comment for `rehydrateStyles` to
// see how we regenerate the entirety of what's passed to children function

// the array that keeps track of currently rendered stuff! Including stuff
// that you've unmounted but that's still animating. This is where it lives

// it's possible that currentStyle's value is stale: if props is immediately
// changed from 0 to 400 to spring(0) again, the async currentStyle is still
// at 0 (didn't have time to tick and interpolate even once). If we naively
// compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
// In reality currentStyle should be 400

/***/ }),

/***/ "./node_modules/react-motion/lib/mapToZero.js":
/*!****************************************************!*\
  !*** ./node_modules/react-motion/lib/mapToZero.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// currently used to initiate the velocity style object to 0


exports.__esModule = true;
exports['default'] = mapToZero;

function mapToZero(obj) {
  var ret = {};
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      ret[key] = 0;
    }
  }
  return ret;
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-motion/lib/mergeDiff.js":
/*!****************************************************!*\
  !*** ./node_modules/react-motion/lib/mergeDiff.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// core keys merging algorithm. If previous render's keys are [a, b], and the
// next render's [c, b, d], what's the final merged keys and ordering?

// - c and a must both be before b
// - b before d
// - ordering between a and c ambiguous

// this reduces to merging two partially ordered lists (e.g. lists where not
// every item has a definite ordering, like comparing a and c above). For the
// ambiguous ordering we deterministically choose to place the next render's
// item after the previous'; so c after a

// this is called a topological sorting. Except the existing algorithms don't
// work well with js bc of the amount of allocation, and isn't optimized for our
// current use-case bc the runtime is linear in terms of edges (see wiki for
// meaning), which is huge when two lists have many common elements


exports.__esModule = true;
exports['default'] = mergeDiff;

function mergeDiff(prev, next, onRemove) {
  // bookkeeping for easier access of a key's index below. This is 2 allocations +
  // potentially triggering chrome hash map mode for objs (so it might be faster

  var prevKeyIndex = {};
  for (var i = 0; i < prev.length; i++) {
    prevKeyIndex[prev[i].key] = i;
  }
  var nextKeyIndex = {};
  for (var i = 0; i < next.length; i++) {
    nextKeyIndex[next[i].key] = i;
  }

  // first, an overly elaborate way of merging prev and next, eliminating
  // duplicates (in terms of keys). If there's dupe, keep the item in next).
  // This way of writing it saves allocations
  var ret = [];
  for (var i = 0; i < next.length; i++) {
    ret[i] = next[i];
  }
  for (var i = 0; i < prev.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(nextKeyIndex, prev[i].key)) {
      // this is called my TM's `mergeAndSync`, which calls willLeave. We don't
      // merge in keys that the user desires to kill
      var fill = onRemove(i, prev[i]);
      if (fill != null) {
        ret.push(fill);
      }
    }
  }

  // now all the items all present. Core sorting logic to have the right order
  return ret.sort(function (a, b) {
    var nextOrderA = nextKeyIndex[a.key];
    var nextOrderB = nextKeyIndex[b.key];
    var prevOrderA = prevKeyIndex[a.key];
    var prevOrderB = prevKeyIndex[b.key];

    if (nextOrderA != null && nextOrderB != null) {
      // both keys in next
      return nextKeyIndex[a.key] - nextKeyIndex[b.key];
    } else if (prevOrderA != null && prevOrderB != null) {
      // both keys in prev
      return prevKeyIndex[a.key] - prevKeyIndex[b.key];
    } else if (nextOrderA != null) {
      // key a in next, key b in prev

      // how to determine the order between a and b? We find a "pivot" (term
      // abuse), a key present in both prev and next, that is sandwiched between
      // a and b. In the context of our above example, if we're comparing a and
      // d, b's (the only) pivot
      for (var i = 0; i < next.length; i++) {
        var pivot = next[i].key;
        if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
          continue;
        }

        if (nextOrderA < nextKeyIndex[pivot] && prevOrderB > prevKeyIndex[pivot]) {
          return -1;
        } else if (nextOrderA > nextKeyIndex[pivot] && prevOrderB < prevKeyIndex[pivot]) {
          return 1;
        }
      }
      // pluggable. default to: next bigger than prev
      return 1;
    }
    // prevOrderA, nextOrderB
    for (var i = 0; i < next.length; i++) {
      var pivot = next[i].key;
      if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
        continue;
      }
      if (nextOrderB < nextKeyIndex[pivot] && prevOrderA > prevKeyIndex[pivot]) {
        return 1;
      } else if (nextOrderB > nextKeyIndex[pivot] && prevOrderA < prevKeyIndex[pivot]) {
        return -1;
      }
    }
    // pluggable. default to: next bigger than prev
    return -1;
  });
}

module.exports = exports['default'];
// to loop through and find a key's index each time), but I no longer care

/***/ }),

/***/ "./node_modules/react-motion/lib/presets.js":
/*!**************************************************!*\
  !*** ./node_modules/react-motion/lib/presets.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = {
  noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
  gentle: { stiffness: 120, damping: 14 },
  wobbly: { stiffness: 180, damping: 12 },
  stiff: { stiffness: 210, damping: 20 }
};
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-motion/lib/react-motion.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-motion/lib/react-motion.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

var _Motion = __webpack_require__(/*! ./Motion */ "./node_modules/react-motion/lib/Motion.js");

exports.Motion = _interopRequire(_Motion);

var _StaggeredMotion = __webpack_require__(/*! ./StaggeredMotion */ "./node_modules/react-motion/lib/StaggeredMotion.js");

exports.StaggeredMotion = _interopRequire(_StaggeredMotion);

var _TransitionMotion = __webpack_require__(/*! ./TransitionMotion */ "./node_modules/react-motion/lib/TransitionMotion.js");

exports.TransitionMotion = _interopRequire(_TransitionMotion);

var _spring = __webpack_require__(/*! ./spring */ "./node_modules/react-motion/lib/spring.js");

exports.spring = _interopRequire(_spring);

var _presets = __webpack_require__(/*! ./presets */ "./node_modules/react-motion/lib/presets.js");

exports.presets = _interopRequire(_presets);

var _stripStyle = __webpack_require__(/*! ./stripStyle */ "./node_modules/react-motion/lib/stripStyle.js");

exports.stripStyle = _interopRequire(_stripStyle);

// deprecated, dummy warning function

var _reorderKeys = __webpack_require__(/*! ./reorderKeys */ "./node_modules/react-motion/lib/reorderKeys.js");

exports.reorderKeys = _interopRequire(_reorderKeys);

/***/ }),

/***/ "./node_modules/react-motion/lib/reorderKeys.js":
/*!******************************************************!*\
  !*** ./node_modules/react-motion/lib/reorderKeys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = reorderKeys;

var hasWarned = false;

function reorderKeys() {
  if (false) {}
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-motion/lib/shouldStopAnimation.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-motion/lib/shouldStopAnimation.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// usage assumption: currentStyle values have already been rendered but it says
// nothing of whether currentStyle is stale (see unreadPropStyle)


exports.__esModule = true;
exports['default'] = shouldStopAnimation;

function shouldStopAnimation(currentStyle, style, currentVelocity) {
  for (var key in style) {
    if (!Object.prototype.hasOwnProperty.call(style, key)) {
      continue;
    }

    if (currentVelocity[key] !== 0) {
      return false;
    }

    var styleValue = typeof style[key] === 'number' ? style[key] : style[key].val;
    // stepper will have already taken care of rounding precision errors, so
    // won't have such thing as 0.9999 !=== 1
    if (currentStyle[key] !== styleValue) {
      return false;
    }
  }

  return true;
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-motion/lib/spring.js":
/*!*************************************************!*\
  !*** ./node_modules/react-motion/lib/spring.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = spring;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _presets = __webpack_require__(/*! ./presets */ "./node_modules/react-motion/lib/presets.js");

var _presets2 = _interopRequireDefault(_presets);

var defaultConfig = _extends({}, _presets2['default'].noWobble, {
  precision: 0.01
});

function spring(val, config) {
  return _extends({}, defaultConfig, config, { val: val });
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-motion/lib/stepper.js":
/*!**************************************************!*\
  !*** ./node_modules/react-motion/lib/stepper.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// stepper is used a lot. Saves allocation to return the same array wrapper.
// This is fine and danger-free against mutations because the callsite
// immediately destructures it and gets the numbers inside without passing the


exports.__esModule = true;
exports["default"] = stepper;

var reusedTuple = [0, 0];

function stepper(secondPerFrame, x, v, destX, k, b, precision) {
  // Spring stiffness, in kg / s^2

  // for animations, destX is really spring length (spring at rest). initial
  // position is considered as the stretched/compressed position of a spring
  var Fspring = -k * (x - destX);

  // Damping, in kg / s
  var Fdamper = -b * v;

  // usually we put mass here, but for animation purposes, specifying mass is a
  // bit redundant. you could simply adjust k and b accordingly
  // let a = (Fspring + Fdamper) / mass;
  var a = Fspring + Fdamper;

  var newV = v + a * secondPerFrame;
  var newX = x + newV * secondPerFrame;

  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
    reusedTuple[0] = destX;
    reusedTuple[1] = 0;
    return reusedTuple;
  }

  reusedTuple[0] = newX;
  reusedTuple[1] = newV;
  return reusedTuple;
}

module.exports = exports["default"];
// array reference around.

/***/ }),

/***/ "./node_modules/react-motion/lib/stripStyle.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-motion/lib/stripStyle.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// turn {x: {val: 1, stiffness: 1, damping: 2}, y: 2} generated by
// `{x: spring(1, {stiffness: 1, damping: 2}), y: 2}` into {x: 1, y: 2}



exports.__esModule = true;
exports['default'] = stripStyle;

function stripStyle(style) {
  var ret = {};
  for (var key in style) {
    if (!Object.prototype.hasOwnProperty.call(style, key)) {
      continue;
    }
    ret[key] = typeof style[key] === 'number' ? style[key] : style[key].val;
  }
  return ret;
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-text-loop/es/components/TextLoop.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-text-loop/es/components/TextLoop.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-motion */ "./node_modules/react-motion/lib/react-motion.js");
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cxs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cxs */ "./node_modules/cxs/dist/index.js");
/* harmony import */ var cxs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cxs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./node_modules/react-text-loop/es/utils.js");
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-fast-compare */ "./node_modules/react-fast-compare/index.js");
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_5__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var TextLoop =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(TextLoop, _React$PureComponent);

  function TextLoop(_props) {
    var _this;

    _this = _React$PureComponent.call(this, _props) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "willLeave", function () {
      var _this$getDimensions = _this.getDimensions(),
          height = _this$getDimensions.height;

      return {
        opacity: Object(react_motion__WEBPACK_IMPORTED_MODULE_1__["spring"])(_this.getOpacity(), _this.props.springConfig),
        translate: Object(react_motion__WEBPACK_IMPORTED_MODULE_1__["spring"])(-height, _this.props.springConfig)
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "willEnter", function () {
      var _this$getDimensions2 = _this.getDimensions(),
          height = _this$getDimensions2.height;

      return {
        opacity: _this.getOpacity(),
        translate: height
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "tick", function () {
      _this.setState(function (state, props) {
        var currentWordIndex = (state.currentWordIndex + 1) % state.elements.length;
        var currentEl = state.elements[currentWordIndex];
        var updatedState = {
          currentWordIndex: currentWordIndex,
          currentEl: currentEl,
          wordCount: (state.wordCount + 1) % 1000,
          // just a safe value to avoid infinite counts,
          currentInterval: Array.isArray(props.interval) ? props.interval[currentWordIndex % props.interval.length] : props.interval
        };

        if (props.onChange) {
          props.onChange(updatedState);
        }

        return updatedState;
      }, function () {
        if (_this.state.currentInterval > 0) {
          _this.clearTimeouts();

          _this.tickLoop = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["requestTimeout"])(_this.tick, _this.state.currentInterval);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "wrapperStyles", cxs__WEBPACK_IMPORTED_MODULE_2___default()(_objectSpread({}, _this.props.mask && {
      overflow: "hidden"
    }, {
      display: "inline-block",
      position: "relative",
      verticalAlign: "top"
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "elementStyles", cxs__WEBPACK_IMPORTED_MODULE_2___default()({
      display: "inline-block",
      left: 0,
      top: 0,
      whiteSpace: _this.props.noWrap ? "nowrap" : "normal"
    }));

    var elements = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(_props.children);
    _this.state = {
      elements: elements,
      currentEl: elements[0],
      currentWordIndex: 0,
      wordCount: 0,
      currentInterval: Array.isArray(_props.interval) ? _props.interval[0] : _props.interval
    };
    return _this;
  }

  var _proto = TextLoop.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    // Starts animation
    var delay = this.props.delay;
    var _this$state = this.state,
        currentInterval = _this$state.currentInterval,
        elements = _this$state.elements;

    if (currentInterval > 0 && elements.length > 1) {
      this.tickDelay = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["requestTimeout"])(function () {
        _this2.tickLoop = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["requestTimeout"])(_this2.tick, currentInterval);
      }, delay);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var _this3 = this;

    var _this$props = this.props,
        interval = _this$props.interval,
        children = _this$props.children,
        delay = _this$props.delay;
    var currentWordIndex = this.state.currentWordIndex;
    var currentInterval = Array.isArray(interval) ? interval[currentWordIndex % interval.length] : interval;

    if (prevState.currentInterval !== currentInterval) {
      this.clearTimeouts();

      if (currentInterval > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(children) > 1) {
        this.tickDelay = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["requestTimeout"])(function () {
          _this3.tickLoop = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["requestTimeout"])(_this3.tick, currentInterval);
        }, delay);
      }
    }

    if (!react_fast_compare__WEBPACK_IMPORTED_MODULE_5___default()(prevProps.children, children)) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        elements: react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(children)
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearTimeouts();
  };

  _proto.clearTimeouts = function clearTimeouts() {
    if (this.tickLoop != null) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_4__["clearRequestTimeout"])(this.tickLoop);
    }

    if (this.tickDelay != null) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_4__["clearRequestTimeout"])(this.tickDelay);
    }
  } // Fade out animation
  ;

  _proto.getOpacity = function getOpacity() {
    return this.props.fade ? 0 : 1;
  };

  _proto.getDimensions = function getDimensions() {
    if (this.wordBox == null) {
      return {
        width: "auto",
        height: "auto"
      };
    }

    return this.wordBox.getBoundingClientRect();
  };

  _proto.getTransitionMotionStyles = function getTransitionMotionStyles() {
    var springConfig = this.props.springConfig;
    var _this$state2 = this.state,
        wordCount = _this$state2.wordCount,
        currentEl = _this$state2.currentEl;
    return [{
      key: "step-" + wordCount,
      data: {
        currentEl: currentEl
      },
      style: {
        opacity: Object(react_motion__WEBPACK_IMPORTED_MODULE_1__["spring"])(1, springConfig),
        translate: Object(react_motion__WEBPACK_IMPORTED_MODULE_1__["spring"])(0, springConfig)
      }
    }];
  };

  _proto.render = function render() {
    var _this4 = this;

    var _this$props$className = this.props.className,
        className = _this$props$className === void 0 ? "" : _this$props$className;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.wrapperStyles + " " + className
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_motion__WEBPACK_IMPORTED_MODULE_1__["TransitionMotion"], {
      willLeave: this.willLeave,
      willEnter: this.willEnter,
      styles: this.getTransitionMotionStyles()
    }, function (interpolatedStyles) {
      var _this4$getDimensions = _this4.getDimensions(),
          height = _this4$getDimensions.height,
          width = _this4$getDimensions.width;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          transition: "width " + _this4.props.adjustingSpeed + "ms linear",
          height: height,
          width: width
        }
      }, interpolatedStyles.map(function (config) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _this4.elementStyles,
          ref: function ref(n) {
            _this4.wordBox = n;
          },
          key: config.key,
          style: {
            opacity: config.style.opacity,
            transform: "translateY(" + config.style.translate + "px)",
            position: _this4.wordBox == null ? "relative" : "absolute"
          }
        }, config.data.currentEl);
      }));
    }));
  };

  return TextLoop;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

TextLoop.propTypes = {
  interval: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array]).isRequired,
  delay: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
  adjustingSpeed: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
  springConfig: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,
  fade: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  mask: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  noWrap: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
TextLoop.defaultProps = {
  interval: 3000,
  delay: 0,
  adjustingSpeed: 150,
  springConfig: {
    stiffness: 340,
    damping: 30
  },
  fade: true,
  mask: false,
  noWrap: true
};
/* harmony default export */ __webpack_exports__["default"] = (TextLoop);

/***/ }),

/***/ "./node_modules/react-text-loop/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-text-loop/es/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TextLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TextLoop */ "./node_modules/react-text-loop/es/components/TextLoop.js");

/* harmony default export */ __webpack_exports__["default"] = (_components_TextLoop__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-text-loop/es/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/react-text-loop/es/utils.js ***!
  \**************************************************/
/*! exports provided: requestTimeout, clearRequestTimeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestTimeout", function() { return requestTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearRequestTimeout", function() { return clearRequestTimeout; });
var requestAnimFrame = function () {
  if (typeof window !== "undefined") {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (
    /* function */
    callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  }
}();
/*
 * Behaves the same as setTimeout except uses requestAnimationFrame() where possible for better performance
 * @param {function} fn The callback function
 * @param {int} delay The delay in milliseconds
 */


var requestTimeout = function requestTimeout(fn, delay) {
  if (!window.requestAnimationFrame && !window.webkitRequestAnimationFrame && !(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
  !window.oRequestAnimationFrame && !window.msRequestAnimationFrame) {
    return window.setTimeout(fn, delay);
  }

  var start = new Date().getTime();
  var handle = {};

  function loop() {
    var current = new Date().getTime();
    var delta = current - start;

    if (delta >= delay) {
      fn.call();
    } else {
      handle.value = requestAnimFrame(loop);
    }
  }

  handle.value = requestAnimFrame(loop);
  return handle;
};
/**
 * Behaves the same as clearTimeout except uses cancelRequestAnimationFrame() where possible for better performance
 * @param {int|object} fn The callback function
 */

var clearRequestTimeout = function clearRequestTimeout(handle) {
  return window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(handle.value) : window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(handle.value) :
  /* Support for legacy API */
  window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(handle.value) : window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(handle.value) : window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(handle.value) : clearTimeout(handle);
};

/***/ }),

/***/ "./node_modules/slugify/index.js":
/*!***************************************!*\
  !*** ./node_modules/slugify/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


;(function (name, root, factory) {
  if (true) {
    module.exports = factory()
    module.exports['default'] = factory()
  }
  /* istanbul ignore next */
  else {}
}('slugify', this, function () {
  /* eslint-disable */
  var charMap = JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","џ":"dz","Ґ":"G","ґ":"g","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\\"","”":"\\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₹":"indian rupee","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}')
  /* eslint-enable */

  function replace (string, options) {
    if (typeof string !== 'string') {
      throw new Error('slugify: string argument expected')
    }

    options = (typeof options === 'string')
      ? {replacement: options}
      : options || {}

    var slug = string.split('')
      .reduce(function (result, ch) {
        return result + (charMap[ch] || ch)
          // allowed
          .replace(options.remove || /[^\w\s$*_+~.()'"!\-:@]/g, '')
      }, '')
      // trim leading/trailing spaces
      .trim()
      // convert spaces
      .replace(/[-\s]+/g, options.replacement || '-')

    return options.lower ? slug.toLowerCase() : slug
  }

  replace.extend = function (customMap) {
    for (var key in customMap) {
      charMap[key] = customMap[key]
    }
  }

  return replace
}))


/***/ }),

/***/ "./plugins/gatsby-remark-header-custom-ids/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./plugins/gatsby-remark-header-custom-ids/gatsby-ssr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Glamor) {const React = __webpack_require__(/*! react */ "react");

const pluginDefaults = {
  className: `anchor`,
  icon: true,
  offsetY: 0
};

exports.onRenderBody = ({
  setHeadComponents
}, pluginOptions) => {
  const {
    className,
    icon,
    offsetY
  } = Object.assign(pluginDefaults, pluginOptions);
  const styles = `
    .${className} {
      float: left;
      padding-right: 4px;
      margin-left: -20px;
    }
    h1 .${className} svg,
    h2 .${className} svg,
    h3 .${className} svg,
    h4 .${className} svg,
    h5 .${className} svg,
    h6 .${className} svg {
      visibility: hidden;
    }
    h1:hover .${className} svg,
    h2:hover .${className} svg,
    h3:hover .${className} svg,
    h4:hover .${className} svg,
    h5:hover .${className} svg,
    h6:hover .${className} svg,
    h1 .${className}:focus svg,
    h2 .${className}:focus svg,
    h3 .${className}:focus svg,
    h4 .${className}:focus svg,
    h5 .${className}:focus svg,
    h6 .${className}:focus svg {
      visibility: visible;
    }
  `;
  const script = `
    document.addEventListener("DOMContentLoaded", function(event) {
      var hash = window.decodeURI(location.hash.replace('#', ''))
      if (hash !== '') {
        var element = document.getElementById(hash)
        if (element) {
          var offset = element.offsetTop
          // Wait for the browser to finish rendering before scrolling.
          setTimeout((function() {
            window.scrollTo(0, offset - ${offsetY})
          }), 0)
        }
      }
    })
  `;
  const style = icon ? Glamor.createElement("style", {
    key: "gatsby-remark-header-custom-ids-style",
    type: "text/css"
  }, styles) : undefined;
  return setHeadComponents([style, Glamor.createElement("script", {
    key: "gatsby-remark-header-custom-ids-script",
    dangerouslySetInnerHTML: {
      __html: script
    }
  })]);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/components/ButtonLink/ButtonLink.js":
/*!*************************************************!*\
  !*** ./src/components/ButtonLink/ButtonLink.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme */ "./src/theme.js");



var _style, _primaryStyle;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */




var ArrowSvg = function ArrowSvg(_ref) {
  var _ref$cssProps = _ref.cssProps,
      cssProps = _ref$cssProps === void 0 ? {} : _ref$cssProps;
  return Glamor.createElement("svg", {
    css: cssProps,
    height: "12",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 4.53657 8.69699"
  }, Glamor.createElement("path", {
    d: "\n        M.18254,8.697a.18149.18149,0,0,1-.12886-.31034L4.09723,4.34126.05369.29954a.18149.18149,\n        0,0,1,.2559-.2559L4.4838,4.21785a.18149.18149,0,0,1,0,.2559L.30958,8.648A.18149.18149,\n        0,0,1,.18254,8.697Z\n      ",
    fill: "currentColor"
  }));
};

var ButtonLink = function ButtonLink(_ref2) {
  var children = _ref2.children,
      type = _ref2.type,
      rest = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, ["children", "type"]);

  var typeStyle;

  switch (type) {
    case 'primary':
      typeStyle = primaryStyle;
      break;

    case 'secondary':
      typeStyle = secondaryStyle;
      break;
  }

  return Glamor.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], Object.assign({}, rest, {
    css: [style, typeStyle]
  }), children, type === 'secondary' && Glamor.createElement(ArrowSvg, {
    cssProps: {
      marginLeft: 10
    }
  }));
};

var style = (_style = {
  display: 'inline-block',
  fontSize: 16
}, _style[theme__WEBPACK_IMPORTED_MODULE_4__["media"].greaterThan('xlarge')] = {
  fontSize: 20
}, _style);
var primaryStyle = (_primaryStyle = {
  backgroundColor: theme__WEBPACK_IMPORTED_MODULE_4__["colors"].brand,
  color: theme__WEBPACK_IMPORTED_MODULE_4__["colors"].black,
  padding: '10px 25px',
  whiteSpace: 'nowrap',
  transition: 'background-color 0.2s ease-out'
}, _primaryStyle[theme__WEBPACK_IMPORTED_MODULE_4__["media"].greaterThan('xlarge')] = {
  paddingTop: 15,
  paddingBottom: 15
}, _primaryStyle[':hover'] = {
  backgroundColor: theme__WEBPACK_IMPORTED_MODULE_4__["colors"].white
}, _primaryStyle);
var secondaryStyle = {
  color: theme__WEBPACK_IMPORTED_MODULE_4__["colors"].brand,
  transition: 'color 0.2s ease-out',
  ':hover': {
    color: theme__WEBPACK_IMPORTED_MODULE_4__["colors"].white
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ButtonLink);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/components/ButtonLink/index.js":
/*!********************************************!*\
  !*** ./src/components/ButtonLink/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ButtonLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonLink */ "./src/components/ButtonLink/ButtonLink.js");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

/* harmony default export */ __webpack_exports__["default"] = (_ButtonLink__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Container/Container.js":
/*!***********************************************!*\
  !*** ./src/components/Container/Container.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme */ "./src/theme.js");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * 
 */



/**
 * This component wraps page content sections (eg header, footer, main).
 * It provides consistent margin and max width behavior.
 */
var Container = function Container(_ref) {
  var _ref2;

  var children = _ref.children;
  return Glamor.createElement("div", {
    css: (_ref2 = {
      paddingLeft: 20,
      paddingRight: 20,
      marginLeft: 'auto',
      marginRight: 'auto'
    }, _ref2[theme__WEBPACK_IMPORTED_MODULE_1__["media"].greaterThan('medium')] = {
      width: '90%'
    }, _ref2[theme__WEBPACK_IMPORTED_MODULE_1__["media"].size('xxlarge')] = {
      maxWidth: 1260
    }, _ref2)
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Container);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/components/Container/index.js":
/*!*******************************************!*\
  !*** ./src/components/Container/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ "./src/components/Container/Container.js");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

/* harmony default export */ __webpack_exports__["default"] = (_Container__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Flex/Flex.js":
/*!*************************************!*\
  !*** ./src/components/Flex/Flex.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var glamor_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js");
/* harmony import */ var glamor_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(glamor_react__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * 
 */


/**
 * Convenience component for declaring a flexbox layout.
 */
var Flex = function Flex(_ref) {
  var _ref$basis = _ref.basis,
      basis = _ref$basis === void 0 ? 'auto' : _ref$basis,
      children = _ref.children,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'row' : _ref$direction,
      _ref$grow = _ref.grow,
      grow = _ref$grow === void 0 ? 0 : _ref$grow,
      _ref$halign = _ref.halign,
      halign = _ref$halign === void 0 ? 'flex-start' : _ref$halign,
      _ref$shrink = _ref.shrink,
      shrink = _ref$shrink === void 0 ? 1 : _ref$shrink,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'div' : _ref$type,
      _ref$valign = _ref.valign,
      valign = _ref$valign === void 0 ? 'flex-start' : _ref$valign,
      rest = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["basis", "children", "direction", "grow", "halign", "shrink", "type", "valign"]);

  return Object(glamor_react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(type, Object.assign({
    css: {
      display: 'flex',
      flexDirection: direction,
      flexGrow: grow,
      flexShrink: shrink,
      flexBasis: basis,
      justifyContent: direction === 'row' ? halign : valign,
      alignItems: direction === 'row' ? valign : halign
    }
  }, rest), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Flex);

/***/ }),

/***/ "./src/components/Flex/index.js":
/*!**************************************!*\
  !*** ./src/components/Flex/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Flex */ "./src/components/Flex/Flex.js");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

/* harmony default export */ __webpack_exports__["default"] = (_Flex__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme */ "./src/theme.js");


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * 
 */



var Header = function Header(_ref) {
  var children = _ref.children;
  return Glamor.createElement("h1", {
    css: Object.assign({
      color: theme__WEBPACK_IMPORTED_MODULE_2__["colors"].dark,
      marginRight: '5%'
    }, theme__WEBPACK_IMPORTED_MODULE_2__["fonts"].header)
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/components/Header/Header.js");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

/* harmony default export */ __webpack_exports__["default"] = (_Header__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Layout/Layout.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/Layout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "core-js/modules/es6.regexp.match");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_patchDOMForGoogleTranslate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/patchDOMForGoogleTranslate */ "./src/utils/patchDOMForGoogleTranslate.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Flex */ "./src/components/Flex/index.js");
/* harmony import */ var components_LayoutFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/LayoutFooter */ "./src/components/LayoutFooter/index.js");
/* harmony import */ var components_LayoutHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/LayoutHeader */ "./src/components/LayoutHeader/index.js");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! theme */ "./src/theme.js");



/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * 
 */






Object(utils_patchDOMForGoogleTranslate__WEBPACK_IMPORTED_MODULE_2__["default"])();

var Template =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Template, _Component);

  function Template() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Template.prototype;

  _proto.render = function render() {
    var _ref;

    var _this$props = this.props,
        children = _this$props.children,
        location = _this$props.location; // TODO - is there a better way to check if we need we have a sidebar?

    var layoutHasSidebar = false;

    if (location.pathname.match( // /^\/(docs|tutorial|community|blog|contributing|warnings)/,
    /^\/(docs|blog)/)) {
      layoutHasSidebar = true;
    }

    return Glamor.createElement("div", {
      css: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 40px)'
      }
    }, Glamor.createElement(components_LayoutHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
      location: location
    }), Glamor.createElement(components_Flex__WEBPACK_IMPORTED_MODULE_4__["default"], {
      direction: "column",
      shrink: "0",
      grow: "1",
      valign: "stretch",
      css: (_ref = {
        flex: '1 0 auto',
        marginTop: 60
      }, _ref[theme__WEBPACK_IMPORTED_MODULE_7__["media"].between('medium', 'large')] = {
        marginTop: 50
      }, _ref[theme__WEBPACK_IMPORTED_MODULE_7__["media"].lessThan('medium')] = {
        marginTop: 40
      }, _ref)
    }, children), Glamor.createElement(components_LayoutFooter__WEBPACK_IMPORTED_MODULE_5__["default"], {
      layoutHasSidebar: layoutHasSidebar
    }));
  };

  return Template;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Template);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout */ "./src/components/Layout/Layout.js");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

/* harmony default export */ __webpack_exports__["default"] = (_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/LayoutFooter/ExternalFooterLink.js":
/*!***********************************************************!*\
  !*** ./src/components/LayoutFooter/ExternalFooterLink.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme */ "./src/theme.js");
/* harmony import */ var templates_components_ExternalLinkSvg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! templates/components/ExternalLinkSvg */ "./src/templates/components/ExternalLinkSvg/index.js");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * 
 */




var ExternalFooterLink = function ExternalFooterLink(_ref) {
  var children = _ref.children,
      href = _ref.href,
      target = _ref.target,
      rel = _ref.rel;
  return Glamor.createElement("a", {
    css: {
      lineHeight: 2,
      ':hover': {
        color: theme__WEBPACK_IMPORTED_MODULE_1__["colors"].brand
      }
    },
    href: href,
    target: target,
    rel: rel
  }, children, Glamor.createElement(templates_components_ExternalLinkSvg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cssProps: {
      verticalAlign: -2,
      display: 'inline-block',
      marginLeft: 5,
      color: theme__WEBPACK_IMPORTED_MODULE_1__["colors"].subtle
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ExternalFooterLink);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/components/LayoutFooter/Footer.js":
/*!***********************************************!*\
  !*** ./src/components/LayoutFooter/Footer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _ExternalFooterLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExternalFooterLink */ "./src/components/LayoutFooter/ExternalFooterLink.js");
/* harmony import */ var _FooterLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterLink */ "./src/components/LayoutFooter/FooterLink.js");
/* harmony import */ var _FooterNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FooterNav */ "./src/components/LayoutFooter/FooterNav.js");
/* harmony import */ var templates_components_MetaTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! templates/components/MetaTitle */ "./src/templates/components/MetaTitle/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme */ "./src/theme.js");
/* harmony import */ var utils_sectionList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/sectionList */ "./src/utils/sectionList.js");
/* harmony import */ var images_oss_logo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! images/oss_logo.png */ "./src/images/oss_logo.png");
/* harmony import */ var images_oss_logo_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(images_oss_logo_png__WEBPACK_IMPORTED_MODULE_8__);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * 
 */










var Footer = function Footer(_ref) {
  var _ref2, _ref3, _ref4, _ref5;

  var _ref$layoutHasSidebar = _ref.layoutHasSidebar,
      layoutHasSidebar = _ref$layoutHasSidebar === void 0 ? false : _ref$layoutHasSidebar;
  return Glamor.createElement("footer", {
    css: (_ref2 = {
      backgroundColor: theme__WEBPACK_IMPORTED_MODULE_6__["colors"].darker,
      color: theme__WEBPACK_IMPORTED_MODULE_6__["colors"].white,
      paddingTop: 10,
      paddingBottom: 50
    }, _ref2[theme__WEBPACK_IMPORTED_MODULE_6__["media"].size('sidebarFixed')] = {
      paddingTop: 40
    }, _ref2)
  }, Glamor.createElement(components_Container__WEBPACK_IMPORTED_MODULE_0__["default"], null, Glamor.createElement("div", {
    css: (_ref3 = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }, _ref3[theme__WEBPACK_IMPORTED_MODULE_6__["media"].between('small', 'medium')] = {
      paddingRight: layoutHasSidebar ? 240 : null
    }, _ref3[theme__WEBPACK_IMPORTED_MODULE_6__["media"].between('large', 'largerSidebar')] = {
      paddingRight: layoutHasSidebar ? 280 : null
    }, _ref3[theme__WEBPACK_IMPORTED_MODULE_6__["media"].between('largerSidebar', 'sidebarFixed', true)] = {
      paddingRight: layoutHasSidebar ? 380 : null
    }, _ref3)
  }, Glamor.createElement("div", {
    css: (_ref4 = {
      flexWrap: 'wrap',
      display: 'flex'
    }, _ref4[theme__WEBPACK_IMPORTED_MODULE_6__["media"].lessThan('large')] = {
      width: '100%'
    }, _ref4[theme__WEBPACK_IMPORTED_MODULE_6__["media"].greaterThan('xlarge')] = {
      width: 'calc(100% / 3 * 2)',
      paddingLeft: 40
    }, _ref4)
  }, Glamor.createElement(_FooterNav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    layoutHasSidebar: layoutHasSidebar
  }, Glamor.createElement(templates_components_MetaTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onDark: true
  }, "Docs"), utils_sectionList__WEBPACK_IMPORTED_MODULE_7__["sectionListDocs"].map(function (section) {
    var defaultItem = section.items[0];
    return Glamor.createElement(_FooterLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      to: "/docs/" + defaultItem.id + ".html",
      key: section.title
    }, section.title);
  })), Glamor.createElement(_FooterNav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    layoutHasSidebar: layoutHasSidebar
  }, Glamor.createElement(templates_components_MetaTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onDark: true
  }, "External Links"), Glamor.createElement(_ExternalFooterLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "https://github.com/packem/packem",
    target: "_blank",
    rel: "noopener"
  }, "GitHub"), Glamor.createElement(_ExternalFooterLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "https://twitter.com/packem_bundler",
    target: "_blank",
    rel: "noopener"
  }, "Twitter"), Glamor.createElement(_ExternalFooterLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "https://gitter.im/packem_bundler/community",
    target: "_blank",
    rel: "noopener"
  }, "Gitter Chat"))), Glamor.createElement("section", {
    css: (_ref5 = {
      paddingTop: 40,
      display: 'block !important'
    }, _ref5[theme__WEBPACK_IMPORTED_MODULE_6__["media"].greaterThan('xlarge')] = {
      width: 'calc(100% / 3)',
      order: -1
    }, _ref5[theme__WEBPACK_IMPORTED_MODULE_6__["media"].greaterThan('large')] = {
      order: -1,
      width: layoutHasSidebar ? null : 'calc(100% / 3)'
    }, _ref5[theme__WEBPACK_IMPORTED_MODULE_6__["media"].lessThan('large')] = {
      textAlign: 'center',
      width: '100%',
      paddingTop: 40
    }, _ref5)
  }, Glamor.createElement("p", {
    css: {
      color: theme__WEBPACK_IMPORTED_MODULE_6__["colors"].subtleOnDark,
      paddingTop: 15
    }
  }, "Copyright \xA9 " + new Date().getFullYear() + " Packem.")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/components/LayoutFooter/FooterLink.js":
/*!***************************************************!*\
  !*** ./src/components/LayoutFooter/FooterLink.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme */ "./src/theme.js");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * 
 */




var FooterLink = function FooterLink(_ref) {
  var children = _ref.children,
      target = _ref.target,
      to = _ref.to;
  return Glamor.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    css: {
      lineHeight: 2,
      ':hover': {
        color: theme__WEBPACK_IMPORTED_MODULE_2__["colors"].brand
      }
    },
    to: to,
    target: target
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (FooterLink);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/components/LayoutFooter/FooterNav.js":
/*!**************************************************!*\
  !*** ./src/components/LayoutFooter/FooterNav.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme */ "./src/theme.js");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * 
 */



var FooterNav = function FooterNav(_ref) {
  var _ref2;

  var children = _ref.children,
      title = _ref.title,
      _ref$layoutHasSidebar = _ref.layoutHasSidebar,
      layoutHasSidebar = _ref$layoutHasSidebar === void 0 ? false : _ref$layoutHasSidebar;
  return Glamor.createElement("div", {
    css: (_ref2 = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '50%',
      paddingTop: 40
    }, _ref2[theme__WEBPACK_IMPORTED_MODULE_1__["media"].size('sidebarFixed')] = {
      paddingTop: 0,
      width: '25%'
    }, _ref2)
  }, Glamor.createElement("div", {
    css: {
      display: 'inline-flex',
      flexDirection: 'column'
    }
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (FooterNav);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/components/LayoutFooter/index.js":
/*!**********************************************!*\
  !*** ./src/components/LayoutFooter/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ "./src/components/LayoutFooter/Footer.js");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

/* harmony default export */ __webpack_exports__["default"] = (_Footer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/LayoutHeader/Header.js":
/*!***********************************************!*\
  !*** ./src/components/LayoutHeader/Header.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony import */ var core_js_modules_es6_string_small__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.small */ "core-js/modules/es6.string.small");
/* harmony import */ var core_js_modules_es6_string_small__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_small__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "core-js/modules/es7.array.includes");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "core-js/modules/es6.string.includes");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _HeaderLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderLink */ "./src/components/LayoutHeader/HeaderLink.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! theme */ "./src/theme.js");
/* harmony import */ var site_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! site-constants */ "./src/site-constants.js");
/* harmony import */ var templates_components_ExternalLinkSvg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! templates/components/ExternalLinkSvg */ "./src/templates/components/ExternalLinkSvg/index.js");
/* harmony import */ var react_github_btn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-github-btn */ "./node_modules/react-github-btn/index.js");
/* harmony import */ var icons_packem_logo_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! icons/packem-logo.png */ "./src/icons/packem-logo.png");
/* harmony import */ var icons_packem_logo_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(icons_packem_logo_png__WEBPACK_IMPORTED_MODULE_12__);





/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * 
 */






 // import DocSearch from './DocSearch';




var Header = function Header(_ref) {
  var _ref2, _ref3, _ref4, _ref5, _Object$assign;

  var location = _ref.location;
  return Glamor.createElement("header", {
    css: {
      backgroundColor: theme__WEBPACK_IMPORTED_MODULE_8__["colors"].darker,
      color: theme__WEBPACK_IMPORTED_MODULE_8__["colors"].white,
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      top: 0,
      left: 0
    }
  }, Glamor.createElement(components_Container__WEBPACK_IMPORTED_MODULE_4__["default"], null, Glamor.createElement("div", {
    css: (_ref2 = {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      height: 60
    }, _ref2[theme__WEBPACK_IMPORTED_MODULE_8__["media"].between('small', 'large')] = {
      height: 50
    }, _ref2[theme__WEBPACK_IMPORTED_MODULE_8__["media"].lessThan('small')] = {
      height: 40
    }, _ref2)
  }, Glamor.createElement(gatsby__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    css: (_ref3 = {
      display: 'flex',
      marginRight: 10,
      height: '100%',
      alignItems: 'center',
      color: theme__WEBPACK_IMPORTED_MODULE_8__["colors"].brand,
      ':focus': {
        outline: 0,
        color: theme__WEBPACK_IMPORTED_MODULE_8__["colors"].white
      }
    }, _ref3[theme__WEBPACK_IMPORTED_MODULE_8__["media"].greaterThan('small')] = {
      width: 'calc(100% / 6)'
    }, _ref3[theme__WEBPACK_IMPORTED_MODULE_8__["media"].lessThan('small')] = {
      flex: '0 0 auto'
    }, _ref3),
    to: "/"
  }, Glamor.createElement("img", {
    src: icons_packem_logo_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "",
    height: "25"
  }), Glamor.createElement("span", {
    css: (_ref4 = {
      color: 'inherit',
      marginLeft: 10,
      fontWeight: 700,
      fontSize: 20,
      lineHeight: '20px'
    }, _ref4[theme__WEBPACK_IMPORTED_MODULE_8__["media"].lessThan('large')] = {
      fontSize: 16,
      marginTop: 1
    }, _ref4[theme__WEBPACK_IMPORTED_MODULE_8__["media"].lessThan('small')] = {
      // Visually hidden
      position: 'absolute',
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)',
      height: 1,
      width: 1,
      margin: -1,
      padding: 0,
      border: 0
    }, _ref4)
  }, "Packem")), Glamor.createElement("nav", {
    css: (_ref5 = {
      flex: '1',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      overflowX: 'auto',
      overflowY: 'hidden',
      WebkitOverflowScrolling: 'touch',
      height: '100%',
      // Hide horizontal scrollbar
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      '::-webkit-scrollbar': {
        display: 'none'
      }
    }, _ref5[theme__WEBPACK_IMPORTED_MODULE_8__["media"].size('xsmall')] = {
      flexGrow: '1',
      width: 'auto'
    }, _ref5[theme__WEBPACK_IMPORTED_MODULE_8__["media"].greaterThan('xlarge')] = {
      width: null
    }, _ref5[theme__WEBPACK_IMPORTED_MODULE_8__["media"].lessThan('small')] = {
      maskImage: 'linear-gradient(to right, transparent, black 20px, black 90%, transparent)'
    }, _ref5)
  }, Glamor.createElement(_HeaderLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isActive: location.pathname.includes('/docs/'),
    title: "Docs",
    to: "/docs/getting-started.html"
  })), Glamor.createElement("div", {
    css: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      width: 'auto' //[media.lessThan('medium')]: {
      //width: 'auto',
      //},
      //[media.greaterThan('large')]: {
      //width: 'calc(100% / 4)',
      //},

    }
  }, Glamor.createElement(gatsby__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    css: Object.assign({
      padding: '5px 10px',
      marginRight: 10,
      whiteSpace: 'nowrap'
    }, theme__WEBPACK_IMPORTED_MODULE_8__["fonts"].small, (_Object$assign = {
      ':hover': {
        color: theme__WEBPACK_IMPORTED_MODULE_8__["colors"].brand
      },
      ':focus': {
        outline: 0,
        backgroundColor: theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lighter,
        borderRadius: 15
      }
    }, _Object$assign[theme__WEBPACK_IMPORTED_MODULE_8__["media"].lessThan('medium')] = {
      display: 'none'
    }, _Object$assign)),
    to: "/versions"
  }, "v", site_constants__WEBPACK_IMPORTED_MODULE_9__["version"]), Glamor.createElement(react_github_btn__WEBPACK_IMPORTED_MODULE_11__["default"], {
    href: "https://github.com/packem/packem",
    "data-icon": "octicon-star",
    "data-size": "large",
    "data-show-count": "true",
    "aria-label": "Star packem/packem on GitHub"
  }, "Star")))));
};

var LanguagesIcon = function LanguagesIcon() {
  return Glamor.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, Glamor.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), Glamor.createElement("path", {
    css: {
      fill: 'currentColor'
    },
    d: " M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/components/LayoutHeader/HeaderLink.js":
/*!***************************************************!*\
  !*** ./src/components/LayoutHeader/HeaderLink.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme */ "./src/theme.js");
var _style, _activeStyle, _activeAfterStyle;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * 
 */




var HeaderLink = function HeaderLink(_ref) {
  var isActive = _ref.isActive,
      title = _ref.title,
      to = _ref.to;
  return Glamor.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    css: [style, isActive && activeStyle],
    to: to
  }, title, isActive && Glamor.createElement("span", {
    css: activeAfterStyle
  }));
};

var style = (_style = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: theme__WEBPACK_IMPORTED_MODULE_2__["colors"].white,
  transition: 'color 0.2s ease-out',
  paddingLeft: 15,
  paddingRight: 15,
  fontWeight: 300,
  ':focus': {
    outline: 0,
    backgroundColor: theme__WEBPACK_IMPORTED_MODULE_2__["colors"].lighter,
    color: theme__WEBPACK_IMPORTED_MODULE_2__["colors"].white
  }
}, _style[theme__WEBPACK_IMPORTED_MODULE_2__["media"].size('xsmall')] = {
  paddingLeft: 8,
  paddingRight: 8
}, _style[theme__WEBPACK_IMPORTED_MODULE_2__["media"].between('small', 'medium')] = {
  paddingLeft: 10,
  paddingRight: 10
}, _style[theme__WEBPACK_IMPORTED_MODULE_2__["media"].greaterThan('xlarge')] = {
  paddingLeft: 20,
  paddingRight: 20,
  fontSize: 18,
  ':hover:not(:focus)': {
    color: theme__WEBPACK_IMPORTED_MODULE_2__["colors"].brand
  }
}, _style);
var activeStyle = (_activeStyle = {
  color: theme__WEBPACK_IMPORTED_MODULE_2__["colors"].brand
}, _activeStyle[theme__WEBPACK_IMPORTED_MODULE_2__["media"].greaterThan('small')] = {
  position: 'relative'
}, _activeStyle);
var activeAfterStyle = (_activeAfterStyle = {}, _activeAfterStyle[theme__WEBPACK_IMPORTED_MODULE_2__["media"].greaterThan('small')] = {
  position: 'absolute',
  bottom: -1,
  height: 4,
  background: theme__WEBPACK_IMPORTED_MODULE_2__["colors"].brand,
  left: 0,
  right: 0,
  zIndex: 1
}, _activeAfterStyle);
/* harmony default export */ __webpack_exports__["default"] = (HeaderLink);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/components/LayoutHeader/index.js":
/*!**********************************************!*\
  !*** ./src/components/LayoutHeader/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/components/LayoutHeader/Header.js");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

/* harmony default export */ __webpack_exports__["default"] = (_Header__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/MarkdownHeader/MarkdownHeader.js":
/*!*********************************************************!*\
  !*** ./src/components/MarkdownHeader/MarkdownHeader.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Flex */ "./src/components/Flex/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme */ "./src/theme.js");


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * 
 */




var MarkdownHeader = function MarkdownHeader(_ref) {
  var _Object$assign;

  var title = _ref.title;
  return Glamor.createElement(components_Flex__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "header",
    halign: "space-between",
    valign: "baseline"
  }, Glamor.createElement("h1", {
    css: Object.assign({
      color: theme__WEBPACK_IMPORTED_MODULE_3__["colors"].dark,
      marginBottom: 0,
      marginTop: 40
    }, theme__WEBPACK_IMPORTED_MODULE_3__["fonts"].header, (_Object$assign = {}, _Object$assign[theme__WEBPACK_IMPORTED_MODULE_3__["media"].size('medium')] = {
      marginTop: 60
    }, _Object$assign[theme__WEBPACK_IMPORTED_MODULE_3__["media"].greaterThan('large')] = {
      marginTop: 80
    }, _Object$assign))
  }, title));
};

/* harmony default export */ __webpack_exports__["default"] = (MarkdownHeader);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/components/MarkdownHeader/index.js":
/*!************************************************!*\
  !*** ./src/components/MarkdownHeader/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MarkdownHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MarkdownHeader */ "./src/components/MarkdownHeader/MarkdownHeader.js");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

/* harmony default export */ __webpack_exports__["default"] = (_MarkdownHeader__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/MarkdownPage/MarkdownPage.js":
/*!*****************************************************!*\
  !*** ./src/components/MarkdownPage/MarkdownPage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.link */ "core-js/modules/es6.string.link");
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "core-js/modules/es6.array.find");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "core-js/modules/es6.regexp.replace");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Container */ "./src/components/Container/index.js");
/* harmony import */ var components_Flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Flex */ "./src/components/Flex/index.js");
/* harmony import */ var components_MarkdownHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/MarkdownHeader */ "./src/components/MarkdownHeader/index.js");
/* harmony import */ var templates_components_NavigationFooter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! templates/components/NavigationFooter */ "./src/templates/components/NavigationFooter/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_StickyResponsiveSidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/StickyResponsiveSidebar */ "./src/components/StickyResponsiveSidebar/index.js");
/* harmony import */ var components_TitleAndMetaTags__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/TitleAndMetaTags */ "./src/components/TitleAndMetaTags/index.js");
/* harmony import */ var utils_findSectionForPath__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/findSectionForPath */ "./src/utils/findSectionForPath.js");
/* harmony import */ var utils_toCommaSeparatedList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! utils/toCommaSeparatedList */ "./src/utils/toCommaSeparatedList.js");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! theme */ "./src/theme.js");
/* harmony import */ var utils_createOgUrl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! utils/createOgUrl */ "./src/utils/createOgUrl.js");





/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * 
 */












var getPageById = function getPageById(sectionList, templateFile) {
  if (!templateFile) {
    return null;
  }

  var sectionItems = sectionList.map(function (section) {
    return section.items;
  });
  var flattenedSectionItems = [].concat.apply([], sectionItems);
  var linkId = templateFile.replace('.html', '');
  return flattenedSectionItems.find(function (item) {
    return item.id === linkId;
  });
};

var MarkdownPage = function MarkdownPage(_ref) {
  var _ref$authors = _ref.authors,
      authors = _ref$authors === void 0 ? [] : _ref$authors,
      createLink = _ref.createLink,
      date = _ref.date,
      enableScrollSync = _ref.enableScrollSync,
      ogDescription = _ref.ogDescription,
      location = _ref.location,
      markdownRemark = _ref.markdownRemark,
      sectionList = _ref.sectionList,
      _ref$titlePostfix = _ref.titlePostfix,
      titlePostfix = _ref$titlePostfix === void 0 ? '' : _ref$titlePostfix;
  var hasAuthors = authors.length > 0;
  var titlePrefix = markdownRemark.frontmatter.title || '';
  var prev = getPageById(sectionList, markdownRemark.frontmatter.prev);
  var next = getPageById(sectionList, markdownRemark.frontmatter.next);
  return Glamor.createElement(components_Flex__WEBPACK_IMPORTED_MODULE_5__["default"], {
    direction: "column",
    grow: "1",
    shrink: "0",
    halign: "stretch",
    css: {
      width: '100%',
      flex: '1 0 auto',
      position: 'relative',
      zIndex: 0
    }
  }, Glamor.createElement(components_TitleAndMetaTags__WEBPACK_IMPORTED_MODULE_10__["default"], {
    ogDescription: ogDescription,
    ogUrl: Object(utils_createOgUrl__WEBPACK_IMPORTED_MODULE_14__["default"])(markdownRemark.fields.slug),
    title: "" + titlePrefix + titlePostfix
  }), Glamor.createElement("div", {
    css: {
      flex: '1 0 auto'
    }
  }, Glamor.createElement(components_Container__WEBPACK_IMPORTED_MODULE_4__["default"], null, Glamor.createElement("div", {
    css: theme__WEBPACK_IMPORTED_MODULE_13__["sharedStyles"].articleLayout.container
  }, Glamor.createElement(components_Flex__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "article",
    direction: "column",
    grow: "1",
    halign: "stretch"
  }, Glamor.createElement(components_MarkdownHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: titlePrefix
  }), (date || hasAuthors) && Glamor.createElement("div", {
    css: {
      marginTop: 15
    }
  }, date, ' ', hasAuthors && Glamor.createElement("span", null, "by", ' ', Object(utils_toCommaSeparatedList__WEBPACK_IMPORTED_MODULE_12__["default"])(authors, function (author) {
    return Glamor.createElement("a", {
      css: theme__WEBPACK_IMPORTED_MODULE_13__["sharedStyles"].link,
      href: author.frontmatter.url,
      key: author.frontmatter.name
    }, author.frontmatter.name);
  }))), Glamor.createElement("div", {
    css: theme__WEBPACK_IMPORTED_MODULE_13__["sharedStyles"].articleLayout.content
  }, Glamor.createElement("div", {
    css: [theme__WEBPACK_IMPORTED_MODULE_13__["sharedStyles"].markdown],
    dangerouslySetInnerHTML: {
      __html: markdownRemark.html
    }
  }), markdownRemark.fields.path && Glamor.createElement("div", {
    css: {
      marginTop: 80
    }
  }, Glamor.createElement("a", {
    css: theme__WEBPACK_IMPORTED_MODULE_13__["sharedStyles"].articleLayout.editLink,
    href: "https://github.com/packem/packem.github.io/tree/dev/" + markdownRemark.fields.path
  }, "Edit this page")))), Glamor.createElement("div", {
    css: theme__WEBPACK_IMPORTED_MODULE_13__["sharedStyles"].articleLayout.sidebar
  }, Glamor.createElement(components_StickyResponsiveSidebar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    enableScrollSync: enableScrollSync,
    createLink: createLink,
    defaultActiveSection: Object(utils_findSectionForPath__WEBPACK_IMPORTED_MODULE_11__["default"])(location.pathname, sectionList),
    location: location,
    sectionList: sectionList
  }))))), (next || prev) && Glamor.createElement(templates_components_NavigationFooter__WEBPACK_IMPORTED_MODULE_7__["default"], {
    location: location,
    next: next,
    prev: prev
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MarkdownPage);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/components/MarkdownPage/index.js":
/*!**********************************************!*\
  !*** ./src/components/MarkdownPage/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MarkdownPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MarkdownPage */ "./src/components/MarkdownPage/MarkdownPage.js");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

/* harmony default export */ __webpack_exports__["default"] = (_MarkdownPage__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/StickyResponsiveSidebar/StickyResponsiveSidebar.js":
/*!***************************************************************************!*\
  !*** ./src/components/StickyResponsiveSidebar/StickyResponsiveSidebar.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Container */ "./src/components/Container/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var templates_components_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! templates/components/Sidebar */ "./src/templates/components/Sidebar/index.js");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme */ "./src/theme.js");
/* harmony import */ var templates_components_ChevronSvg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! templates/components/ChevronSvg */ "./src/templates/components/ChevronSvg/index.js");



/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * 
 */






var StickyResponsiveSidebar =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(StickyResponsiveSidebar, _Component);

  function StickyResponsiveSidebar(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._openNavMenu = function () {
      _this.setState({
        open: !_this.state.open
      });
    };

    _this._closeNavMenu = function () {
      _this.setState({
        open: false
      });
    };

    _this.state = {
      open: false
    };
    return _this;
  }

  var _proto = StickyResponsiveSidebar.prototype;

  _proto.render = function render() {
    var _ref, _ref2, _ref3, _ref4;

    var open = this.state.open;
    var smallScreenSidebarStyles = {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: 'fixed',
      backgroundColor: theme__WEBPACK_IMPORTED_MODULE_5__["colors"].white,
      zIndex: 2,
      height: '100vh',
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch',
      pointerEvents: open ? 'auto' : 'none'
    };
    var smallScreenBottomBarStyles = {
      display: 'inline-block'
    };
    var iconOffset = open ? 8 : -4;
    var menuOpacity = open ? 1 : 0;
    var menuOffset = open ? 0 : 40; // TODO: role and aria props for 'close' button?

    return Glamor.createElement("div", null, Glamor.createElement("div", {
      style: {
        opacity: menuOpacity,
        transition: 'opacity 0.5s ease'
      },
      css: (_ref = {}, _ref[theme__WEBPACK_IMPORTED_MODULE_5__["media"].lessThan('small')] = smallScreenSidebarStyles, _ref[theme__WEBPACK_IMPORTED_MODULE_5__["media"].greaterThan('medium')] = {
        marginRight: -999,
        paddingRight: 999,
        backgroundColor: '#f7f7f7'
      }, _ref[theme__WEBPACK_IMPORTED_MODULE_5__["media"].between('medium', 'sidebarFixed', true)] = {
        position: 'fixed',
        zIndex: 2,
        height: '100%'
      }, _ref[theme__WEBPACK_IMPORTED_MODULE_5__["media"].greaterThan('small')] = {
        position: 'fixed',
        zIndex: 2,
        height: 'calc(100vh - 60px)',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        marginRight: -999,
        paddingRight: 999,
        backgroundColor: '#f7f7f7',
        opacity: '1 !important'
      }, _ref[theme__WEBPACK_IMPORTED_MODULE_5__["media"].size('small')] = {
        height: 'calc(100vh - 40px)'
      }, _ref[theme__WEBPACK_IMPORTED_MODULE_5__["media"].between('medium', 'large')] = {
        height: 'calc(100vh - 50px)'
      }, _ref[theme__WEBPACK_IMPORTED_MODULE_5__["media"].greaterThan('sidebarFixed')] = {
        borderLeft: '1px solid #ececec'
      }, _ref)
    }, Glamor.createElement("div", {
      style: {
        transform: "translate(0px, " + menuOffset + "px)",
        transition: 'transform 0.5s ease'
      },
      css: (_ref2 = {
        marginTop: 60
      }, _ref2[theme__WEBPACK_IMPORTED_MODULE_5__["media"].size('xsmall')] = {
        marginTop: 40
      }, _ref2[theme__WEBPACK_IMPORTED_MODULE_5__["media"].between('small', 'medium')] = {
        marginTop: 0
      }, _ref2[theme__WEBPACK_IMPORTED_MODULE_5__["media"].between('medium', 'large')] = {
        marginTop: 50
      }, _ref2[theme__WEBPACK_IMPORTED_MODULE_5__["media"].greaterThan('small')] = {
        transform: 'none !important'
      }, _ref2)
    }, Glamor.createElement(templates_components_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({
      closeParentMenu: this._closeNavMenu
    }, this.props)))), Glamor.createElement("div", {
      css: (_ref3 = {
        backgroundColor: theme__WEBPACK_IMPORTED_MODULE_5__["colors"].darker,
        bottom: 44,
        // iOS Safari's inert "bottom 44px"
        color: theme__WEBPACK_IMPORTED_MODULE_5__["colors"].brand,
        display: 'none',
        // gets overriden at small screen sizes
        cursor: 'pointer',
        position: 'fixed',
        right: 20,
        zIndex: 3,
        borderRadius: '50%',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)'
      }, _ref3[theme__WEBPACK_IMPORTED_MODULE_5__["media"].lessThan('small')] = smallScreenBottomBarStyles, _ref3),
      onClick: this._openNavMenu,
      role: "button",
      tabIndex: 0
    }, Glamor.createElement(components_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, Glamor.createElement("div", {
      css: (_ref4 = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60
      }, _ref4[theme__WEBPACK_IMPORTED_MODULE_5__["media"].between('medium', 'large')] = {
        height: 50
      }, _ref4[theme__WEBPACK_IMPORTED_MODULE_5__["media"].lessThan('small')] = {
        height: 60,
        overflow: 'hidden',
        alignItems: 'flex-start'
      }, _ref4)
    }, Glamor.createElement("div", {
      css: {
        width: 20,
        height: 20,
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        color: theme__WEBPACK_IMPORTED_MODULE_5__["colors"].brand
      }
    }, Glamor.createElement(templates_components_ChevronSvg__WEBPACK_IMPORTED_MODULE_6__["default"], {
      size: 15,
      cssProps: {
        transform: "translate(2px, " + iconOffset + "px) rotate(180deg)",
        transition: 'transform 0.2s ease'
      }
    }), Glamor.createElement(templates_components_ChevronSvg__WEBPACK_IMPORTED_MODULE_6__["default"], {
      size: 15,
      cssProps: {
        transform: "translate(2px, " + (0 - iconOffset) + "px)",
        transition: 'transform 0.2s ease'
      }
    }))))));
  };

  return StickyResponsiveSidebar;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (StickyResponsiveSidebar);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/components/StickyResponsiveSidebar/index.js":
/*!*********************************************************!*\
  !*** ./src/components/StickyResponsiveSidebar/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StickyResponsiveSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StickyResponsiveSidebar */ "./src/components/StickyResponsiveSidebar/StickyResponsiveSidebar.js");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

/* harmony default export */ __webpack_exports__["default"] = (_StickyResponsiveSidebar__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/TitleAndMetaTags/TitleAndMetaTags.js":
/*!*************************************************************!*\
  !*** ./src/components/TitleAndMetaTags/TitleAndMetaTags.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * 
 */


var defaultDescription = 'A precompiled JavaScript module bundler';

var TitleAndMetaTags = function TitleAndMetaTags(_ref) {
  var title = _ref.title,
      ogDescription = _ref.ogDescription,
      ogUrl = _ref.ogUrl;
  return Glamor.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_0___default.a, {
    title: title
  }, Glamor.createElement("meta", {
    property: "og:title",
    content: title
  }), Glamor.createElement("meta", {
    property: "og:type",
    content: "website"
  }), ogUrl && Glamor.createElement("meta", {
    property: "og:url",
    content: ogUrl
  }), Glamor.createElement("meta", {
    property: "og:image",
    content: "/logo-og.png"
  }), Glamor.createElement("meta", {
    property: "og:description",
    content: ogDescription || defaultDescription
  }), Glamor.createElement("meta", {
    property: "fb:app_id",
    content: "623268441017527"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TitleAndMetaTags);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/components/TitleAndMetaTags/index.js":
/*!**************************************************!*\
  !*** ./src/components/TitleAndMetaTags/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TitleAndMetaTags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TitleAndMetaTags */ "./src/components/TitleAndMetaTags/TitleAndMetaTags.js");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

/* harmony default export */ __webpack_exports__["default"] = (_TitleAndMetaTags__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/html.js":
/*!*********************!*\
  !*** ./src/html.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var JS_NPM_URLS = ['https://unpkg.com/docsearch.js@2.4.1/dist/cdn/docsearch.min.js'];

var HTML =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(HTML, _React$Component);

  function HTML() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = HTML.prototype;

  _proto.render = function render() {
    return Glamor.createElement("html", Object.assign({
      lang: "en"
    }, this.props.htmlAttributes), Glamor.createElement("head", null, JS_NPM_URLS.map(function (url) {
      return Glamor.createElement("link", {
        key: url,
        rel: "preload",
        href: url,
        as: "script"
      });
    }), Glamor.createElement("meta", {
      charSet: "utf-8"
    }), Glamor.createElement("meta", {
      httpEquiv: "X-UA-Compatible",
      content: "IE=edge"
    }), Glamor.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }), Glamor.createElement("link", {
      rel: "apple-touch-icon",
      sizes: "57x57",
      href: "/favicons/apple-icon-57x57.png"
    }), Glamor.createElement("link", {
      rel: "apple-touch-icon",
      sizes: "60x60",
      href: "/favicons/apple-icon-60x60.png"
    }), Glamor.createElement("link", {
      rel: "apple-touch-icon",
      sizes: "72x72",
      href: "/favicons/apple-icon-72x72.png"
    }), Glamor.createElement("link", {
      rel: "apple-touch-icon",
      sizes: "76x76",
      href: "/favicons/apple-icon-76x76.png"
    }), Glamor.createElement("link", {
      rel: "apple-touch-icon",
      sizes: "114x114",
      href: "/favicons/apple-icon-114x114.png"
    }), Glamor.createElement("link", {
      rel: "apple-touch-icon",
      sizes: "120x120",
      href: "/favicons/apple-icon-120x120.png"
    }), Glamor.createElement("link", {
      rel: "apple-touch-icon",
      sizes: "144x144",
      href: "/favicons/apple-icon-144x144.png"
    }), Glamor.createElement("link", {
      rel: "apple-touch-icon",
      sizes: "152x152",
      href: "/favicons/apple-icon-152x152.png"
    }), Glamor.createElement("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicons/apple-icon-180x180.png"
    }), Glamor.createElement("link", {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      href: "/favicons/android-icon-192x192.png"
    }), Glamor.createElement("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicons/favicon-32x32.png"
    }), Glamor.createElement("link", {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      href: "/favicons/favicon-96x96.png"
    }), Glamor.createElement("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicons/favicon-16x16.png"
    }), Glamor.createElement("link", {
      rel: "manifest",
      href: "/favicons/manifest.json"
    }), Glamor.createElement("meta", {
      name: "msapplication-TileColor",
      content: "#ffffff"
    }), Glamor.createElement("meta", {
      name: "msapplication-TileImage",
      content: "/ms-icon-144x144.png"
    }), Glamor.createElement("meta", {
      name: "theme-color",
      content: "#ffffff"
    }), this.props.headComponents), Glamor.createElement("body", this.props.bodyAttributes, Glamor.createElement("div", {
      id: "___gatsby",
      dangerouslySetInnerHTML: {
        __html: this.props.body
      }
    }), this.props.postBodyComponents, JS_NPM_URLS.map(function (url) {
      return Glamor.createElement("script", {
        key: url,
        src: url
      });
    })));
  };

  return HTML;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/icons/packem-logo.png":
/*!***********************************!*\
  !*** ./src/icons/packem-logo.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAANqklEQVR4nOzdCbRdY3/H8S9JKhpTaRtFUZSV6qyGUhSJGlIqEomhqK6UKqtYaFVRQ1exSI1LqryGl/XyhmWI4Q0JryHGGBK8MSXEkDeTCHFzE5netfkfOffmnHvPsPf+P8/ev89ad+Wem3P2/of7O/vsvZ/n//TtnLTreGAIkpfVwDeO+17c4HM77etrYBGwAJgFzLU/ZwMf2XMKqy8wEngJ+CPvYkqkv+O+fyvFbX0LvAdMBV4DptnXghT34Wqdzkm7Jn9uDbwCDPQuSKK3AphpgXkIeAL40ruoVlUCktgBeAbYwrckKZgV9lHsLftKjjBvWoiCVx2QxFBgvF85UiLJecydwK32fZDW7fb4EStYJGvbABfY0eU54FRgM++iuut+BEn0AZ4H9vApSUpsKfAYMBZ40rsYahxBEiuBw4CPHeqRcusPDLMT+6eAtd6981YrIIn5wKFAR871iFTsZ1dWJwL7eBVRLyCJXwDH5FiLSC0H2NXV5CPXLnnvvKeAJB4G/j2nWkR6MhiYAvwI2DyvnfYWkMQVwBnAqhzqEenNPwAfABfmMSKhkYAkrgVOybgWkUZtAFwMvJP1iXyjAUn8P/BohrWINGs74EXgnKx20ExAEmfro5YEpg9wJTAO2DDtjTcbkHftjqdIaIYDLwO/m+ZGmw1I4v/snEQkNIPsI9dWaW2wlYBgV7UmpVWESIq2BO5u43e7i3Y2chhwbxpFiKRsH2CyncS3pZ2ALAFGAfe0W4RIBvawSVuD2tlIGoehk2wSjEhoNgF+BvxOqxtIIyCdNtFqUQrbEknb1jbP6ddaeXEqJzLAp8B/p7QtkbT9OXBzKy9MKyCJ64G3U9yeSJpOAEY3+6I0A7LM5pDMTXGbImm6vtmmJGkGJPEJsBfwfsrbFUnDesCYZl6QdkASM4C/ssn4IqEZaffwGpJFQLApu0MdW2yK9OQmYEAjT8wqINiU3VEZbl+kVcl5yEWNPDHLgGDzR/4t432ItOJM4Pd6e1LWAcHG6v88h/2INKMvcFVvT8ojIGQ540ukDcN6m7KbV0CmAOfltC+RZvQ4AiSvgCQuB/5VU3YlMEOAo+v9ZZ4BSVyn7ii5WmkjHGp9LfcuLiA31Gsh1Df/Wr7rjjLIriJIe4Zae87Vdf7+W2sIXUufqnsB69svyHr2s42tOdtA+3+1M/DHzitjZWlT4J/sDbyLWt3d8zIBONBr5wWxG/BqTvsaYCHZG9jfRks0dLMtEh/bDMQubzZ5f8SqdpStbydx6LCGCFcCB9kkpGG2VEYRbAv8XfcfegbkKxv9u9CxBmndYuABO6IMLkhTwbVaWnkGBBvYuFZqJTqT7Hwo+Qj2oHcxbRjcvTG2d0Cw5bd0j6QY3gKOAP7Qrgwt8S6oBYdXPwghINg9kp94FyGpeQc43c5VYutVMLT6QSgBwdrav+FdhKTqORvKEdMEur2qH4QUkGWW3s+9C5FUfQjsGVFrqN8Adq88CCkgidkWkno3tyROX9iag7E09fjbyjehBSTxpjWjk2JZCBwMzPEupAEHV74JMSDYCful3kVI6j4DRngX0YA/ATYj4IBga9CN8y5CUve83Y0PWR87bwo6IIljNRuxkM4HnvIuohcHEUFAlltIvvYuRFK1wtbgD3nI/f5EEBDsytZw7yIkdXOt83qotgcGxBCQxJPAWd5FSOoe8C6gB/2AQbEEJPG/wC3eRUiqQh8BvGNMAcGm6072LkJSM88+HYRq29gCstKGx6vvb3Hc5V1AD6I7giQW2CSdKd6FSCruC3jE75YxBgQb0LivDauWuC0BJnoXUcdWsQYE+w871KbuStzyajzRrI1iDgjWieJ/vIuQtoV6Trl+7AFJXGNLLUi8ZnkXUEf/IgRkma0YpO4o8Qp1KNG6RQgI1h3lCPX9jVawE+SKEpDEszbRRUcSSU2RApJ4Ajgg5HckqamfdwH1FC0g2JTdE72LkKZs4l1AHauLGJDEvcAl3kVIw7b1LqCOzqIGBFvF9EXvIqQhO3kXUMfSIgcErY0YDbc1OHqxpOgBmQxc5l2E9Gid7t0MAzK/6AFJXGAjRiVMu1da7ARoYRkCgjV+uN27CKnpNO8CejCnLAH51ppj3+xdiHQx0N68QjW1LAGp+OcCLRlWBEO9C+jF+2ULyCpN2Q1K6O2cppctIFin8UOBTu9CSm4rW/IsVHOBWWUMSGK6tRESP1c5rdPfqJco6FisRl1uMxIlf8mRY6R3Eb14jpIHZLF1R3nNu5CS2SWC9ShXVbo+ljkg2HoV6o6Sn9+3JaN/07uQXrwKzEQB+U6HLbn1hXchBTfQmlVv7F1IAx6rfKOAfO8juya/wruQgtrcjhzbeRfSoPGVbxSQNV4CRnsXUUA72aDRnb0LadDc6uXIFZCubgeu9i6iQPYGXonoyJF4ofqBArK2s4HHvYsogBHAw8BG3oU0qctQJAWktqPsCpc070+tecZPA55r3pNnqh+EfCfT0zfAccAEYD3vYgLXx+5t/I1dDQx1dmAjpgCvV/9AAakveScZFfgyYZ52sI6WJwM7eheTkouA1dU/UEB69iDwn5q2+53kRPsvgL+2m6t/4F1Qyj6svv9R4RGQfjbFMpZ7DjcBf2kjgEOzaZN3pTes+n6ZTSTDzkUHAP3tpDrZ5hbWjmcn4M8iuxLVijG1frhO56TcPzL2s+viMX9WlWJZAGxZ9YbxA4+rWMut0bSGdkgorqoVDhwv834OnOC0b5Fqi4Ab6v2l532QR4GTtGSBOBttA1Zr8r5ReJu6H4qj+3rrmeYdEOzqweveRUjprGjkzTmEgGA3aETyNKaRKdehBOQRDRCUHH0G/FcjTwwlIIm/B2Z7FyGlcEqjbZ9CCsgXEXS6kPhNtiuoDQkpINhYfJ2PSJaubObJoQUEWzrtRu8ipJBusElcDQsxIFhL/HHeRUih3A6c3uyLQg1I4h/VZFpS8obNW2layAFZbFNfNRRF2jELOKTeYMTehBwQbArkXd5FSLQW2FTgOa1uIPSAoNl80qJFwBDgvXY2EkNAPgDO8y5CotIB7Ae82e6GYggItlSBGrpJIxZYM4m2w0FEAcEaut3hXYQEbZrNn38qrQ3GFBBsEc73vYuQIN1tzTVSbfgXW0A6gWGtXrKTQloGnGmN/pakvfHYAoItdnOGdxEShHeB3YBrstpBjAHBelXd712EuLrfzjemZbmTWAOCNXzQIpzl02HdLkcBS7PeWcytR7+21VJfAH7buxjJ3BTgx3YynltPtZiPIIkZwPneRUimHrerU7sC1+XdcDD2gGCtg972LkJSN9HOMQ6pLOrvoQgBWQkcmcUlPsndUltuYoh9pXI3vB1FCAh28/BU7yKkZVPsXsY2dp9rondBFTGfpHd3B3CAdUeR8H0J3AmMtfsZQSpSQLChKHsC23sXIjVNt3FSjwBP213woBUtIB3AcODVAv7bYjTDAvG0XY6f5V1Qs4r4S5Sc2B1uTR9+3buYAlttH5M+BWbaL//nwCd2Azd5PK/7mn+xKWJAsLXmju+tc3eBrLKFiSqWdnuMrdxbmd+/ultnwU77WeVK4Ff2+iW2raXW9XIuMN9GzCbBWJjxv8tdUQOCjdV5AjjQu5AM7QtMtV/86s/zK9TsIh1FucxbzyXeBWSs097tF9sUgMqXwpGSogdkMnCrdxESr6IHBOvSGOx1dglbGQKy1O7OBn/NXcJThoBgN6gOsc/qIg0rS0CwG1Zaf0SaUqaAYHMLxngXIfEoW0CwlU1f8y5C4lDGgKwCRjS6Rp2UWxkDgq07Mta7CAlfWQOSuMJG/4rUVeaAzG111SEpjzIHBGshoy6NUlfZA5K4FrjUuwgJkwLyvQttjXaRLhSQNUba4isiP1BA1phtLfRFfqCAdDVBQ1GkmgKytnOskZmIAlLDKuBQ69QhJaeA1DbPWmFKySkg9T0MPOldhPhSQHp2LPBL7yLEjwLSs/m21JeUlALSu2c1FKW8FJDGaChKSSkgjTvcOpRLiSggjVsIHKT7I+WigDRnsc1nV+/bklBAmve6rdctJaCAtOYyHUXKQQFpzYfAf3gXIdlTQFp3BTDJuwjJlgLSnmOAOd5FSHYUkPbMAwbbbEQpIAWkfe8AB9dYNFMKQAFJxzTNHykmBSQ9NwIPeRch6VJA0nWiLaQvBaGApGsRcJR3EZIeBSR9L1vPXykABSQb5wKfeRch7VNAsjEbGKJVrOKngGTnXeBfvIuQ9igg2bpN5yNxU0CydzIww7sIaY0Ckr0O4EhghXch0jwFJB9TgbO8i5DmKSD5uR4Y712ENEcBydfRdjSRSCgg+erQpd+4KCD5mwzc4l2ENEYB8XEaMN27COmdAuJjmV36XeZdiPRMAfEz3Y4kEjAFxFdyLnKfdxFSnwLi73jgMe8ipDYFxF8ncBjwhnchsjYFJAwrgeHAN96FSFcKSDhmAqO9i5CuFJCw3KOlp8OigITnYu8CZA0FJDwaihIQBSRMpwLjvIsQBSRUy60B3bPehZSdAhK2o4EF3kWUmQISttnAcd5FlJkCEr4JwNXeRZSVAhKHc4Ep3kWUkQISh1XACGCJdyFlo4DE42NgrHcRZaOAxOUSdUXJlwISl6+sa7xW1c2JAhKf+bY+e2K1cy2Fp4DE6RngcmAD70KK7lcBAAD//8l+U/jke0BKAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/images/oss_logo.png":
/*!*********************************!*\
  !*** ./src/images/oss_logo.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAABaCAMAAADQMV5DAAAC3FBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+GTFYVAAAA9HRSTlMAG7O/KQR48v/+hA5W2+piObG8RBSU/fehIG7stSWl9nkIStbYU0XN4FUvrHoDcOi3OAuLmheOmRVm4rtBNbDucsnfXlDUJpuGB3vtM3+mHBKMEF3FSDzmaMLpWN7PRh2XkAaAo3X4riuiBctS3WAxtvFxEWTkxD4YbKirjzr7H/W5MIHKvrKtyCh3AUsNuKnHaxNOzPlMqqTGn++vniOTCSJJzhZAfKfAhSEuLWU/jSyDwU9DiJY3X9JzujJRRwIewzRnhzZZtFpNkldcvSRbPVQ7KicMDxoZkXagidWCb20K2dflYZ2KleGc0WrQ2vD8mH5p7f+VowAADPFJREFUeAHs0AN7Y2EYhOGJbVu1bdu22+3axp/fYurGyeX3PvZ3HuRFoVSpUU5Co9Xp9QajCaJszBb9NasN5SHsDv0dpwuidG4Pc3p93PoDKJEIhtgyHFFEuReLJ1ACkUwxZEUlLlVV86imFsUSdfWMqGtoBDU180xLK4oh2tr11NH54GSXnrp7UDDR28d6/QN4ZHCI54dHUBgxMMp0Y+N4ZmKS11ITEPmbmmY238ws0pmb5/X6BYj8NC7qaWkZGaxM62l1DSIP6xb22thEFlv9vGt7ByIX+y5j7fUih/0D3nl4BJHN8YmeTleQ09mLGG8+n4LI6OUrVnr9BnlRvNWT8R1EWuZDFnr/AXnbVPGZj58gnvv8hXm+fkM63yNTPUjnx08+9+s3xGOd7Xo6+YPnFv6u/rto1z6A28buPI7/7rBK/nPrXuaCnFaTlcej8eqC9CpbN6KxfcFk30pO4SFVinQjD73VReIWw0XyWc2RL+ICWHtN+1kuKe7l3L1nuvvikmx6771Mr8c8yhhAwAmUwCxT+HHlGzyXr0EP+fivfLwzpTwLvzsffW5k6/NwKXvjCySsNOAnr2pcvWZtV9f0Gau7H10Hv7taSXjuP9djRFnPahImL4Rf79S+7s54R1dlZWtHvH+gbsNn4Te4kYQ5CZQJbyDhvx5CgM8NbVybjs94sdI01zau6Wiur2mdhAArLBLq8Wen2pgAWZLxGiLhpU3wW/Du1Sur0m9t3/y5+15+eUvm0YG6dNXjWz+xDH7bNpOAsenkNqE8GmECOHG8hp4hoqWL4Ld8+9Klw812zfSE8zSvrcndtzsadu6C3+7HiegZjI0kzcX4m476efh8KlnfXpvu6J7R8i447lzR19CfHuru+0IvfGYVElWD199w1C9itI/9x9bK5viahi/tgceWvd374um1NZ37MdoeT9Ry1AOj+xxcPaMqXbn6pWr48EMb+9JVK1d/8jC87ilHHSvq+z4y0JHuan/8CAIlWrfWNw8vHWgpUlSW1DSVAZCZs6RqSQMOOaklZU9UruVXHIxrigH/ij8qk0sR9dNH69PxpTse+gAQbNZ/H+vOVb/3HcWIykwSNAbbhmBIZEkxsjR2+2FMskjiTlTVEltMhhGGTSR2BK14ozLdLkHUD8/paH5rzewlGMO6dzQcSw8f3R49qhGzNBmQFUtnkiSWkiQZAOQU6fLthyJtciSqmd+iWZYBzw7N0pl/xROV6Tp77aMeb+9q3tF6AiFO9n+kuf/oyYhRnb+j+Fk+qkoK8gxLAwwykWdasoiq3G4p6xbL79CcHXrwiogarWmEqKfMHc3H1p5GqKeqpHRdvCJiVE2EEliMJADMsuEmSXAuMEVUMpAngnt3GKQFroio0ZpGiLps9fBQwz0owOl9drxmcJxR3VQAVgoOVURVSIaLIS7LU4gBGmlwmDR6h2n5V5yoomkJorY0xM88BK/eLW1nz35+E4PXKw3xpf9TeFTfOyoGcDIAhyV57kxBI3dgDmiuLaKVd4cavCIuFE1LELXiPSv7G4/DjZ3bn01MmpTInnjbLLjJdbX19dsiPP09yURP/yW2zgWBNO+W/NWWZwcpASsiKtNJRiminj7funaYweW+eRcGM9U5mYuJRBvcLh3r33H2zxxVIjclKCppYSsiKtN1SypJ1Pse73r8/grAseex/U2ZE5dzFmeaBq94buJVOzqvHo8UVSE2OqqVGnWnws0XVQFi7h0seIWTqutMJbMUUTedb600X4Zj02MXm/ZnZ+6+dm3P/Kza1HPkDsDxT1LnjCWRohqkwsFIAmDH/Nm9UTkcKhliR+gKJ/HSSqFk6aP2ztvftHjuulPIWX9tcG7T4GUGx87IUWFJrn4iapK4N3tydFQTDjM2eocUvMJJZ2IDGSWPevx/m/bPfS9GsMVqU/bLRYzquXUMK184pjNnyQBsy3nIDBHVSnqKe3aopPpXPC/+LbnEUd8+OJi5cA2Of0hU91z/YDGjQrqdiFuaJIlSrveaKYBZuuy8gRJRk2KLuFLCqB2WGbTiRBW/HCtt1OezmRMz4XLjeiZ7X1GjMomkJOdJm1KQbjeyNA6WlCglHupWioPxFIm6GiEptqgmSQyuHbJqix1BK05UGJZZ2qg3E9WJm3C5lq2etCBCVF2FT1KnHIkDKRsC02KUY3PkKeIKPSkeqDFxBJUTEwuuHZbYEbgiW4bz+1mljfrIpOrENbgsv95zfVGEqMFkzhm8GDfgZhjw4lwevUNG2IqjlFHP5qJu8oyyhEYtC4u6J1GdXQeXTbmn/7ly1EhR5Wxm8XzPUPC86uyt6FEZ5xzFxDmX/1qifkW9mLkgw7Et0dMzaVbEqHIqlp/BVliRitr0J7GU/FcRFQuyGVVlzsvWi4ubLnNEi6pYlpnknCsSWSqKIEW6wjlPmkTaX0XUryYGT849sQvCBy7Oa7qY/Wy0qCaZDHlcpyQiS5KCPNkm5a8hKm5d6WlSLy+649Wv3Xp20uKm6oW7Ix2oIOXuyMwiVI3ZcBgMBSj90d+ShYNN1dcvX8997Wm6+Ni00Ud/j4wrqkoa3KK/EzdIRQQlOqTeMy/Rk6nu6anO9FxOLIHb148NSeM7pI5J8JDJdOYb/AMShiKGLAQxaMEVjbPw0RPfbIUBh8ycBaZqLGx0oyhRK+7v619qwG3WsuvZSdevT8pO4l+D2+m6Wnv68vFE5aTCyyQGQLMCBiTUGOkSkSmLR7b9pwVJIkp5ssqkwMc3SWHgNslGjqUAmkXEw0Y3ihIV3+iOn3kdvN5739lFi87dehe8nu6Of2R8H/ylLP+zNxk8IAGTUrJIm1+QpJHDKcXS4SZZBhwhkxTO54qkwSRTlUNHN4oTdf7G4c6GNhTg1X12la6OK6pkYzRLCx6QUCjpDFmIrSJuPpEGR/48isERPEnhj5qyOMJHN4oUtcJck65r/ThCsW/uSB8bfnBcUUnzd5YQPCCheW9m587xfeBiSES2xiEET1L4o4r7O3x0o0hRsUCvbd5nfwwhlg2dae6fk0GRovoHJJj3sz+JXM9uAx7cjBGRLaoHT1L4oorfMHx0o1hRseHe3IBa+7cMjOHWqsa6dHyrhmJEDRuQUMiJ4VwwmqymYhQT64GTFL6oIlj46EaxouKBe+ubO5Yufd17EQy9b7zaPdTc9e1LEKL+nxo4IGFyh0I8LKqgxkhF8CSFL6r4Pnx0o3hRsWLHi8NVte32hTcjyOLhGrsq/pGlb6oYb1TTCn7t7o9KHkZBUcFiMQRPUviiimvCRzeKGBW7L23Mjae/deM3vwifw4dqjuXG0ze+c9r4x9NVSsIrZTF/VMU3UlFYVCTJCJ6kCI4aOroRKep8jKZ+s+Yf03Hpxe+0wWPLmxr3xdP17f0JjPb5Qt5RxeDBLBPBAxL6RKJy4v5JCu8G3RM1ZHQjUtR18Kn4wlvba5uHGqTvMjgefF9dQ2d6aGDN974PH1bQe/+UN5XFggckFJInEFUl2T9J4XnXxcgTNWR0I1LUlW+D3y5tx5l42t46NHc98nqaa6ZXVe1ofOAm/Nr6C4gKkxTPIxUIHJBgrlMCWR4jqiQxT8LA2QpdxwjNGzVkdGPCSPj6LPide0/Nyqp0X83sk/Ldd3/8wJfaZ1SlH9ffwOH34E4SEF7VlpEnS6Jf8IAEd04BuGWPETVJMdXzbxQ0W6GScnvB+/QPGd2YsH4SpqxAgHnD7fXpeF3jdNO0l64ZTnfVdB15M/ySMRLOI5RGlD/5tynGIQQOSKhWTDHEOITJxogqDkBSKudciVEycJJC5DY5wE3LkDxRQ0Y3Ju76D0j4YQ/8vr9hTXdnVYddWWl3VA0N7GiZBb8vD5Dwox9jYp9RaRQ0IJFyj1SIQQvfYITAbYucK4MmKZyJDVNGykROfjAjdHQjglPbX09CRxv87th7pv2Y3TnUtbJ96TuWwG/XT0h47uCdwMQ+TdUoeEACzkL4OAYPm6TwjmeEj25Ete0lyvvp3fBb0PKz6TPWnP/Ev95AgO3PkTB0FyZMI/wtmjmDhJ8/jSAfv2fJrvUIkJ1DwsB+oBzV58i/k9BwAAU7d4yEf/kegpSj4lM7P0PCL9ahIK9+kvI2z0I0agx/s+QhyltVgXBPfoaEx9tQNpbMAAmTryCEupWEX15HWZhXppCw420YQ9taEl5oQQHKPvhuypv96v97yU8p7/7nUZiym10k/PM3EOhX/0ZC3WEUruzEVhJ+fR0+TWdI+M2PMT5lLb8lodKAx7U4Cb9bhXEr+9rvKe9b2+D4yh9+R0LzXZiIsuPHSHj9BoxY+BYSBpZhosqu/IaE7owYn6gj4Zk/oiwC5wiq9r3f/wXlHXwZZdFs+iYJD3+IhM7dKIvuxkfIofegrDj++HMSPtqCsqKp+JY44Hs7yorp5rHGZ1Gosv8DnDgXp7vdFQUAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/Container */ "./src/components/Container/index.js");
/* harmony import */ var components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Header */ "./src/components/Header/index.js");
/* harmony import */ var components_TitleAndMetaTags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/TitleAndMetaTags */ "./src/components/TitleAndMetaTags/index.js");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme */ "./src/theme.js");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * 
 */







var PageNotFound = function PageNotFound(_ref) {
  var location = _ref.location;
  return Glamor.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    location: location
  }, Glamor.createElement(components_Container__WEBPACK_IMPORTED_MODULE_0__["default"], null, Glamor.createElement("div", {
    css: theme__WEBPACK_IMPORTED_MODULE_5__["sharedStyles"].articleLayout.container
  }, Glamor.createElement("div", {
    css: theme__WEBPACK_IMPORTED_MODULE_5__["sharedStyles"].articleLayout.content
  }, Glamor.createElement(components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null, "Page Not Found"), Glamor.createElement(components_TitleAndMetaTags__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Packem - Page Not Found"
  }), Glamor.createElement("div", {
    css: theme__WEBPACK_IMPORTED_MODULE_5__["sharedStyles"].markdown
  }, Glamor.createElement("p", null, "We couldn't find what you were looking for."), Glamor.createElement("p", null, "Please refer to the origin of this site for useful links."))))));
};

/* harmony default export */ __webpack_exports__["default"] = (PageNotFound);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: pageQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_text_loop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-text-loop */ "./node_modules/react-text-loop/es/index.js");
/* harmony import */ var components_ButtonLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/ButtonLink */ "./src/components/ButtonLink/index.js");
/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Container */ "./src/components/Container/index.js");
/* harmony import */ var components_Flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Flex */ "./src/components/Flex/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_TitleAndMetaTags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/TitleAndMetaTags */ "./src/components/TitleAndMetaTags/index.js");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! theme */ "./src/theme.js");
/* harmony import */ var utils_createOgUrl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/createOgUrl */ "./src/utils/createOgUrl.js");


var _sectionStyles;




 // import CodeExample from 'components/CodeExample';






 // Needs to be white & SVG
// import logoWhiteSvg from 'icons/packem-logo.png';

var Home =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Home, _Component);

  function Home() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Home.prototype;

  _proto.render = function render() {
    var _ref, _ref2, _ref3, _ref4, _ref5, _ref6;

    var _this$props = this.props,
        data = _this$props.data,
        location = _this$props.location;
    var marketing = data.marketing; // const code = codeExamples.edges.reduce((lookup, {node}) => {
    //   lookup[node.mdAbsolutePath] = node;
    //   return lookup;
    // }, {});

    return Glamor.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
      location: location
    }, Glamor.createElement(components_TitleAndMetaTags__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: "Packem \u2013 A precompiled JavaScript module bundler",
      ogUrl: Object(utils_createOgUrl__WEBPACK_IMPORTED_MODULE_10__["default"])('index.html')
    }), Glamor.createElement("div", {
      css: {
        width: '100%'
      }
    }, Glamor.createElement("header", {
      css: {
        backgroundColor: theme__WEBPACK_IMPORTED_MODULE_9__["colors"].dark,
        color: theme__WEBPACK_IMPORTED_MODULE_9__["colors"].white
      }
    }, Glamor.createElement("div", {
      css: (_ref = {
        paddingTop: 45,
        paddingBottom: 20
      }, _ref[theme__WEBPACK_IMPORTED_MODULE_9__["media"].greaterThan('small')] = {
        paddingTop: 60,
        paddingBottom: 70
      }, _ref)
    }, Glamor.createElement("div", {
      css: {
        // Content should be above absolutely-positioned hero image
        position: 'relative'
      }
    }, Glamor.createElement(components_Container__WEBPACK_IMPORTED_MODULE_3__["default"], null, Glamor.createElement("h1", {
      css: (_ref2 = {
        color: theme__WEBPACK_IMPORTED_MODULE_9__["colors"].brand,
        textAlign: 'center',
        margin: 0,
        fontSize: 45,
        letterSpacing: '0.01em'
      }, _ref2[theme__WEBPACK_IMPORTED_MODULE_9__["media"].size('xsmall')] = {
        fontSize: 30
      }, _ref2[theme__WEBPACK_IMPORTED_MODULE_9__["media"].greaterThan('xlarge')] = {
        fontSize: 60
      }, _ref2)
    }, "Packem"), Glamor.createElement("p", {
      css: (_ref3 = {
        paddingTop: 15,
        textAlign: 'center',
        fontSize: 24,
        letterSpacing: '0.01em',
        fontWeight: 200
      }, _ref3[theme__WEBPACK_IMPORTED_MODULE_9__["media"].size('xsmall')] = {
        fontSize: 16,
        maxWidth: '12em',
        marginLeft: 'auto',
        marginRight: 'auto'
      }, _ref3[theme__WEBPACK_IMPORTED_MODULE_9__["media"].greaterThan('xlarge')] = {
        paddingTop: 20,
        fontSize: 30
      }, _ref3)
    }, "A precompiled", " ", Glamor.createElement(react_text_loop__WEBPACK_IMPORTED_MODULE_1__["default"], null, Glamor.createElement("span", null, "JavaScript module"), Glamor.createElement("span", null, "HTML"), Glamor.createElement("span", null, "Markdown"), Glamor.createElement("span", null, "SASS"), Glamor.createElement("span", null, "CSS"), Glamor.createElement("span", null, "static assets")), " ", "bundler"), Glamor.createElement(components_Flex__WEBPACK_IMPORTED_MODULE_4__["default"], {
      valign: "center",
      css: (_ref4 = {
        paddingTop: 40
      }, _ref4[theme__WEBPACK_IMPORTED_MODULE_9__["media"].greaterThan('xlarge')] = {
        paddingTop: 65
      }, _ref4)
    }, Glamor.createElement(CtaItem, null, Glamor.createElement(components_ButtonLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      to: "/docs/getting-started.html",
      type: "primary"
    }, "Get Started")), Glamor.createElement(CtaItem, null, Glamor.createElement(components_ButtonLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      to: "/docs/execution-contexts.html",
      type: "secondary"
    }, "Advanced Guide"))))))), Glamor.createElement(components_Container__WEBPACK_IMPORTED_MODULE_3__["default"], null, Glamor.createElement("div", {
      css: theme__WEBPACK_IMPORTED_MODULE_9__["sharedStyles"].markdown
    }, Glamor.createElement("section", {
      css: [sectionStyles, (_ref5 = {}, _ref5[theme__WEBPACK_IMPORTED_MODULE_9__["media"].lessThan('medium')] = {
        marginTop: 0,
        marginBottom: 0,
        overflowX: 'auto',
        paddingTop: 30,
        WebkitOverflowScrolling: 'touch',
        position: 'relative',
        maskImage: 'linear-gradient(to right, transparent, white 10px, white 90%, transparent)'
      }, _ref5)]
    }, Glamor.createElement("div", {
      css: (_ref6 = {
        display: 'flex',
        flexDirection: 'row'
      }, _ref6[theme__WEBPACK_IMPORTED_MODULE_9__["media"].lessThan('medium')] = {
        display: 'block',
        whiteSpace: 'nowrap'
      }, _ref6)
    }, marketing.edges.map(function (_ref7, index) {
      var _firstOfType, _ref8, _;

      var column = _ref7.node;
      return Glamor.createElement("div", {
        key: index,
        css: (_ref8 = {
          display: 'flex',
          flexDirection: 'column',
          flex: '0 1 33%',
          marginLeft: 40,
          '&:first-of-type': (_firstOfType = {
            marginLeft: 0
          }, _firstOfType[theme__WEBPACK_IMPORTED_MODULE_9__["media"].lessThan('medium')] = {
            marginLeft: 10
          }, _firstOfType)
        }, _ref8[theme__WEBPACK_IMPORTED_MODULE_9__["media"].lessThan('medium')] = {
          display: 'inline-block',
          verticalAlign: 'top',
          marginLeft: 0,
          whiteSpace: 'normal',
          width: '75%',
          marginRight: 20,
          paddingBottom: 40,
          '&:first-of-type': {
            marginTop: 0
          }
        }, _ref8)
      }, Glamor.createElement("h3", {
        css: [headingStyles, {
          '&&': (_ = {
            // Make specificity higher than the site-wide h3 styles.
            color: theme__WEBPACK_IMPORTED_MODULE_9__["colors"].subtle,
            paddingTop: 0,
            fontWeight: 300,
            fontSize: 20
          }, _[theme__WEBPACK_IMPORTED_MODULE_9__["media"].greaterThan('xlarge')] = {
            fontSize: 24
          }, _)
        }]
      }, column.frontmatter.title), Glamor.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: column.html
        }
      }));
    }))), Glamor.createElement("section", null, Glamor.createElement("h3", {
      style: {
        textAlign: "center"
      }
    }, "Parcel (v1.12.3) vs Packem (pre-alpha)"), Glamor.createElement("br", null), Glamor.createElement("iframe", {
      src: "https://player.vimeo.com/video/327818295",
      width: "100%",
      height: "350",
      frameborder: "0",
      allow: "autoplay; fullscreen",
      allowfullscreen: true
    })), Glamor.createElement("hr", {
      css: {
        height: 1,
        marginBottom: -1,
        border: 'none',
        borderBottom: "1 solid " + theme__WEBPACK_IMPORTED_MODULE_9__["colors"].divider
      }
    }), Glamor.createElement("section", {
      css: sectionStyles
    }))), Glamor.createElement("section", {
      css: {
        background: theme__WEBPACK_IMPORTED_MODULE_9__["colors"].dark,
        color: theme__WEBPACK_IMPORTED_MODULE_9__["colors"].white,
        paddingTop: 45,
        paddingBottom: 45
      }
    }, Glamor.createElement(components_Container__WEBPACK_IMPORTED_MODULE_3__["default"], null, Glamor.createElement(components_Flex__WEBPACK_IMPORTED_MODULE_4__["default"], {
      valign: "center",
      style: {
        justifyContent: 'center'
      }
    }, Glamor.createElement(components_ButtonLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      to: "/docs/getting-started.html",
      type: "primary"
    }, "Get Started"))))));
  };

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Home.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    examples: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
    marketing: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
  }).isRequired
};

var CtaItem = function CtaItem(_ref9) {
  var _nthChild, _ref10;

  var children = _ref9.children,
      _ref9$primary = _ref9.primary,
      primary = _ref9$primary === void 0 ? false : _ref9$primary;
  return Glamor.createElement("div", {
    css: (_ref10 = {
      width: '50%'
    }, _ref10[theme__WEBPACK_IMPORTED_MODULE_9__["media"].between('small', 'large')] = {
      paddingLeft: 20
    }, _ref10[theme__WEBPACK_IMPORTED_MODULE_9__["media"].greaterThan('xlarge')] = {
      paddingLeft: 40
    }, _ref10['&:first-child'] = {
      textAlign: 'right',
      paddingRight: 15
    }, _ref10['&:nth-child(2)'] = (_nthChild = {}, _nthChild[theme__WEBPACK_IMPORTED_MODULE_9__["media"].greaterThan('small')] = {
      paddingLeft: 15
    }, _nthChild), _ref10)
  }, children);
};
/**
 * Missing? (3rd)
 * 
 *     codeExamples: allExampleCode {
      edges {
        node {
          id
          code
          mdAbsolutePath
        }
      }
    }
 */


var pageQuery = "2023175393";
/* harmony default export */ __webpack_exports__["default"] = (Home);
var sectionStyles = (_sectionStyles = {
  marginTop: 20,
  marginBottom: 15
}, _sectionStyles[theme__WEBPACK_IMPORTED_MODULE_9__["media"].greaterThan('medium')] = {
  marginTop: 60,
  marginBottom: 65
}, _sectionStyles);
var headingStyles = {
  '&&': {
    marginBottom: 20
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/pages/versions.js":
/*!*******************************!*\
  !*** ./src/pages/versions.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Container */ "./src/components/Container/index.js");
/* harmony import */ var components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Header */ "./src/components/Header/index.js");
/* harmony import */ var components_TitleAndMetaTags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/TitleAndMetaTags */ "./src/components/TitleAndMetaTags/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme */ "./src/theme.js");
/* harmony import */ var _content_versions_yml__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../content/versions.yml */ "./content/versions.yml");
/* harmony import */ var _content_versions_yml__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_content_versions_yml__WEBPACK_IMPORTED_MODULE_6__);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * 
 */





 // $FlowFixMe This is a valid path



var Versions = function Versions(_ref) {
  var location = _ref.location;
  return Glamor.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    location: location
  }, Glamor.createElement(components_Container__WEBPACK_IMPORTED_MODULE_1__["default"], null, Glamor.createElement("div", {
    css: theme__WEBPACK_IMPORTED_MODULE_5__["sharedStyles"].articleLayout.container
  }, Glamor.createElement("div", {
    css: theme__WEBPACK_IMPORTED_MODULE_5__["sharedStyles"].articleLayout.content
  }, Glamor.createElement(components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Packem Versions Changelog"), Glamor.createElement(components_TitleAndMetaTags__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Packem - Versions"
  }), Glamor.createElement("div", {
    css: theme__WEBPACK_IMPORTED_MODULE_5__["sharedStyles"].markdown
  }, Glamor.createElement("p", null, "Documentation for recent releases can be found in the links below."), _content_versions_yml__WEBPACK_IMPORTED_MODULE_6___default.a.map(function (version) {
    return Glamor.createElement("div", {
      key: version.title
    }, Glamor.createElement("h3", null, version.title), Glamor.createElement("ul", null, Glamor.createElement("li", null, Glamor.createElement("a", {
      href: version.changelog,
      target: "_blank",
      rel: "noopener"
    }, "Changelog")), version.path && Glamor.createElement("li", null, Glamor.createElement("a", {
      href: version.path,
      rel: "nofollow"
    }, "Documentation"))));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Versions);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/site-constants.js":
/*!*******************************!*\
  !*** ./src/site-constants.js ***!
  \*******************************/
/*! exports provided: urlRoot, version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlRoot", function() { return urlRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @providesModule site-constants
 * 
 */
// NOTE: We can't just use `location.toString()` because when we are rendering
// the SSR part in node.js we won't have a proper location.
var urlRoot = 'https://reactjs.org';
var version = '0.1.3';


/***/ }),

/***/ "./src/templates/components/ChevronSvg/index.js":
/*!******************************************************!*\
  !*** ./src/templates/components/ChevronSvg/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * 
 */


var ChevronSvg = function ChevronSvg(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 10 : _ref$size,
      _ref$cssProps = _ref.cssProps,
      cssProps = _ref$cssProps === void 0 ? {} : _ref$cssProps;
  return Glamor.createElement("svg", {
    css: cssProps,
    viewBox: "0 0 926.23699 573.74994",
    version: "1.1",
    x: "0px",
    y: "0px",
    width: size,
    height: size
  }, Glamor.createElement("g", {
    transform: "translate(904.92214,-879.1482)"
  }, Glamor.createElement("path", {
    d: "\n          m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,\n          -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,\n          0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,\n          -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,\n          -174.68583 0.6895,0 26.281,25.03215 56.8701,\n          55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864\n          -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,\n          -104.0616 -231.873,-231.248 z\n        ",
    fill: "currentColor"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ChevronSvg);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/templates/components/ExternalLinkSvg/index.js":
/*!***********************************************************!*\
  !*** ./src/templates/components/ExternalLinkSvg/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */


var ExternalLinkSvg = function ExternalLinkSvg(_ref) {
  var _ref$cssProps = _ref.cssProps,
      cssProps = _ref$cssProps === void 0 ? {} : _ref$cssProps;
  return Glamor.createElement("svg", {
    x: "0px",
    y: "0px",
    viewBox: "0 0 100 100",
    width: 15,
    height: 15,
    css: cssProps
  }, Glamor.createElement("path", {
    fill: "currentColor",
    d: "\n      M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,\n      0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\n    "
  }), Glamor.createElement("polygon", {
    fill: "currentColor",
    points: "\n      45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,\n      14.9 62.8,22.9 71.5,22.9\n      "
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ExternalLinkSvg);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/templates/components/MetaTitle/index.js":
/*!*****************************************************!*\
  !*** ./src/templates/components/MetaTitle/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme */ "./src/theme.js");


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */



var MetaTitle = function MetaTitle(_ref) {
  var children = _ref.children,
      title = _ref.title,
      _ref$cssProps = _ref.cssProps,
      cssProps = _ref$cssProps === void 0 ? {} : _ref$cssProps,
      _ref$onDark = _ref.onDark,
      onDark = _ref$onDark === void 0 ? false : _ref$onDark;
  return Glamor.createElement("div", {
    css: Object.assign({
      color: onDark ? theme__WEBPACK_IMPORTED_MODULE_2__["colors"].subtleOnDark : theme__WEBPACK_IMPORTED_MODULE_2__["colors"].subtle,
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 3,
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }, cssProps)
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (MetaTitle);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/templates/components/NavigationFooter/NavigationFooter.js":
/*!***********************************************************************!*\
  !*** ./src/templates/components/NavigationFooter/NavigationFooter.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony import */ var core_js_modules_es6_string_small__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.small */ "core-js/modules/es6.string.small");
/* harmony import */ var core_js_modules_es6_string_small__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_small__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "core-js/modules/es6.regexp.replace");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Container */ "./src/components/Container/index.js");
/* harmony import */ var components_Flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Flex */ "./src/components/Flex/index.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! theme */ "./src/theme.js");




/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */







var NavigationFooter = function NavigationFooter(_ref) {
  var _ref2;

  var next = _ref.next,
      prev = _ref.prev,
      location = _ref.location;
  return Glamor.createElement("div", {
    css: {
      background: theme__WEBPACK_IMPORTED_MODULE_8__["colors"].dark,
      color: theme__WEBPACK_IMPORTED_MODULE_8__["colors"].white,
      paddingTop: 50,
      paddingBottom: 50
    }
  }, Glamor.createElement(components_Container__WEBPACK_IMPORTED_MODULE_3__["default"], null, Glamor.createElement(components_Flex__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "ul",
    halign: "space-between",
    css: (_ref2 = {}, _ref2[theme__WEBPACK_IMPORTED_MODULE_8__["media"].between('small', 'medium')] = {
      paddingRight: 240
    }, _ref2[theme__WEBPACK_IMPORTED_MODULE_8__["media"].between('large', 'largerSidebar')] = {
      paddingRight: 280
    }, _ref2[theme__WEBPACK_IMPORTED_MODULE_8__["media"].between('largerSidebar', 'sidebarFixed', true)] = {
      paddingRight: 380
    }, _ref2)
  }, Glamor.createElement(components_Flex__WEBPACK_IMPORTED_MODULE_4__["default"], {
    basis: "50%",
    type: "li"
  }, prev && Glamor.createElement("div", null, Glamor.createElement(SecondaryLabel, null, "Previous article"), Glamor.createElement("div", {
    css: {
      paddingTop: 10
    }
  }, Glamor.createElement(PrimaryLink, {
    location: location,
    to: prev.id + ".html"
  }, prev.title)))), next && Glamor.createElement(components_Flex__WEBPACK_IMPORTED_MODULE_4__["default"], {
    halign: "flex-end",
    basis: "50%",
    type: "li",
    css: {
      textAlign: 'right'
    }
  }, Glamor.createElement("div", null, Glamor.createElement(SecondaryLabel, null, "Next article"), Glamor.createElement("div", {
    css: {
      paddingTop: 10
    }
  }, Glamor.createElement(PrimaryLink, {
    location: location,
    to: next.id + ".html"
  }, next.title)))))));
};

NavigationFooter.propTypes = {
  next: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,
    title: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired
  }),
  prev: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,
    title: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired
  })
};
/* harmony default export */ __webpack_exports__["default"] = (NavigationFooter);

var PrimaryLink = function PrimaryLink(_ref3) {
  var _ref4;

  var children = _ref3.children,
      to = _ref3.to,
      location = _ref3.location;
  // quick fix
  // TODO: replace this with better method of getting correct full url
  var updatedUrl = location && location.pathname.replace(/\/[^/]+\.html/, '/' + to) || to;
  return Glamor.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    css: (_ref4 = {
      display: 'inline',
      borderColor: theme__WEBPACK_IMPORTED_MODULE_8__["colors"].subtle,
      transition: 'border-color 0.2s ease',
      fontSize: 30,
      borderBottomWidth: 1,
      borderBottomStyle: 'solid'
    }, _ref4[theme__WEBPACK_IMPORTED_MODULE_8__["media"].lessThan('large')] = {
      fontSize: 24
    }, _ref4[theme__WEBPACK_IMPORTED_MODULE_8__["media"].size('xsmall')] = {
      fontSize: 16
    }, _ref4[':hover'] = {
      borderColor: theme__WEBPACK_IMPORTED_MODULE_8__["colors"].white
    }, _ref4),
    to: updatedUrl
  }, children);
};

var SecondaryLabel = function SecondaryLabel(_ref5) {
  var children = _ref5.children;
  return Glamor.createElement("div", {
    css: Object.assign({
      color: theme__WEBPACK_IMPORTED_MODULE_8__["colors"].brand
    }, theme__WEBPACK_IMPORTED_MODULE_8__["fonts"].small)
  }, children);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/templates/components/NavigationFooter/index.js":
/*!************************************************************!*\
  !*** ./src/templates/components/NavigationFooter/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavigationFooter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationFooter */ "./src/templates/components/NavigationFooter/NavigationFooter.js");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

/* harmony default export */ __webpack_exports__["default"] = (_NavigationFooter__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/templates/components/Sidebar/ScrollSyncSection.js":
/*!***************************************************************!*\
  !*** ./src/templates/components/Sidebar/ScrollSyncSection.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "core-js/modules/es6.array.find");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Section */ "./src/templates/components/Sidebar/Section.js");





/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the CC-BY-4.0 license found
 * in the LICENSE file in the root directory of this source tree.
 *
 * @emails react-core
 */



var ScrollSyncSection =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default()(ScrollSyncSection, _Component);

  function ScrollSyncSection(props, context) {
    var _this;

    _this = _Component.call(this, props, context) || this;
    _this.state = {
      activeItemId: '',
      itemTopOffsets: []
    };
    _this.calculateItemTopOffsets = _this.calculateItemTopOffsets.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.handleResize = _this.handleResize.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.handleScroll = _this.handleScroll.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  var _proto = ScrollSyncSection.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.calculateItemTopOffsets();
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  };

  _proto.calculateItemTopOffsets = function calculateItemTopOffsets() {
    var section = this.props.section;

    var itemIds = _getItemIds(section.items);

    this.setState({
      itemTopOffsets: _getElementTopOffsetsById(itemIds)
    });
  };

  _proto.handleResize = function handleResize() {
    this.calculateItemTopOffsets();
    this.handleScroll();
  };

  _proto.handleScroll = function handleScroll() {
    var itemTopOffsets = this.state.itemTopOffsets;
    var item = itemTopOffsets.find(function (itemTopOffset, i) {
      var nextItemTopOffset = itemTopOffsets[i + 1];

      if (nextItemTopOffset) {
        return window.scrollY >= itemTopOffset.offsetTop && window.scrollY < nextItemTopOffset.offsetTop;
      }

      return window.scrollY >= itemTopOffset.offsetTop;
    });
    this.setState({
      activeItemId: item ? item.id : ''
    });
  };

  _proto.render = function render() {
    var activeItemId = this.state.activeItemId;
    return Glamor.createElement(_Section__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({
      isScrollSync: true,
      activeItemId: activeItemId
    }, this.props));
  };

  return ScrollSyncSection;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

var _getItemIds = function _getItemIds(items) {
  return items.map(function (item) {
    var subItemIds = [];

    if (item.subitems) {
      subItemIds = item.subitems.map(function (subitem) {
        return subitem.id;
      });
    }

    return [item.id].concat(subItemIds);
  }).reduce(function (prev, current) {
    return prev.concat(current);
  });
};

var _getElementTopOffsetsById = function _getElementTopOffsetsById(ids) {
  return ids.map(function (id) {
    var element = document.getElementById(id);

    if (!element) {
      return null;
    }

    return {
      id: id,
      offsetTop: element.offsetTop
    };
  }).filter(function (item) {
    return item;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ScrollSyncSection);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/templates/components/Sidebar/Section.js":
/*!*****************************************************!*\
  !*** ./src/templates/components/Sidebar/Section.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "core-js/modules/es6.regexp.replace");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme */ "./src/theme.js");
/* harmony import */ var utils_isItemActive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/isItemActive */ "./src/utils/isItemActive.js");
/* harmony import */ var _MetaTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MetaTitle */ "./src/templates/components/MetaTitle/index.js");
/* harmony import */ var _ChevronSvg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ChevronSvg */ "./src/templates/components/ChevronSvg/index.js");




/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */






var Section =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(Section, _React$Component);

  function Section() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      uid: ('' + Math.random()).replace(/\D/g, '')
    };
    return _this;
  }

  var _proto = Section.prototype;

  _proto.render = function render() {
    var _ref, _ref2, _ref3;

    var _this$props = this.props,
        activeItemId = _this$props.activeItemId,
        createLink = _this$props.createLink,
        isActive = _this$props.isActive,
        isScrollSync = _this$props.isScrollSync,
        location = _this$props.location,
        onLinkClick = _this$props.onLinkClick,
        onSectionTitleClick = _this$props.onSectionTitleClick,
        section = _this$props.section;
    var uid = 'section_' + this.state.uid;
    return Glamor.createElement("div", null, Glamor.createElement("button", {
      "aria-expanded": isActive,
      "aria-controls": uid,
      css: {
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: 0,
        marginTop: 10
      },
      onClick: onSectionTitleClick
    }, Glamor.createElement(_MetaTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
      cssProps: (_ref = {}, _ref[theme__WEBPACK_IMPORTED_MODULE_4__["media"].greaterThan('small')] = {
        color: isActive ? theme__WEBPACK_IMPORTED_MODULE_4__["colors"].text : theme__WEBPACK_IMPORTED_MODULE_4__["colors"].subtle,
        ':hover': {
          color: theme__WEBPACK_IMPORTED_MODULE_4__["colors"].text
        }
      }, _ref)
    }, section.title, Glamor.createElement(_ChevronSvg__WEBPACK_IMPORTED_MODULE_7__["default"], {
      cssProps: (_ref2 = {
        marginLeft: 7,
        transform: isActive ? 'rotateX(180deg)' : 'rotateX(0deg)',
        transition: 'transform 0.2s ease'
      }, _ref2[theme__WEBPACK_IMPORTED_MODULE_4__["media"].lessThan('small')] = {
        display: 'none'
      }, _ref2)
    }))), Glamor.createElement("ul", {
      id: uid,
      css: (_ref3 = {
        fontFeatureSettings: "'tnum'",
        marginBottom: 10
      }, _ref3[theme__WEBPACK_IMPORTED_MODULE_4__["media"].greaterThan('small')] = {
        display: isActive ? 'block' : 'none'
      }, _ref3)
    }, section.items.map(function (item, index) {
      return Glamor.createElement("li", {
        key: item.id,
        css: {
          marginTop: 5
        }
      }, createLink({
        isActive: isScrollSync ? activeItemId === item.id : Object(utils_isItemActive__WEBPACK_IMPORTED_MODULE_5__["default"])(location, item),
        item: section.isOrdered ? Object.assign({}, item, {
          title: index + 1 + ". " + item.title
        }) : item,
        location: location,
        onLinkClick: onLinkClick,
        section: section
      }), item.subitems && Glamor.createElement("ul", {
        css: {
          marginLeft: 20
        }
      }, item.subitems.map(function (subitem) {
        return Glamor.createElement("li", {
          key: subitem.id
        }, createLink({
          isActive: isScrollSync ? activeItemId === subitem.id : Object(utils_isItemActive__WEBPACK_IMPORTED_MODULE_5__["default"])(location, subitem),
          item: subitem,
          location: location,
          onLinkClick: onLinkClick,
          section: section
        }));
      })));
    })));
  };

  return Section;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Section);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/templates/components/Sidebar/Sidebar.js":
/*!*****************************************************!*\
  !*** ./src/templates/components/Sidebar/Sidebar.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Flex */ "./src/components/Flex/index.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Section */ "./src/templates/components/Sidebar/Section.js");
/* harmony import */ var _ScrollSyncSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ScrollSyncSection */ "./src/templates/components/Sidebar/ScrollSyncSection.js");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme */ "./src/theme.js");


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */






var Sidebar =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Sidebar, _Component);

  function Sidebar(props, context) {
    var _this;

    _this = _Component.call(this, props, context) || this;
    _this.state = {
      activeSection: props.defaultActiveSection
    };
    return _this;
  }

  var _proto = Sidebar.prototype;

  _proto.render = function render() {
    var _ref,
        _this2 = this;

    var _this$props = this.props,
        closeParentMenu = _this$props.closeParentMenu,
        createLink = _this$props.createLink,
        enableScrollSync = _this$props.enableScrollSync,
        location = _this$props.location,
        sectionList = _this$props.sectionList;
    var activeSection = this.state.activeSection;
    var SectionComponent = enableScrollSync ? _ScrollSyncSection__WEBPACK_IMPORTED_MODULE_4__["default"] : _Section__WEBPACK_IMPORTED_MODULE_3__["default"];
    return Glamor.createElement(components_Flex__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "nav",
      direction: "column",
      halign: "stretch",
      css: (_ref = {
        width: '100%',
        paddingLeft: 20,
        position: 'relative'
      }, _ref[theme__WEBPACK_IMPORTED_MODULE_5__["media"].greaterThan('largerSidebar')] = {
        paddingLeft: 40
      }, _ref[theme__WEBPACK_IMPORTED_MODULE_5__["media"].lessThan('small')] = {
        paddingBottom: 100
      }, _ref)
    }, sectionList.map(function (section, index) {
      return Glamor.createElement(SectionComponent, {
        createLink: createLink,
        isActive: activeSection === section || sectionList.length === 1,
        key: index,
        location: location,
        onLinkClick: closeParentMenu,
        onSectionTitleClick: function onSectionTitleClick() {
          return _this2._toggleSection(section);
        },
        section: section
      });
    }));
  };

  _proto._toggleSection = function _toggleSection(section) {
    this.setState(function (state) {
      return {
        activeSection: state.activeSection === section ? null : section
      };
    });
  };

  return Sidebar;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/templates/components/Sidebar/index.js":
/*!***************************************************!*\
  !*** ./src/templates/components/Sidebar/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar */ "./src/templates/components/Sidebar/Sidebar.js");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

/* harmony default export */ __webpack_exports__["default"] = (_Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/templates/docs.js":
/*!*******************************!*\
  !*** ./src/templates/docs.js ***!
  \*******************************/
/*! exports provided: pageQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var components_MarkdownPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/MarkdownPage */ "./src/components/MarkdownPage/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var utils_createLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/createLink */ "./src/utils/createLink.js");
/* harmony import */ var utils_sectionList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/sectionList */ "./src/utils/sectionList.js");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */







var Docs = function Docs(_ref) {
  var data = _ref.data,
      location = _ref.location;
  return Glamor.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    location: location
  }, Glamor.createElement(components_MarkdownPage__WEBPACK_IMPORTED_MODULE_0__["default"], {
    createLink: utils_createLink__WEBPACK_IMPORTED_MODULE_4__["createLinkDocs"],
    location: location,
    markdownRemark: data.markdownRemark,
    sectionList: utils_sectionList__WEBPACK_IMPORTED_MODULE_5__["sectionListDocs"],
    titlePostfix: " \u2013 Packem"
  }));
};

Docs.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
var pageQuery = "2154263559";
/* harmony default export */ __webpack_exports__["default"] = (Docs);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/*! exports provided: colors, fonts, media, sharedStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fonts", function() { return fonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "media", function() { return media; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sharedStyles", function() { return sharedStyles; });
/* harmony import */ var hex2rgba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hex2rgba */ "./node_modules/hex2rgba/index.js");
/* harmony import */ var hex2rgba__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hex2rgba__WEBPACK_IMPORTED_MODULE_0__);
var _header, _container, _content, _sidebar, _gatsbyHighlight, _pFirstChild, _p, _h, _h2, _h3, _blockquote;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @providesModule theme
 * 
 */

/**
 * Theme contains variables shared by styles of multiple components.
 */

var colors = {
  lighter: '#373940',
  // light blue
  dark: '#221f15',
  // dark blue
  darker: '#17150e',
  // really dark blue
  brand: '#f7bd35',
  // electric blue
  brandLight: '#f5c658',
  // links
  text: '#1a1a1a',
  // very dark grey / black substitute
  subtle: '#6d6d6d',
  // light grey for text
  subtleOnDark: '#999',
  divider: '#ececec',
  // very light grey
  note: '#ffe564',
  // yellow
  error: '#ff6464',
  // yellow
  white: '#ffffff',
  black: '#000000'
};
var SIZES = {
  xsmall: {
    min: 0,
    max: 599
  },
  small: {
    min: 600,
    max: 779
  },
  medium: {
    min: 780,
    max: 979
  },
  large: {
    min: 980,
    max: 1279
  },
  xlarge: {
    min: 1280,
    max: 1339
  },
  xxlarge: {
    min: 1340,
    max: Infinity
  },
  // Sidebar/nav related tweakpoints
  largerSidebar: {
    min: 1100,
    max: 1339
  },
  sidebarFixed: {
    min: 2000,
    max: Infinity
  },
  // Topbar related tweakpoints
  expandedSearch: {
    min: 1180,
    max: Infinity
  }
};
var media = {
  between: function between(smallKey, largeKey, excludeLarge) {
    if (excludeLarge === void 0) {
      excludeLarge = false;
    }

    if (excludeLarge) {
      return "@media (min-width: " + SIZES[smallKey].min + "px) and (max-width: " + (SIZES[largeKey].min - 1) + "px)";
    } else {
      if (SIZES[largeKey].max === Infinity) {
        return "@media (min-width: " + SIZES[smallKey].min + "px)";
      } else {
        return "@media (min-width: " + SIZES[smallKey].min + "px) and (max-width: " + SIZES[largeKey].max + "px)";
      }
    }
  },
  greaterThan: function greaterThan(key) {
    return "@media (min-width: " + SIZES[key].min + "px)";
  },
  lessThan: function lessThan(key) {
    return "@media (max-width: " + (SIZES[key].min - 1) + "px)";
  },
  size: function size(key) {
    var size = SIZES[key];

    if (size.min == null) {
      return media.lessThan(key);
    } else if (size.max == null) {
      return media.greaterThan(key);
    } else {
      return media.between(key, key);
    }
  }
};
var fonts = {
  header: (_header = {
    fontSize: 60,
    lineHeight: '65px',
    fontWeight: 700
  }, _header[media.lessThan('small')] = {
    overflowWrap: 'break-word',
    wordBreak: 'break-word'
  }, _header[media.lessThan('medium')] = {
    fontSize: 40,
    lineHeight: '45px'
  }, _header),
  small: {
    fontSize: 14
  }
}; // Shared styles are generally better as components,
// Except when they must be used within nested CSS selectors.
// This is the case for eg markdown content.

var linkStyle = {
  backgroundColor: hex2rgba__WEBPACK_IMPORTED_MODULE_0___default()(colors.brandLight, 0.3),
  borderBottom: "1px solid " + hex2rgba__WEBPACK_IMPORTED_MODULE_0___default()(colors.black, 0.2),
  color: colors.text,
  ':hover': {
    backgroundColor: colors.brandLight,
    borderBottomColor: colors.text
  }
};
var sharedStyles = {
  link: linkStyle,
  articleLayout: {
    container: (_container = {
      display: 'flex',
      minHeight: 'calc(100vh - 60px)'
    }, _container[media.greaterThan('sidebarFixed')] = {
      maxWidth: 840,
      marginLeft: 'auto',
      marginRight: 'auto'
    }, _container[media.lessThan('small')] = {
      flexDirection: 'column'
    }, _container),
    content: (_content = {
      marginTop: 40,
      marginBottom: 120
    }, _content[media.greaterThan('medium')] = {
      marginTop: 50
    }, _content),
    sidebar: (_sidebar = {
      display: 'flex',
      flexDirection: 'column'
    }, _sidebar[media.between('small', 'sidebarFixed')] = {
      borderLeft: '1px solid #ececec',
      marginLeft: 80
    }, _sidebar[media.between('small', 'largerSidebar')] = {
      flex: '0 0 200px',
      marginLeft: 80
    }, _sidebar[media.between('small', 'medium')] = {
      marginLeft: 40
    }, _sidebar[media.greaterThan('largerSidebar')] = {
      flex: '0 0 300px'
    }, _sidebar[media.greaterThan('sidebarFixed')] = {
      position: 'fixed',
      right: 0,
      width: 300,
      zIndex: 2
    }, _sidebar),
    editLink: {
      color: colors.subtle,
      borderColor: colors.divider,
      transition: 'all 0.2s ease',
      transitionPropery: 'color, border-color',
      whiteSpace: 'nowrap',
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
      ':hover': {
        color: colors.text,
        borderColor: colors.text
      }
    }
  },
  markdown: {
    lineHeight: '25px',
    '& .gatsby-highlight': (_gatsbyHighlight = {
      marginTop: 25,
      marginLeft: -30,
      marginRight: -30,
      marginBottom: 25,
      paddingLeft: 15,
      paddingRight: 15
    }, _gatsbyHighlight[media.lessThan('small')] = {
      marginLeft: -20,
      marginRight: -20,
      borderRadius: 0
    }, _gatsbyHighlight),
    '& a:not(.anchor):not(.gatsby-resp-image-link)': linkStyle,
    '& > p:first-child': (_pFirstChild = {
      fontSize: 18,
      fontWeight: 300,
      color: colors.subtle
    }, _pFirstChild[media.greaterThan('xlarge')] = {
      fontSize: 24
    }, _pFirstChild['& a, & strong'] = {
      fontWeight: 400
    }, _pFirstChild),
    '& p': (_p = {
      marginTop: 30,
      fontSize: 17,
      lineHeight: 1.7,
      maxWidth: '42em',
      '&:first-of-type': {
        marginTop: 15
      },
      '&:first-child': {
        marginTop: 0
      }
    }, _p[media.lessThan('large')] = {
      fontSize: 16,
      marginTop: 25
    }, _p),
    '& h3 + p, & h3 + p:first-of-type': {
      marginTop: 20
    },
    '& p > code, & li > code': {
      background: hex2rgba__WEBPACK_IMPORTED_MODULE_0___default()(colors.note, 0.2),
      color: colors.text
    },
    '& p > code, & li > code, & p > a > code, & li > a > code': {
      padding: '0 3px',
      fontSize: '0.94em',
      // 16px on 17px text, smaller in smaller text
      wordBreak: 'break-word'
    },
    '& hr': {
      height: 1,
      marginBottom: -1,
      border: 'none',
      borderBottom: "1px solid " + colors.divider,
      marginTop: 40,
      ':first-child': {
        marginTop: 0
      }
    },
    '& h1': (_h = {
      lineHeight: 1.2
    }, _h[media.size('xsmall')] = {
      fontSize: 30
    }, _h[media.between('small', 'large')] = {
      fontSize: 45
    }, _h[media.greaterThan('xlarge')] = {
      fontSize: 60
    }, _h),
    '& h2': (_h2 = {
      borderTop: "1px solid " + colors.divider,
      marginTop: 44,
      paddingTop: 40,
      lineHeight: 1.2,
      ':first-child': {
        borderTop: 0,
        marginTop: 0,
        paddingTop: 0
      }
    }, _h2[media.lessThan('large')] = {
      fontSize: 20
    }, _h2[media.greaterThan('xlarge')] = {
      fontSize: 35
    }, _h2),
    '& hr + h2': {
      borderTop: 0,
      marginTop: 0
    },
    '& h3': (_h3 = {
      paddingTop: 45
    }, _h3[media.lessThan('small')] = {
      overflowWrap: 'break-word',
      wordBreak: 'break-word'
    }, _h3[media.greaterThan('xlarge')] = {
      fontSize: 25,
      lineHeight: 1.3
    }, _h3),
    '& h2 + h3, & h2 + h3:first-of-type': {
      paddingTop: 30
    },
    '& h4': {
      fontSize: 20,
      color: colors.subtle,
      lineHeight: 1.3,
      marginTop: 50,
      fontWeight: 400
    },
    '& h4 + p': {
      marginTop: 20
    },
    '& ol, & ul': {
      marginTop: 20,
      fontSize: 16,
      color: colors.text,
      paddingLeft: 20,
      '& p, & p:first-of-type': {
        fontSize: 16,
        marginTop: 0,
        lineHeight: 1.2
      },
      '& li': {
        marginTop: 10
      },
      '& li.button-newapp': {
        marginTop: 0
      },
      '& ol, & ul': {
        marginLeft: 20,
        marginTop: 10
      }
    },
    '& img': {
      maxWidth: '100%'
    },
    '& ol': {
      listStyle: 'decimal'
    },
    '& ul': {
      listStyle: 'disc'
    },
    '& blockquote': (_blockquote = {
      backgroundColor: hex2rgba__WEBPACK_IMPORTED_MODULE_0___default()('#ffe564', 0.3),
      borderLeftColor: colors.note,
      borderLeftWidth: 9,
      borderLeftStyle: 'solid',
      padding: '20px 45px 20px 26px',
      marginBottom: 30,
      marginTop: 20,
      marginLeft: -30,
      marginRight: -30
    }, _blockquote[media.lessThan('small')] = {
      marginLeft: -20,
      marginRight: -20
    }, _blockquote['& p'] = {
      marginTop: 15,
      '&:first-of-type': {
        fontWeight: 700,
        marginTop: 0
      },
      '&:nth-of-type(2)': {
        marginTop: 0
      }
    }, _blockquote),
    '& .gatsby-highlight + blockquote': {
      marginTop: 40
    }
  }
};


/***/ }),

/***/ "./src/utils/createLink.js":
/*!*********************************!*\
  !*** ./src/utils/createLink.js ***!
  \*********************************/
/*! exports provided: createLinkBlog, createLinkCommunity, createLinkDocs, createLinkTutorial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLinkBlog", function() { return createLinkBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLinkCommunity", function() { return createLinkCommunity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLinkDocs", function() { return createLinkDocs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLinkTutorial", function() { return createLinkTutorial; });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var templates_components_ExternalLinkSvg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! templates/components/ExternalLinkSvg */ "./src/templates/components/ExternalLinkSvg/index.js");
/* harmony import */ var utils_slugify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/slugify */ "./src/utils/slugify.js");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme */ "./src/theme.js");
var _activeLinkBefore;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * 
 */






var createLinkBlog = function createLinkBlog(_ref) {
  var isActive = _ref.isActive,
      item = _ref.item,
      section = _ref.section;
  return Glamor.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    css: [linkCss, isActive && activeLinkCss],
    to: item.id
  }, isActive && Glamor.createElement("span", {
    css: activeLinkBefore
  }), item.title);
};

var createLinkCommunity = function createLinkCommunity(_ref2) {
  var isActive = _ref2.isActive,
      item = _ref2.item,
      section = _ref2.section;

  if (item.href) {
    return Glamor.createElement("a", {
      css: [linkCss],
      href: item.href,
      target: "_blank",
      rel: "noopener"
    }, item.title, Glamor.createElement(templates_components_ExternalLinkSvg__WEBPACK_IMPORTED_MODULE_2__["default"], {
      cssProps: {
        verticalAlign: -2,
        display: 'inline-block',
        marginLeft: 5,
        color: theme__WEBPACK_IMPORTED_MODULE_4__["colors"].subtle
      }
    }));
  }

  return createLinkDocs({
    isActive: isActive,
    item: item,
    section: section
  });
};

var createLinkDocs = function createLinkDocs(_ref3) {
  var isActive = _ref3.isActive,
      item = _ref3.item,
      section = _ref3.section;
  return Glamor.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    css: [linkCss, isActive && activeLinkCss],
    to: Object(utils_slugify__WEBPACK_IMPORTED_MODULE_3__["default"])(item.id, section.directory)
  }, isActive && Glamor.createElement("span", {
    css: activeLinkBefore
  }), item.title);
};

var createLinkTutorial = function createLinkTutorial(_ref4) {
  var isActive = _ref4.isActive,
      item = _ref4.item,
      onLinkClick = _ref4.onLinkClick,
      section = _ref4.section;
  return Glamor.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    css: [linkCss, isActive && activeLinkCss],
    onClick: onLinkClick,
    to: item.href
  }, isActive && Glamor.createElement("span", {
    css: activeLinkBefore
  }), item.title);
};

var activeLinkCss = {
  fontWeight: 700
};
var activeLinkBefore = (_activeLinkBefore = {
  width: 4,
  height: 25,
  borderLeft: "4px solid " + theme__WEBPACK_IMPORTED_MODULE_4__["colors"].brand,
  paddingLeft: 16,
  position: 'absolute',
  left: 0,
  marginTop: -3
}, _activeLinkBefore[theme__WEBPACK_IMPORTED_MODULE_4__["media"].greaterThan('largerSidebar')] = {
  left: 15
}, _activeLinkBefore);
var linkCss = {
  color: theme__WEBPACK_IMPORTED_MODULE_4__["colors"].text,
  display: 'inline-block',
  borderBottom: '1px solid transparent',
  transition: 'border 0.2s ease',
  marginTop: 5,
  '&:hover': {
    color: theme__WEBPACK_IMPORTED_MODULE_4__["colors"].subtle
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "./src/utils/createOgUrl.js":
/*!**********************************!*\
  !*** ./src/utils/createOgUrl.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "core-js/modules/es6.regexp.replace");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var site_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! site-constants */ "./src/site-constants.js");


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * 
 */

/* harmony default export */ __webpack_exports__["default"] = (function (slug) {
  return slug == null ? null : site_constants__WEBPACK_IMPORTED_MODULE_1__["urlRoot"] + "/" + slug.replace(/^\//, '');
});

/***/ }),

/***/ "./src/utils/findSectionForPath.js":
/*!*****************************************!*\
  !*** ./src/utils/findSectionForPath.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "core-js/modules/es6.regexp.split");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slugify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slugify */ "./src/utils/slugify.js");


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * 
 */

/**
 * Helper method to locate the section containing the current URL/path.
 * This method specifically works with the nav_*.yml format.
 */

var findSectionForPath = function findSectionForPath(pathname, sections) {
  var activeSection;
  var slugId = pathname.split('/').slice(-1)[0];
  sections.forEach(function (section) {
    var match = section.items.some(function (item) {
      return slugId === Object(_slugify__WEBPACK_IMPORTED_MODULE_1__["default"])(item.id) || item.subitems && item.subitems.some(function (subitem) {
        return slugId === Object(_slugify__WEBPACK_IMPORTED_MODULE_1__["default"])(subitem.id);
      });
    });

    if (match) {
      activeSection = section;
    }
  });
  return activeSection;
};

/* harmony default export */ __webpack_exports__["default"] = (findSectionForPath);

/***/ }),

/***/ "./src/utils/isItemActive.js":
/*!***********************************!*\
  !*** ./src/utils/isItemActive.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "core-js/modules/es6.regexp.split");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "core-js/modules/es7.array.includes");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "core-js/modules/es6.string.includes");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_slugify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/slugify */ "./src/utils/slugify.js");




/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * 
 */


var toAnchor = function toAnchor(href) {
  if (href === void 0) {
    href = '';
  }

  var index = href.indexOf('#');
  return index >= 0 ? href.substr(index) : '';
}; // TODO Account for redirect_from URLs somehow; they currently won't match.
// This comment should not be true anymore since we're using 300 redirects


var isItemActive = function isItemActive(location, item) {
  if (location.hash) {
    if (item.href) {
      return location.hash === toAnchor(item.href);
    }
  } else if (item.id.includes('html')) {
    return location.pathname.includes(item.id);
  }

  var slugId = location.pathname.split('/').slice(-1)[0];
  return slugId === Object(utils_slugify__WEBPACK_IMPORTED_MODULE_3__["default"])(item.id);
};

/* harmony default export */ __webpack_exports__["default"] = (isItemActive);

/***/ }),

/***/ "./src/utils/patchDOMForGoogleTranslate.js":
/*!*************************************************!*\
  !*** ./src/utils/patchDOMForGoogleTranslate.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return patchDOMForGoogleTranslate; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * 
 */
// This is not pretty.
// See https://github.com/facebook/react/issues/11538#issuecomment-417504600
// We need this because we don't even offer official translations.
// https://github.com/facebook/react/issues/12460
function patchDOMForGoogleTranslate() {
  if (typeof Node !== 'function' || Node.prototype == null) {
    return;
  } // $FlowFixMe Intentionally monkepatching.


  var originalRemoveChild = Node.prototype.removeChild; // $FlowFixMe Intentionally monkepatching.

  Node.prototype.removeChild = function (child) {
    if (child.parentNode !== this) {
      if (typeof console !== 'undefined') {
        console.error('Cannot remove a child from a different parent', child, this);
      }

      return child;
    }

    return originalRemoveChild.apply(this, arguments);
  }; // $FlowFixMe Intentionally monkepatching.


  var originalInsertBefore = Node.prototype.insertBefore; // $FlowFixMe Intentionally monkepatching.

  Node.prototype.insertBefore = function (newNode, referenceNode) {
    if (referenceNode && referenceNode.parentNode !== this) {
      if (typeof console !== 'undefined') {
        console.error('Cannot insert before a reference node from a different parent', referenceNode, this);
      }

      return newNode;
    }

    return originalInsertBefore.apply(this, arguments);
  };
}

/***/ }),

/***/ "./src/utils/sectionList.js":
/*!**********************************!*\
  !*** ./src/utils/sectionList.js ***!
  \**********************************/
/*! exports provided: sectionListDocs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sectionListDocs", function() { return sectionListDocs; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_docs_nav_yml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../content/docs/nav.yml */ "./content/docs/nav.yml");
/* harmony import */ var _content_docs_nav_yml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_docs_nav_yml__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * 
 */
// $FlowExpectedError
// import navCommunity from '../../content/community/nav.yml';
// $FlowExpectedError
 // $FlowExpectedError
// import navTutorial from '../../content/tutorial/nav.yml';

var sectionListDocs = _content_docs_nav_yml__WEBPACK_IMPORTED_MODULE_1___default.a.map(function (item) {
  return Object.assign({}, item, {
    directory: 'docs'
  });
}); // const sectionListCommunity = navCommunity.map(
//   (item: Object): Object => ({
//     ...item,
//     directory: 'community',
//   }),
// );



/***/ }),

/***/ "./src/utils/slugify.js":
/*!******************************!*\
  !*** ./src/utils/slugify.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slugify */ "./node_modules/slugify/index.js");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * 
 */

/* harmony default export */ __webpack_exports__["default"] = (function (string, directory) {
  var filename = slugify__WEBPACK_IMPORTED_MODULE_0___default()(string) + '.html';
  return directory ? "/" + directory + "/" + filename : filename;
});

/***/ }),

/***/ "./src/utils/toCommaSeparatedList.js":
/*!*******************************************!*\
  !*** ./src/utils/toCommaSeparatedList.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Glamor) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * 
 */


var addString = function addString(list, string) {
  return list.push(Glamor.createElement("span", {
    key: list.length + "-" + string
  }, string));
};

var toCommaSeparatedList = function toCommaSeparatedList(array, renderCallback) {
  if (array.length <= 1) {
    return array.map(renderCallback);
  }

  var list = [];
  array.forEach(function (item, index) {
    if (index === array.length - 1) {
      addString(list, array.length === 2 ? ' and ' : ', and ');
      list.push(renderCallback(item, index));
    } else if (index > 0) {
      addString(list, ', ');
      list.push(renderCallback(item, index));
    } else {
      list.push(renderCallback(item, index));
    }
  });
  return list;
};

/* harmony default export */ __webpack_exports__["default"] = (toCommaSeparatedList);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! glamor/react */ "./node_modules/glamor/react.js")))

/***/ }),

/***/ "@reach/router":
/*!********************************!*\
  !*** external "@reach/router" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__reach_router__;

/***/ }),

/***/ "core-js/modules/es6.array.find":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.array.find" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_find__;

/***/ }),

/***/ "core-js/modules/es6.array.iterator":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__;

/***/ }),

/***/ "core-js/modules/es6.array.sort":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.array.sort" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__;

/***/ }),

/***/ "core-js/modules/es6.function.name":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.function.name" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__;

/***/ }),

/***/ "core-js/modules/es6.map":
/*!******************************************!*\
  !*** external "core-js/modules/es6.map" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__;

/***/ }),

/***/ "core-js/modules/es6.object.assign":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.object.assign" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__;

/***/ }),

/***/ "core-js/modules/es6.object.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.object.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_to_string__;

/***/ }),

/***/ "core-js/modules/es6.regexp.constructor":
/*!*********************************************************!*\
  !*** external "core-js/modules/es6.regexp.constructor" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__;

/***/ }),

/***/ "core-js/modules/es6.regexp.match":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.regexp.match" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_match__;

/***/ }),

/***/ "core-js/modules/es6.regexp.replace":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.regexp.replace" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_replace__;

/***/ }),

/***/ "core-js/modules/es6.regexp.split":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.regexp.split" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__;

/***/ }),

/***/ "core-js/modules/es6.regexp.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.regexp.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__;

/***/ }),

/***/ "core-js/modules/es6.string.ends-with":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.string.ends-with" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__;

/***/ }),

/***/ "core-js/modules/es6.string.includes":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.string.includes" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_includes__;

/***/ }),

/***/ "core-js/modules/es6.string.iterator":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.string.iterator" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__;

/***/ }),

/***/ "core-js/modules/es6.string.link":
/*!**************************************************!*\
  !*** external "core-js/modules/es6.string.link" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_link__;

/***/ }),

/***/ "core-js/modules/es6.string.small":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.string.small" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_small__;

/***/ }),

/***/ "core-js/modules/es7.array.includes":
/*!*****************************************************!*\
  !*** external "core-js/modules/es7.array.includes" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es7_array_includes__;

/***/ }),

/***/ "core-js/modules/web.dom.iterable":
/*!***************************************************!*\
  !*** external "core-js/modules/web.dom.iterable" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "minimatch":
/*!****************************!*\
  !*** external "minimatch" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_minimatch__;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_helmet__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map