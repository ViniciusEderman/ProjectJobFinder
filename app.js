const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./db/connectDb');
const bodyParser = require('body-parser');


app.listen(PORT, () => {
    console.log(`The serv run at: ${PORT}`);
});

app.use(bodyParser.urlencoded({ extended: false}));

//db connect:
db
    .authenticate()
    .then(() => {
        console.log('The db is connected');
    })
    .catch(error => {
        console.log(error);
    })
;

// routes:
app.get('/', (req, res) => {
    res.send("The serv is okay!");
});

// job routes
app.use('/jobs', require('./routes/jobs'));