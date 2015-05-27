// See excellent reference at: http://benalman.com/news/2010/11/immediately-invoked-function-expression/

// Because this function returns another function that has access to the
// "private" var i, the returned function is, effectively, "privileged."

function makeCounter() {
  // `i` is only accessible inside `makeCounter`.
  var i = 0;

  return function() {
    console.log( ++i );
  };
}

// Note that `counter` and `counter2` each have their own scoped `i`.

var counter = makeCounter();
counter(); // logs: 1
counter(); // logs: 2

var counter2 = makeCounter();
counter2(); // logs: 1
counter2(); // logs: 2

// i; // ReferenceError: i is not defined (it only exists inside makeCounter)





// Create an anonymous function expression that gets invoked immediately,
// and assign its *return value* to a variable. This approach "cuts out the
// middleman" of the named `makeWhatever` function reference.
// 
// As explained in the above "important note," even though parens are not
// required around this function expression, they should still be used as a
// matter of convention to help clarify that the variable is being set to
// the function's *result* and not the function itself.

var counter = (function(){
  var i = 0;

  return {
    get: function(){
      return i;
    },
    set: function( val ){
      i = val;
    },
    increment: function() {
      return ++i;
    }
  };
}());

// `counter` is an object with properties, which in this case happen to be
// methods.

counter.get(); // 0
counter.set( 3 );
counter.increment(); // 4
counter.increment(); // 5

// counter.i; // undefined (`i` is not a property of the returned object)
// i; // ReferenceError: i is not defined (it only exists inside the closure)
var person = (function(arg){
  var _name;
  console.log('fired on invocation');

  return {
    get_name: function() {
      return _name;
      console.log('first when called');
    },

    set_name: function(name) {
      _name = name;
    }
  };
}());

// person.set_name("Damen");
// console.log(person.get_name());
// console.log(person.name); // undefined







