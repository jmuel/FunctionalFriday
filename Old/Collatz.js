var _ = require('underscore');

var collatzSequence = _.memoize(function(n) {
    if(n <= 1) return 1;
    return collatzSequence(collatz(n)) + 1;
});

var collatz = _.memoize(function(n) {
    if(n % 2 == 1) return 3 * n +1;
    else return n / 2;
});

var longest = 0;

for(var i = 1; i <= 1000000; i++) {
    if(collatzSequence(i) > collatzSequence(longest)) longest = i;
};

console.log(longest, collatzSequence(longest));
