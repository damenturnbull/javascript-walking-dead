// Use of anonymous function as argument
var quote_a_line = function( anonymous_func, quote ) {
  console.log("Argument is of type: " + typeof anonymous_func);
  // 2. Second argument passed back to anonymous function
  anonymous_func(quote);
}

// 1. Functionc all with first argument is an anonymous function
quote_a_line( 
  function( quote ) {
    // 3. Function executed
    console.log(quote);
  }, 
  "People in hell want Slurpees!");