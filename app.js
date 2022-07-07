const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const PORT = 3000;
const db = require('./db/connectDb');
const bodyParser = require('body-parser');


app.listen(PORT, () => {
    console.log(`The serv run at: ${PORT}`);
});

// using bodyParser:
app.use(bodyParser.urlencoded({ extended: false}));

//using headlebars:
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// static folder:
app.use(express.static(path.join(__dirname, 'public')));

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
    res.render('index');
});

// job routes
app.use('/jobs', require('./routes/jobs'));