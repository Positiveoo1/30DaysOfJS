//2138. Divide a String Into Groups of Size k EASY
var divideString = function(s, k, fill) {
    let newArr = [];
    for (let i = 0; i < s.length; i += k) {
        let part = s.slice(i, i + k);
        
        if (part.length < k) {
            part = part + fill.repeat(k - part.length);
        }
        
        newArr.push(part);
    }
    
    return newArr;
};