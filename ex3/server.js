const express = require('express');
const app = express();
const path = require('path');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index',{
    title: 'View Engine',
    items: ['Item1','Item2','Item3'],
})
});

const port = 3000;
app.listen(port,()=>{
    console.log(`Server started at ${port}`);
})
