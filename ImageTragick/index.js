const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var multer = require('multer');

// express setup and path definition
const app = express();
app.use(express.json());

app.get('/', method1);
app.get('/styles.css', method2);
app.get('/script.js', method3);
app.post('/upload', method4);

async function getHtml(req, res, next) { }
async function getCss(req, res, next) { }
async function getJs(req, res, next) { }
async function uploadImage(req, res, next) {
// get a user uploaded file and resize it
}

app.listen(80);