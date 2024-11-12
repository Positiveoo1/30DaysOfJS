//2722. Join Two Arrays by ID MEDIUM
var join = function(arr1, arr2) {
    const map = new Map();

 for (const obj of arr1) {
   map.set(obj.id, obj);
 }

 for (const obj of arr2) {
   if (map.has(obj.id)) {
     map.set(obj.id, { ...map.get(obj.id), ...obj });
   } else {
     map.set(obj.id, obj);
   }
 }

 return Array.from(map.values()).sort((a, b) => a.id - b.id);
};