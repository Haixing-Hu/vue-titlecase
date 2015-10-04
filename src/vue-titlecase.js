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
  var titlecase = require("./titlecase.js");
  // register the titlecase filter
  Vue.filter("titlecase", function(value) {
    return titlecase(value);
  });
  // add the toTitleCase() method to String class.
  String.prototype.toTitleCase = function() {
    return titlecase(this);
  }
};