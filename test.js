// Use of anonymous function as argument
var anon = function(anon_func, string) {
  anon_func(string);
}

console.log("First here");

setTimeout(function(){ 

  anon(function(arg) {
    console.log(arg);
  }, "Second here");

}, 2000);

console.log("Third here");
