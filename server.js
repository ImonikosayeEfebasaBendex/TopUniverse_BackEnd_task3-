const express = require('express');
const bodyparser = require('body-parser');
const helmet = require("helmet");
const morgan = require('morgan')
const cors = require('cors')
const port = 8080;
 
//create express App
const app = express();

app.use(cors())

app.use(morgan('combined'))

app.use(helmet());

//parse request of content - type - application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({extended: true}));

//parse request of content-type - application/json
app.use(bodyparser.json());

//define a simple route
app.get('/', (req, res)=> {
    res.json({'message': 'WELCOME TO MY QRCODE PROFILE PAGE!!!'});
});

//listen for requests
app.listen(port, () => {
    console.log(`server listening on port ${port}...`)
});

//configuring the database
const dbConfig = require('./db/conn.js');
const mongoose = require('mongoose');

//setting mongoose as a promise to catch error and success response during connection
mongoose.Promise = global.Promise;

//connect to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(()=> {
    console.log('successfully Connected to MongoDB database...');
}).catch(err => {
    console.log('error connecting to MongoDB database. Exiting now...', err);
    process.exit();
})