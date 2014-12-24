// Fuzzy utility

/* jshint strict:false */

var _ = require('lodash');

var fuzzy = function(items ,query) {
  query     = query.toLowerCase();

  return _.filter(items, function(item) {
    var title = item.title.toLowerCase();

    return _.contains(title, query);
  });
};

module.exports = fuzzy;
