// Let's create some abstract objects
var walker    = { kind: 'walker' }
var person    = { kind: 'person' }

// Next, a concrete object
var bob       = { age: 38 };

// Let's say bob's 'prototype' is a person
// bob now has properties of himself and person
bob.__proto__ = person;
console.log( bob.age );  // 38
console.log( bob.kind ); // person

// Looks like bob's been bit. I guess he's "tainted meat"...
bob.__proto__ = walker;
console.log( bob.kind ); // walker