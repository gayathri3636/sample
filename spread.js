let a = [3, 4, 5];
let b = [1, 2, ...a, 6];
console.log(b);  // [1, 2, 3, 4, 5, 6]

function foo(a, b, c) { console.log(`a=${a}, b=${b}, c=${c}`)} 
let data = [5, 15, 2];
foo( ...data); // a=5, b=15, c=2

let car = { type: 'vehicle ', wheels: 4};
let fordGt = { make: 'Ford', ...car, model: 'GT'};
console.log(fordGt); // {make: 'Ford', model: 'GT', type: 'vehicle', wheels: 4}

let a = [1, 2, 3];
let b = [ ...a ];
let c = a;
b.push(4);
console.log(a);  // [1, 2, 3]
console.log(b);  // [1, 2, 3, 4] referencing different arrays
c.push(5);
console.log(a);  // [1, 2, 3, 5] 
console.log(c);  // [1, 2, 3, 5] referencing the same array

function foo(...args) {
    console.log(args); 
} 
foo( 'car', 54, 'tree');  //  [ 'car', 54, 'tree' ] 