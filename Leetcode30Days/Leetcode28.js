//917. Reverse Only Letters Easy
var reverseOnlyLetters = function(s) {
    let arr = Array.from(s);  
    let left = 0;
    let right = arr.length - 1;
    let regEx = /[a-zA-Z]/;

    while (left < right) {
        if (!regEx.test(arr[left])) {
            left++;
        }
        else if (!regEx.test(arr[right])) {
            right--;
        }
        else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr.join("");
};
