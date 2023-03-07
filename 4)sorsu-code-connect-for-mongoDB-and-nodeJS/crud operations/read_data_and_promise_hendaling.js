const dataBaseConnect = require('./dataBase_connect');

// Promise hendaling and read file
// EX:1
dataBaseConnect().then((resp) => {
    resp.find().toArray().then((datas) => {
        console.warn(datas);
    })
})

// Promise hendaling and red file
// EX:2
// const main = async () => {
//     let data = await dataBaseConnect();
//     data = await data.find().toArray();
//     console.log(data);
// }

// main();