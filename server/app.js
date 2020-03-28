const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require("cors");

const app = express();

const schema = require("./schema/schema");

// Allow Cors
app.use(cors());

app.use('/query',graphqlHTTP({
    schema,
    graphiql:true
}));

const mongoose = require("mongoose");
const URL_MONGO = "mongodb://localhost:27017/gql";

mongoose.connect(URL_MONGO, { useNewUrlParser: true });

mongoose.connection.once('open', () => {
    console.log("connected to db")
});

app.listen(4000,()=>{
    console.log('Now listening for requests on Port 4000');
})