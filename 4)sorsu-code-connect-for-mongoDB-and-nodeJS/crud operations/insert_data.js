const dataBaseConnect = require('./dataBase_connect');
// insert data 
const insert = async () => {
    const db = await dataBaseConnect();
    // console.log(db);

    const result = await db.insertMany(
        [
            { name: 'Doremon', age: 24 },
            { name: 'Nobita', age: 18 },
            { name: 'Jery', age: 20 }
        ]
    );
    console.log(result);

    // if (result.acknowledged) {
    //     console.log("Data Updeted");
    // }
}

insert();