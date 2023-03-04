// creat files--------------------------------

const fs = require('fs');
const path = require('path');
const xyz = path.join(__dirname, './files');
const xyzData = `${xyz}/Apple.txt`;

fs.writeFileSync(xyzData, 'This is a simple ');

// read files -------------------------------

// fs.readFile(xyzData, 'utf8', (err, itme) => {
//     console.log(itme);
// })

// append files ----------------------------

// fs.appendFile(xyzData, 'And files name apple.txt', (err) => {
//     if (!err) console.log("files updated");
// });

// rename files---------------------------

// fs.rename(xyzData, `${xyz}/data.txt`, (err) => {
//     if (!err) console.log("files name is updated");
// })

// dilit files------------------------

// fs.unlinkSync(`${xyz}/data.txt`);