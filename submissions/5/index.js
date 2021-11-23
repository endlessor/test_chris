// This's Because

//  1. The timeout function callbacks are all running well after the completion
// of the loop. In fact, as timers go, even if it was setTimeout(.., 0) on each
// iteration, all those function callbacks would still run strictly after the
// completion of the loop, that's why 3 was reflected!

//  2. all two of those functions, though they are defined separately in each
// loop iteration, are closed over the same shared global scope, which has, in
// fact, only one i in it.
//  the Solution's declaring a single scope for each iteration by using a
// self-function executed(anonymous one or better IIFE) and having a copy of i in
// it, like this:

for (var i = 0; i < 5; i++) {
  (function () {
    let j = i;
    setTimeout(function () {
      console.log(j);
    }, i * 1000);
  })();
}
