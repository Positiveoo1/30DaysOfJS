//2677. Chunk Array
var chunk = function(arr, size) {
    let chunked = [];
    for(let i = 0; i < arr.length; i+=size) {
        const chunk = arr.slice(i, i + size);
    chunked.push(chunk);
    }
    return chunked;
};