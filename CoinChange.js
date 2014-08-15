var _ = require("underscore");

var countChange = _.memoize(
    function(current, coins) {
        if(current == 0) return 1;
        if(current < 0) return 0;
        return _.reduce(coins, function(memo, coin) {
            return memo + countChange(current - coin, _.filter(coins, function(num) {return num <= coin}));
        }, 0);

    }, function(current, coins) {
        return current + coins + "";
    });

console.log(countChange(100, [50, 25, 10, 5, 1]));