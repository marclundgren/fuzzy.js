fuzzy.js
======

A fuzzy search Functor in JavaScript

## Use

```javascript
var fuzzy = require("fuzzy")

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
    description: '∏ersonally connecting the dots. All of them.'
  }

];

var podcastSearch = fuzzy(podcasts, 'title')

var results = podcastSearch('of');

console.log(results)
// Art of Charm
// Theory of Everything
```
