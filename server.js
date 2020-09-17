'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const csvJSON = require('./fuction.js')
const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('index.ejs');
})
app.get('/create', (req, res) => {
    res.render('create.ejs');
    const newFile = JSON.stringify(csvJSON(req.body), null, 4);
    console.log(newFile);

})
app.post('/create', (req, res) => {
    res.render('create.ejs');
    
})

app.listen(3000, () => {
    console.log('app listen on port..')
})