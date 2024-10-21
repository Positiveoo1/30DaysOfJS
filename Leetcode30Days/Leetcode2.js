//2620. Counter EASY
var createCounter = function(n) {
    return function() {
        return n++;
    };
};
