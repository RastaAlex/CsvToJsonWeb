'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const csvJSON = require('./csvToJson.js')
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('index.ejs');
})
app.get('/convert', (req, res) => {
    res.render('convert.ejs', {
        json: 'he are will  be json'
    });
})
app.post('/convert', (req, res) => {
    const {text} = req.body;
    const json = csvJSON(text);
    console.log(json);
    res.send(json);

    
})

app.listen(3000, () => {
    console.log('app listen on port..')
})