const mongoose = require('mongoose');

const mongoURI="mongodb://localhost:27017/?readPreference=primary&tls=false&directConnection=true&appName=MongoDB%25Compass"

const connectTOMongo = () => {
    mongoose.connect(mongoURI, ()=> {
        console.log("Connected to Mongo DB successfully");
    })
}

module.exports = connectTOMongo;