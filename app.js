const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + 'src'));
app.use(express.static(__dirname));

app.get('', function (req, res) {
    console.log('main');
    res.sendFile(path.resolve(__dirname, 'index.html'));
});


app.get('/search', function (req, res) {    
    console.log('search');
    res.sendFile(path.resolve(__dirname, 'index.html'));
});


app.get('/gif/:id', function (req, res) {    
    console.log('gif');
    res.sendFile(path.resolve(__dirname, 'index.html'));
});
 
app.listen(5500, () => console.log('server is running'));
