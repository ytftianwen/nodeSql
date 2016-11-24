const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

app.set('views', path.join('./client/views'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use('/client',express.static('./client'));

app.get('/', (req, res) => {
    // res.send({name:'Tom'});
    res.render('index', {name: 'Tom'});
    // res.json({name:'tom'})
});

app.listen(3000, (req, res) => {
    console.log('port 29 stared')
});



