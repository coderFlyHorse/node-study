const _ = require('lodash');

let arr =  _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);

console.log(arr);