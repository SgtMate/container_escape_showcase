const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');
var multer = require('multer');

// express setup and path definition
const app = express();
const port = 80;
const maxSize = 1 * 1000 * 1000;
const upload = multer().single('image');

app.use(express.static(path.join(__dirname, 'website/public')));

app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, 'website/public/website.html'));
});

app.post('/upload', function(req, res) {
    upload(req, res, function(err) {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('ez gg wp tank diff')
            console.log(req.file);
            res.redirect('/');
        }
    })
})

var server = app.listen(port, () => {
    console.log(`App listening at http://127.0.0.1:${port}`)
})