//2704. To Be Or Not To Be EASY
var expect = function(val) {
    return {
        toBe: function(expectedVal) {
            if (val === expectedVal) {
                return true; 
            } else {
                throw new Error("Not Equal"); 
            }
        },
        notToBe: function(expectedVal) {
            if (val !== expectedVal) {
                return true; 
            } else {
                throw new Error("Equal"); 
            }
        }
    };
};