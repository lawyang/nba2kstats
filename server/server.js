const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//connect to mongoDB
const mongoose = require('mongoose');
const DATABASE_NAME = 'nbastats';
const DATABASE_URL = process.env.MONGODB_URI || `mongodb://localhost:27017/${DATABASE_NAME}`;
mongoose.connect(DATABASE_URL);

mongoose.connection.on('connected', () => {
    console.log(`Mongoose is connected to ${DATABASE_URL}`);
});

mongoose.connection.on('error', (error) => {
    console.log(`Mongoose connection error: ${error}`);
});

const nbaRouter = require('./routers/nba.router');

app.use( '/basketball', nbaRouter);

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
})