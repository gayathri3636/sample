let a = 4, b = 7;
let c = { a: a, b: b };
let concise = { a, b };
console.log(c, concise) // {a: 4, b: 7}, {a: 4, b: 7}

function foo() {
    return {
        name: 'Anna', 
        age: 56,
       job: { company: 'Tesco', title: 'Manager' }
    };
} 
// pre ES6
let a = foo(), name = a.name, age = a.age, company = a.job.company;
// ES6 destructuring and concise parameters 
let { name, age, job: {company}} = foo();