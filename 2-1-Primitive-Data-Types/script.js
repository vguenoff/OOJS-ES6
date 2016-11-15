// Boolean
// String
// Number
// Undefined
// Null
// Symbol

var length = 'hello'.length;
// is the same as
var length2 = new String('hello').length;

console.log(typeof 'length'); //string
console.log(typeof new String('hello')); // object
console.log(typeof String('hello')); // string
console.log(typeof new String('hello').valueOf()); // string

console.log(typeof 10); // number
console.log(typeof Number(10)); // number
console.log(typeof new Number(10)); // object
console.log(typeof new Number(10).valueOf()); // нумбер

var hello = 'hello';
hello.foo = 'foo';
console.log(hello.foo); // undefined

var num = new Number(10);
var sum = 10 + num;
console.log(sum); //20
num.foo = 'foo';
console.log(num.foo);

var value = new Boolean(false);
if (value) { // value is truthy
    console.log('foo');
}










