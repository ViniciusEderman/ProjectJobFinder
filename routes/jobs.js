
const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.get('/test', (req, res) => {
    res.send('rota is ok');
});

router.post('/add', (req, res) => {
   let {title, salary, company, description,
     email, newJob} = req.body;

    Job.create({
        title,
        description,
        salary,
        company,
        email,
        newJob
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error));
});

module.exports = router;