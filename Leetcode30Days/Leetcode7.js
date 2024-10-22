//2626. Array Reduce Transformation EASY
var reduce = function(nums, fn, init) {
    let result = init;

 for (let i = 0; i < nums.length; i++) {
     result = fn(result, nums[i]);
 }

 return result;
};