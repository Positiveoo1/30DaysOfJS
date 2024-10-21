//2665. Counter II Easy
var createCounter = function(init) {
    let currentValue = init; 

return {
    increment: function() {
        currentValue++; 
        return currentValue;
    },
    decrement: function() {
        currentValue--; 
        return currentValue; 
    },
    reset: function() {
        currentValue = init; 
        return currentValue; 
    }
};
};
