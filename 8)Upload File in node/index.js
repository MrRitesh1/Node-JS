// npm i multer  Packages

const express = require('express');
const multer = require('multer');
const app = express();

const uploadDB = multer({
    storage: multer.diskStorage({
        destination: function (req, resp, cb) {
            cb(null, "8)Upload File in node/");
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }

    })
}).single("usar_file");

app.post('/upload', uploadDB, async (req, resp) => {
    resp.send("File Uploadet....");
});
app.listen(5000);