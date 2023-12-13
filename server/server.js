// Budget API

const express = require('express');
const app = express();
const port = 3000;

app.use('/',express.static('public'));

/*const budget = {
    myBudget: [
        {
            title: 'Eat out',
            budget: 25
        },
        {
            title: 'Rent',
            budget: 275
        },
        {
            title: 'Grocery',
            budget: 110
        },
    ]
};*/
var fs=require('fs');
var data=fs.readFileSync('budget.json', 'utf8');
var words=JSON.parse(data);



app.get('/budget', (req, res) => {
    res.json(words);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});