/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ (() => {

eval("// // create function to render actual DOM : passing vdom as node\n// function createDOM(node) {\n//   // 1 element of vdom =  considered as node\n//   // if node type is consists of string\n//   if (typeof node === 'string') {\n//     // return as text\n//     return document.createTextNode(node);\n//   }\n//   // define node tag to create element in DOM \n//   const element = document.createElement(node.tag);\n//   // about children of node\n//   node.children\n//     .map(createDOM) //mapping all children no matter how many\n//     .forEach(element.appendChild.bind(element)); //bind elements to call children after children\n//   return element;\n// }\n// // create virtual Dom : consist of 3 elements\n// const vdom = {\n//   tag: 'p',\n//   props: {},\n//   children: [\n//     {\n//       tag: 'h1',\n//       props: {},\n//       children: [\"React 만들기\"],\n//     },\n//     {\n//       tag: 'ul',\n//       props: {},\n//       children: [\n//         {\n//           tag: 'li',\n//           props: {},\n//           children: [\"첫 번째 아이템\"]\n//         },\n//         {\n//           tag: 'li',\n//           props: {},\n//           children: [\"두 번째 아이템\"]\n//         },\n//         {\n//           tag: 'li',\n//           props: {},\n//           children: [\"세 번째 아이템\"]\n//         },\n//       ]\n//     }\n//   ],\n// };\n// // render in the document. DOM \n// document\n//   .querySelector('#root')\n//   .appendChild(createDOM(vdom));  \n// create function to call vdom in real Dom\nvar createDOM = function createDOM(node) {\n  if (typeof node === 'string') {\n    return document.createTextNode(node);\n  } // define element by tag\n\n\n  var element = document.createElement(node.tag); // show all children by using map and forEach\n\n  node.children.map(createDOM).forEach(element.appendChild.bind(element));\n  return element;\n}; // create vdom : simple obj \n\n\nvar vdom = {\n  tag: \"p\",\n  props: {},\n  children: [{\n    tag: \"h1\",\n    props: {},\n    children: [\"Hello This is Vdom\"]\n  }, {\n    tag: \"ul\",\n    props: {},\n    children: [{\n      tag: \"li\",\n      props: {},\n      children: [\"1 item\"]\n    }, {\n      tag: \"li\",\n      props: {},\n      children: [\"2 item\"]\n    }, {\n      tag: \"li\",\n      props: {},\n      children: [\"3 item\"]\n    }]\n  }]\n}; // show vdom contained in realDOM\n\ndocument.querySelector(\"#root\").appendChild(createDOM(vdom));\n\n//# sourceURL=webpack://pract/./app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app.js"]();
/******/ 	
/******/ })()
;