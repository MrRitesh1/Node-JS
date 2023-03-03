const app = require('./Apps')

var a = 10;
let b = 10;
const c = 10;

console.log(a + b - c);
console.log(app);
console.log("App file R = ", app.r);
console.log("App file Function Z = ", app.z());

var x = 20;
const arr = [1, 2, 3, 4, 5, 6];
console.log("arrey index :- ", arr[0]);


// Aro functions
console.log("Filter = ");
arr.filter((item) => {
    console.log(item);
})
console.log("filter data _____")


let asot = arr.filter((item) => {
    // return item === 3;  // 3 hoy to velua ap se
    return item < 3;
})
console.log(asot);




