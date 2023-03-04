// Asynchronous no vet 


console.log('Start exe....');// 1 second

setTimeout(() => {
    console.log('logic exe....'); // 5 second

}, 2000);

console.log('complete exe...'); // 2 second



// Handle Asynchronous problem----------
let a = 10;
let wetigData = new Promise((resolwe, reject) => {
    setTimeout(() => {
        resolwe(40); // 5 second
    }, 2000);
});
wetigData.then((data) => {
    b = data
    console.log('Data exe...', a + b);
});
