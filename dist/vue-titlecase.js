/*!
 * vue-titlecase v0.2.0
 * (c) 2016 Haixing Hu
 * Released under the MIT License.
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/******************************************************************************
	 *
	 *    Copyright (c) 2015, Haixing Hu
	 *
	 *    Licensed under the MIT license.
	 *
	 ******************************************************************************/
	
	/**
	 * A plugin of Vue.js providing a function for titlecase strings.
	 *
	 * @param Vue
	 *    the Vue class.
	 * @author Haixing Hu
	 */
	exports.install = function (Vue) {
	  // get the titlecase function
	  var titlecase = __webpack_require__(1);
	  // register the titlecase filter
	  Vue.filter("titlecase", function(value) {
	    return titlecase(value);
	  });
	  // add the toTitleCase() method to String class.
	  String.prototype.toTitleCase = function() {
	    return titlecase(this);
	  }
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	/******************************************************************************
	 *
	 *    Copyright (c) 2015, Haixing Hu
	 *
	 *    Licensed under the MIT license.
	 *
	 ******************************************************************************/
	
	/**
	 * Articles, conjunctions, and prepositions less than six letters long are
	 * changed to lower case unless they are at the beginning of a sentence.
	 */
	var MINOR_WORDS = [
	  'A',
	  'Abaft',
	  'About',
	  'Above',
	  'Afore',
	  'After',
	  'Along',
	  'Amid',
	  'Among',
	  'An',
	  'And',
	  'Am',
	  'Apud',
	  'Are',
	  'As',
	  'Aside',
	  'At',
	  'Atop',
	  'Below',
	  'But',
	  'By',
	  'Circa',
	  'Down',
	  'For',
	  'From',
	  'Given',
	  'In',
	  'Into',
	  'Is',
	  'Lest',
	  'Like',
	  'Mid',
	  'Midst',
	  'Minus',
	  'Near',
	  'Next',
	  'Nor',
	  'Of',
	  'Off',
	  'On',
	  'Onto',
	  'Or',
	  'Out',
	  'Over',
	  'Pace',
	  'Past',
	  'Per',
	  'Plus',
	  'Pro',
	  'Qua',
	  'Round',
	  'Sans',
	  'Save',
	  'Since',
	  'So',
	  'Than',
	  'The',
	  'Thru',
	  'Till',
	  'Times',
	  'To',
	  'Under',
	  'Until',
	  'Unto',
	  'Up',
	  'Upon',
	  'Via',
	  'Vice',
	  'With',
	  'Worth',
	  'Yet'
	];
	
	/**
	 * Certain words such as initialisms or acronyms should be left uppercase.
	 */
	var ACRONYMS = ['Id', 'Tv', 'Html', 'Xml'];
	
	/**
	 * Titlecase the string representation of a value.
	 *
	 * @param value
	 *    a value.
	 * @return
	 *    the string representation of the value, in the titlecase.
	 * @author Haixing Hu
	 * @see: http://grammar.about.com/od/tz/g/Title-Case.htm
	 */
	module.exports = function(value) {
	  if (value === undefined || value === null) {
	    return "";
	  }
	  var str = value.toString();
	  //  make each word capitalize
	  str = str.replace(/([^\W_]+[^\s-]*) */g, function(s) {
	    return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase();
	  });
	  //  Certain minor words should be left lowercase unless they are the first or
	  //  last words in the string.
	  var i, j, regexp;
	  for (i = 0, j = MINOR_WORDS.length; i < j; i++) {
	    regexp = new RegExp('\\s' + MINOR_WORDS[i] + '\\s', 'g');
	    str = str.replace(regexp, function(s) {
	      return s.toLowerCase();
	    });
	  }
	  //  Certain words such as initialisms or acronyms should be left uppercase.
	  for (i = 0, j = ACRONYMS.length; i < j; i++) {
	    regexp = new RegExp('\\b' + ACRONYMS[i] + '\\b', 'g');
	    str = str.replace(regexp, ACRONYMS[i].toUpperCase());
	  }
	  return str;
	};

/***/ }
/******/ ]);
//# sourceMappingURL=vue-titlecase.js.map