{
    const c = "tree";
    console.log(c);  // tree
    c = 46;  // TypeError! 
}

{
    const d = [1, 2, 3, 4];
    const dave = { name: 'David Jones', age: 32};
    d.push(5); 
    dave.job = "salesman";
    console.log(d);  // [1, 2, 3, 4, 5]
    console.log(dave);  // { age: 32, job: "salesman", name: 'David Jones'}
}

{
    bar(); // works
    function bar() 
}
bar();  // doesn't work

if ( something) {
    function baz() { console.log('I passed') }
} else {
    function baz() { console.log('I didn\'t pass') } 
} 
baz();