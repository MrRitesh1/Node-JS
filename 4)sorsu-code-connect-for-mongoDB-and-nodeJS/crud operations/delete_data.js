const dataBaseConnect = require('./dataBase_connect');

const deleteData = async () => {
    // oan data delete
    let data = await dataBaseConnect();
    let result = await data.deleteOne(
        { age: '22' }
    );
    // maltipal Data Delete
    // let result = await data.deleteMany(
    //     { age: '22' }
    // );
    console.log(result);
}

deleteData();