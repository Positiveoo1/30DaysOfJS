//2723. Add Two Promises
var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1, promise2])
       .then(values => values[0] + values[1]);
};