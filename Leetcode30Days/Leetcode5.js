//2635. Apply Transform Over Each Element in Array EASY
var map = function(arr, fn) {
    let transformedArray = [];
   
   for (let i = 0; i < arr.length; i++) {
       transformedArray.push(fn(arr[i], i));
   }
   
   return transformedArray;
};