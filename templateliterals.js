var fName = 'Peter', sName = 'Smith', age = 43, job= 'photographer';
//using backtick
var a = 'Hi, I\'m ' + fName + ' ' + sName + ', I\'m ' + age + ' and work as a ' + job + '.';
//can have variables inserted using ${variable}
var b = `Hi, I'm ${ fName } ${ sName }, I'm ${ age } and work as a ${ job }.`;
console.log(b);
console.log(a);