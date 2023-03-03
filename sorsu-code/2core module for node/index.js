console.log("Core Module");

/*


global= je banava no pade e global
       EX:- console.log()...

non-global =  je banava pade
       EX:- const fs = require('fs');
            fs.writeFileSync("Hello.txt","code stoep");
*/
console.log("Welcome");
// file systam
const fs = require('fs');
fs.writeFileSync("./sorsu-code/2core module for node/Hello.txt", "code stoep");







