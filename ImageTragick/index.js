const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const fs = require('fs');
var child_process = require('child_process');

// express setup and path definition
const app = express();
const port = 80;

app.use(fileUpload({ createParentPath: true }));
app.use(express.static(path.join(__dirname, 'website/public')));


app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, 'website/public/website.html'));
});

app.post('/upload', function (req, res) {
    console.log("rofl");
    console.log(req.files.image)

    var fileResult;

    fs.writeFile('./temp/image.jpg', req.files.image.data, () => {
        console.log("file written");

        child_process.execFile(
            "/usr/bin/convert",
            ['./temp/image.jpg', "-resize", "280x150", fileResult],
            (error) => {
                console.log(error);
                res.redirect("/");
                return;
            }
        );

    });

})

var server = app.listen(port, () => {
    console.log(`App listening at http://127.0.0.1:${port}`)
})