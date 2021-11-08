const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

console.log(process.env)

const app = express();
app.use(express.json());


// connect to db
const dbURI = process.env.ATLAS_URI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected to mongodb'))  
    .catch((err) => console.log(err));


// start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server started on port ${port}`);
});