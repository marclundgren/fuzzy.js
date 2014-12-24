// Fuzzy utility

/* jshint strict:false */

var _ = require('lodash');

var fuzzy = function(items, key) {
  return function (query) {
    query     = query.toLowerCase();
    return _.filter(items, function(item) {
      var term = item[key].toLowerCase();

      return _.contains(term, query);
    });
  };
};

module.exports = fuzzy;
