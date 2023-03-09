const dataBaseConnect = require('./dataBase_connect');


const updateData = async () => {
    let data = await dataBaseConnect();

    // onaUpdate
    let result = await data.updateOne(
        { name: 'Ritesh' },
        {
            $set: { name: 'Vivek' }
        }
    );

    // all Update
    // let result = await data.update(
    //     { name: 'Ritesh' },
    //     {
    //         $set: { name: 'Vivek' }
    //     }
    // );
    console.log(result);

}

updateData();