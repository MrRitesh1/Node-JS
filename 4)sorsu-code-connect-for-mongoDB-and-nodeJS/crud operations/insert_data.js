const dataBaseConnect = require('./dataBase_connect');
// insert data 
const insert = async () => {
    const db = await dataBaseConnect();
    // console.log(db);
    const result = await db.insert(
        [
            { name: 'Doremon', age: 24 },
            { name: 'Nobita', age: 23 },
            { name: 'Jery', age: 22 },
        ]
    );
    console.log(result);
    ff

    // if (result.acknowledged) {
    //     console.log("Data Updeted");
    // }
}

insert();