var express = require('express');
var fs = require('fs');


var app = express();
app.use(express.static('./public'))

var html = fs.readFileSync('./public/index.html','utf-8');
var prohtml = fs.readFileSync('./public/producthtml.html','utf-8');
var body = fs.readFileSync('./public/producthtml.html','utf-8');
var products = JSON.parse(fs.readFileSync('./Data/product.json','utf-8'));

var list = [];

products.find((el) => {
    var change = prohtml.replace('%price%',el.price)
                        .replace('%model%',el.modeName)
                        .replace('%img%',el.productImage);
    
    list.push(change);
})

// console.log(list);
var mainpage  = body.replace('%product%',list.join(''))
// console.log(list.join(''));
var homepage = (req,res) => {
    res.status(200).send(html.replace('%%replace%%','<h1>YOU ARE IN HOME PAGE</h1'));
};

var aboutpage = (req,res) => {
    res.status(200).send(html.replace('%%replace%%','<h1>YOU ARE IN ABOUT PAGE</h1'));
}
var contactpage = (req,res) => {
    res.status(200).send(html.replace('%%replace%%','<h1>YOU ARE IN CONTACT PAGE</h1'));
}
var productpage = (req,res) => {
    res.status(200).send(html.replace('%%replace%%',list.join('')));
    // res.status(200).send(html.replace('%%replace%%','<h1>YOU ARE IN product PAGE</h1'));
    // console.log(products);
}
app.get('/home',homepage);
app.get('/about',aboutpage);
app.get('/contact',contactpage);
app.get('/products',productpage);


app.listen('3000',() => {
    console.log('server is started...');
})