// 2715 TImeout Cancellation EASY
var cancellable = function(fn, args, t) {
    const timeoutId = setTimeout(() => fn(...args), t);

   const cancelFn = () => clearTimeout(timeoutId);

   return cancelFn;
};