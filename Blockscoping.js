var a = 'car' ;
{
    let a = 5;
    console.log(a) 
}
console.log(a) 


for (let i = 1; i < 5; i++){
    setTimeout(() => { console.log(i); }, 1000);
}

for (var i = 1; i < 5; i++){
    setTimeout(() => { console.log(i); }, 1000);
}

{ 
    console.log(a); // undefined
    console.log(b); // ReferenceError
    var a = 'car';
    let b = 5;
}

