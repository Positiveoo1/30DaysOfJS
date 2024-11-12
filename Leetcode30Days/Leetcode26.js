//2942. Find Words Containing Character EASY
var findWordsContaining = function(words, x) {
    let newArr = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            newArr.push(i);
        }
    }
    return newArr;
};
