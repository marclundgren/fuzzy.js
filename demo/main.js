(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var fuzzy = require('./fuzzy');

var podcasts = [{
    title: 'Art of Charm',
    description: 'Confidence | Relationship & Dating Advice | Biohacking | Productivity'
  },{
    title: 'Hello Internet',
    description: 'CGP Grey and Brady Haran talk about YouTube, life, work, whatever.'
  },{
    title: 'Serial',
    description: 'Serial unfolds one story - a true story - over the course of a whole season.'
  },{
    title: 'Sound Opinions',
    description: 'Each week, Jim and Greg bring you the latest music news and reviews.'
  },{
    title: 'Theory of Everything',
    description: 'Personally connecting the dots. All of them.'
  }

];

var podcastSearch = fuzzy(podcasts, 'title');

var results = podcastSearch('of');

console.log(results);
// Art of Charm
// Theory of Everything

},{"./fuzzy":2}],2:[function(require,module,exports){
// Fuzzy utility

/* jshint strict:false */

// var _ = require('lodash');

function testinput(re, str){
  return re.test(str);
}

var filter = require('array-filter');
// var includes = require('array-includes');

var fuzzy = function(items, key) {
  return function (query) {
    query = query.toLowerCase();

    var re = new RegExp(query, 'i');

    return filter(items, function(item) {
      var term = item[key].toLowerCase();

      // debugger;

      return re.test(item[key]);

      // var result = term.test(new RegExp('(' + query + ')', 'gi'));
      // console.log('result: ', result);

      // return result;

      // return _.contains(term, query);
    });
  };
};

module.exports = fuzzy;

},{"array-filter":3}],3:[function(require,module,exports){

/**
 * Array#filter.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @param {Object=} self
 * @return {Array}
 * @throw TypeError
 */

module.exports = function (arr, fn, self) {
  if (arr.filter) return arr.filter(fn);
  if (void 0 === arr || null === arr) throw new TypeError;
  if ('function' != typeof fn) throw new TypeError;
  var ret = [];
  for (var i = 0; i < arr.length; i++) {
    if (!hasOwn.call(arr, i)) continue;
    var val = arr[i];
    if (fn.call(self, val, i, arr)) ret.push(val);
  }
  return ret;
};

var hasOwn = Object.prototype.hasOwnProperty;

},{}]},{},[1]);
