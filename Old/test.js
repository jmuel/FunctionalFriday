var _ = require('underscore');

var num = 5;

console.log(_.filter([1,2,3,4,5,6], function(val) {return val < num}));

