//2666. Allow One Function Call EASY
function once(fn) {
    let called = false;
    let result;
  
    return function(...args) {
      if (!called) {
        called = true;
        result = fn(...args);
        return result;
      }
      return undefined;
    };
  }
  
  
  