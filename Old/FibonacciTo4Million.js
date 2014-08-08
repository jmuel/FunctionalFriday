var _ = require('underscore-contrib');

var fibonacci = _.memoize(function(n, x) {
	if(n < 2) return n;
	else return fibonacci(n-1) + fibonacci(n-2);
});

var fibBuilder = function(start, max, acc) {
	if(fibonacci(start) < max) return fibBuilder(start + 1, max, _.union(acc, [fibonacci(start)]));
	return acc;
	
}

console.log(_.chain(fibBuilder(1, 4000000, []))
	.filter(function(num) {return num % 2 == 0;})
	.reduce(function(memo, num) {return memo + num;})
	.value()
)
