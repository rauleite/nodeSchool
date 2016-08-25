var util = require('util');

function A() {
    this.name = 'raul';
    this.age = 31;
    this.obj = {a: 'a'}
}

function B() {
    A.call(this);
}

util.inherits(B, A);
a = new A();
b = new B();


console.log('');
console.log('props');
console.log(a.name);
console.log(b.name);
console.log(a.age);
console.log(b.age);
console.log(a.obj);
console.log(b.obj);

console.log('');
console.log('hasOwnProperty');
console.log(a.hasOwnProperty('name'));
console.log(b.hasOwnProperty('name'));
console.log(a.hasOwnProperty('age'));
console.log(b.hasOwnProperty('age'));
console.log(a.hasOwnProperty('obj'));
console.log(b.hasOwnProperty('obj'));

console.log('');
console.log('instanceof');
console.log(a instanceof B);
console.log(b instanceof A);

console.log('');
console.log(a);
console.log(b);
console.log(a.name === b.name);
console.log(a.age === b.age);
console.log(a.obj === b.obj);

b.name = 'stone';
console.log('');
console.log(a);
console.log(b);
console.log(a.name === b.name);
console.log(a.age === b.age);
console.log(a.obj === b.obj);

var novoObj = {a: 'b'};

console.log('');
//a.obj = novoObj;
//b.obj = novoObj;
console.log(a);
console.log(b);
console.log(a.name === b.name);
console.log(a.age === b.age);
console.log(a.obj === b.obj);
console.log('fim');

function object(o) {
    function F() {
    }
    F.prototype = o;
    return new F();
}
// object to inherit from
var parent = {
    name:"Papa"
};
// the new object
var childA = object(parent);
// testing
console.log('');
console.log(childA.name); // "Papa"
console.log(childA.hasOwnProperty('name'));


// parent constructor
function Person() {
    // an "own" property
    this.name = "Adam";
}
// a property added to the prototype
Person.prototype.getName = function () {
    return this.name;
};
// create a new person
var papa = new Person();
// inherit
var kid = object(papa);

// test that both the own property
// and the prototype property were inherited
console.log(kid.getName()); // "Adam"
console.log(kid);




// parent constructor
function Person() {
    // an "own" property
    this.name = "Adam";
}
// a property added to the prototype
Person.prototype.getName = function () {
    return this.name;
};



// inherit
var kid = object(Person.prototype);
console.log(typeof kid.getName); // "function", because it was in the prototype
console.log(typeof kid.name); // "undefined", because only the prototype was inherited
/* Addition to ECMAScript 5 */
var childB = Object.create(parent);
var childB = Object.create(parent, {
    age:{ value:2 } // ECMA5 descriptor
});
console.log(childB.hasOwnProperty("age")); // true
console.log(childB instanceof Person); // false