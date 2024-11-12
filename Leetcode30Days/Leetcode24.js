//3340. Check Balanced String  EASY
var isBalanced = function(num) {
    let evenSum = 0;
    let oddSum = 0;
    
    for (let i = 0; i < num.length; i++) {
        const digit = parseInt(num[i], 10);  
        if (i % 2 === 0) {
            evenSum += digit; 
        } else {
            oddSum += digit;   
        }
    }
    
    return evenSum === oddSum;
};4