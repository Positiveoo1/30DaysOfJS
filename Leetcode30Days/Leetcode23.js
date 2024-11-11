//2695. Array Wrapper easy
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.getSum = function() {
    return this.nums.reduce((acc, num) => acc + num, 0);
};

ArrayWrapper.prototype.valueOf = function() {
    return this.getSum();
};

ArrayWrapper.prototype.toString = function() {
    return `[${this.nums.join(',')}]`;
};


