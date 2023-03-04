// file listig foldar 7

const fs = require('fs');

// creat a file path and malti file

const path = require('path');
const dirPath = path.join(__dirname, './sorsu-code/7show file list/');
console.log(dirPath);

// creat file

// for (i = 0; i < 5; i++) {

//     fs.writeFileSync(dirPath + 'Hello' + i + '.txt', "Hello");
//     // fs.writeFileSync(dirPath + 'Welcome${i}.txt', "Hello");

// }

// fs.writeFileSync('apple.txt', "this is a apple");

fs.readdir(dirPath, (err, file) => {
    console.log(file);
    file.forEach((itam) => {
        console.log(itam);
    })
})