let express = require("express");

let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let apiRoutes = require('./routes');

let app = express();

app.use(bodyParser.json({type: 'application/json'}));

const dbPath = 'mongodb://localhost/firstrest';
const options = {useNewUrlParser: true, useUnifiedTopology: true};
const mongo = mongoose.connect(dbPath, options);

mongo.then(() => {
    console.log('connected'); 
}, error => {
    console.log(error, 'error');
})

const db = mongoose.connection;

if (db) {
    console.log('DB Connected')
} else {
    console.log('Error connecting DB')
}

const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Welcome to Express'));

app.use('/api', bodyParser.json(), apiRoutes)

app.listen(port, () => {
    console.log('Running FirstRest on Port ' + port);
})