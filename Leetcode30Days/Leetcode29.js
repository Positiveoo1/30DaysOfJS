//Sort Arrau by Parity
var sortArrayByParity = function(nums) {
    if(nums === 0) {
        return nums;
    }
    const evenNumbers = nums.filter(num => num % 2 === 0);
const oddNumbers = nums.filter(num => num % 2 !== 0);

const result = [...evenNumbers, ...oddNumbers];
    return result;
    
};