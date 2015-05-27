// ------------------------
// Person (Abstract)
var Person = function(name) {
  this.name = name;
  this.canTalk = true;
};

Person.prototype.is_a = function() {
  console.log(this.name + " says:");
}

Person.prototype.greet = function() {
  this.is_a();
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name);
  }
};

// ------------------------
// Customer (Concrete)
var Employee = function(name, title) {
  Person.call(this);
  this.name = name;
  this.title = title;
};

Employee.prototype = Object.create(Person.prototype);
// Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.greet = function() {
  this.is_a();
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name + ', the ' + this.title);
  }
};

var bob   = new Employee('Bob', 'Builder');
bob.greet();

// ------------------------
// Customer
var Customer = function(name) {
  Person.call(this);
  this.name = name;
};

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

var joe   = new Customer('Joe');
joe.greet();

// ------------------------
// Mime
var Mime = function(name) {
  Person.call(this);
  this.name = name;
  this.canTalk = false;
};

Mime.prototype = Object.create(Person.prototype);;
Mime.prototype.constructor = Mime;

var mime  = new Mime('Mime');
mime.greet();