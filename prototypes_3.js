function Derp(foo) {
    this.foo = foo;
}
Derp.prototype.getFoo = function() {
    return this.foo;
};
Derp.prototype.setFoo = function(foo) {
    this.foo = foo;
};
var inst = new Derp('bar');
inst.getFoo(); // => 'bar'
inst.setFoo('baz');
inst.getFoo(); // => 'baz'