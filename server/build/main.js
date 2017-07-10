require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_dbconnecter__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_getters__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_saver__ = __webpack_require__(9);




var express = __webpack_require__(5);
var app = express();
var http = __webpack_require__(6).Server(app);
var port = '1337';

var db = '';

__WEBPACK_IMPORTED_MODULE_0__modules_dbconnecter__["a" /* connectToDB */]().then(function (res) {
  db = res.db;
});

app.use(express.static(__dirname + '/public'));
app.all('/', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.get('/getPages', function (req, res) {
  __WEBPACK_IMPORTED_MODULE_1__modules_getters__["a" /* getPages */]().then(function (res) {
    console.log(res);
  });
});

app.listen(port, function () {
  console.log('Our app is running on http://localhost:' + port);
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src"))

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return connectToDB; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__secrets_auth__ = __webpack_require__(4);
var mongoose = __webpack_require__(3);


function connectToDB() {
  return new Promise(function (resolve, reject) {
    var promise = mongoose.connect('mongodb://root:' + __WEBPACK_IMPORTED_MODULE_0__secrets_auth__["a" /* pass */] + '@ds123662.mlab.com:23662/nassel', {
      useMongoClient: true
    });
    promise.then(function (db) {
      resolve(db);
    });
    promise.catch(function (err) {
      reject(err);
    });
  });
}



/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pass; });
var pass = 'pass';

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPages; });
// const mongoose = require('mongoose')
// import {pass} from '../../../secrets/auth'
var pageModel = __webpack_require__(8);

function getPages(db) {
  return new Promise(function (resolve, reject) {
    pageModel.find(function (err, pagesFound) {
      if (err) {
        console.log(err);
        reject(err);
      } else if (pagesFound.length === 0) {
        resolve('No pages found');
      } else if (pagesFound) {
        console.log('found: ' + pagesFound.length + 'pages');
        resolve(pagesFound);
        return pagesFound;
      }
    });
  });
}



/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(3);
var pageS = mongoose.Schema({
  name: String,
  text: String
});

var Page = mongoose.model('page', pageS);

module.exports = Page;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export savePage */
// const mongoose = require('mongoose')
// import {pass} from '../../../secrets/auth'
var pageModel = __webpack_require__(8);

function savePage(page) {
  return new Promise(function (resolve, reject) {
    var newPage = new pageModel(page);
    newPage.save(function (err) {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve('saved');
    });
  });
}



/***/ })
/******/ ]);
//# sourceMappingURL=main.map