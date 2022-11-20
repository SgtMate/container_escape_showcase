const express = require('express');
const path = require('path');
const multer = require('multer');
var child_process = require('child_process');

// express setup and path definition
const app = express();
const port = 80;
const upload = multer().single('image');

app.use(express.static(path.join(__dirname, 'website/public')));

app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, 'website/public/website.html'));
});

app.post('/upload', function (req, res) {
    var fileResult;
    upload(req, res, function (err) {
        if (err) {
            console.log(err);
            return;
        } else {
            child_process.execFile(
                "/usr/bin/convert",
                ['./rce1.jpg', "-resize", "280x150", fileResult],
                (error) => {
                    res.redirect("/");
                }
            );
        }
    })
})

var server = app.listen(port, () => {
    console.log(`App listening at http://127.0.0.1:${port}`)
})