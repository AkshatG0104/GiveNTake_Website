const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static('public'));
var bodyParser = require('body-parser') //To fetch the form data
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.json());


//---------------------Buy Page----------------
app.get('/Buy', (req, res) => {
    res.sendFile(__dirname + '/views/Buy_Page.html');
}); // Buy page

app.get('/shoesData',(req,res)=>{
  const shoes_data = fs.readFileSync('Shoes.json');
  const shoes = JSON.parse(shoes_data).shoes;
  console.log(shoes);
  res.send(shoes);
})//Gets the information from the shoes JSON file

app.get('/shoes/title/:title', (req, res) => {
	if (req.params.title && req.params.title.trim() !== '') {
	  const shoes_data = fs.readFileSync('Shoes.json');
	  const shoes = JSON.parse(shoes_data).shoes;
	  const shoe = shoes.find(s => s.Title === req.params.title)
	  if (shoe) {
	  	res.send(shoe).status(200);
	  } else {
	  	res.send('Shoe not found').status(400);
	  }
	} else {
		res.send('Title is missing').status(400)
	}
})//Gets the information for the title that is requested

app.get('/shirts/title/:title', (req, res) => {
	if (req.params.title && req.params.title.trim() !== '') {
	  const shirts_data = fs.readFileSync('Shirts_T-Shirts.json');
	  const shirts = JSON.parse(shirts_data).shirt;
	  const shirt = shirts.find(sh => sh.Title === req.params.title)
	  if (shirt) {
	  	res.send(shirt).status(200);
	  } else {
	  	res.send('Shirt/T-Shirt not found').status(400);
	  }
	} else {
		res.send('Title is missing').status(400)
	}
})//Gets the information for the title that is requested

app.get('/hoodies/title/:title', (req, res) => {
	if (req.params.title && req.params.title.trim() !== '') {
	  const hoodies_data = fs.readFileSync('Hoodies_Jackets.json');
	  const hoodies = JSON.parse(hoodies_data).hoodies_jackets;
	  const hoodie = hoodies.find(h => h.Title === req.params.title)
	  if (hoodie) {
	  	res.send(hoodie).status(200);
	  } else {
	  	res.send('Hoodie/Jacket not found').status(400);
	  }
	} else {
		res.send('Title is missing').status(400)
	}
})//Gets the information for the title that is requested

app.get('/hoodiesData',(req,res)=>{
  const hoodies_jackets_data = fs.readFileSync('Hoodies_Jackets.json');
  const hoodies_jackets = JSON.parse(hoodies_jackets_data).hoodies_jackets;
  console.log(hoodies_jackets);
  res.send(hoodies_jackets);
})//Gets the information from the hoodies_jackets JSON file

app.get('/shirtsData',(req,res)=>{
  const shirts_data = fs.readFileSync('Shirts_T-Shirts.json');
  const shirt = JSON.parse(shirts_data).shirt;
  console.log(shirt);
  res.send(shirt);
})//Gets the information from the shirts JSON file
//---------------------Buy Page----------------
//---------------------Sell Page----------------
app.get('/Sell',(req, res) => {
  res.sendFile(__dirname + '/views/Sell_Page.html');
} ) // Sell Page

app.post('/sell_shoes_form',urlencodedParser,(req,res)=>{
  const {Image_File,Seller,Title,Description,Price,Percentage_For_Charity,Size} = req.body
  const shoes_data = fs.readFileSync('Shoes.json');
  const data = JSON.parse(shoes_data)
  data.shoes.push({Image_File,Seller,Title,Description,Price,Percentage_For_Charity,Size})
  const w = fs.writeFileSync('Shoes.json', JSON.stringify(data))
  res.redirect('/Sell')
}) //Posting data into the Shoes.json file that is input from client on the sell page

app.post('/sell_hoodies_form',urlencodedParser,(req,res)=>{
  const {Image_File,Seller,Title,Description,Price,Percentage_For_Charity,Size} = req.body
  const hoodies_data = fs.readFileSync('Hoodies_Jackets.json');
  const data = JSON.parse(hoodies_data)
  data.hoodies_jackets.push({Image_File,Seller,Title,Description,Price,Percentage_For_Charity,Size})
  const w = fs.writeFileSync('Hoodies_Jackets.json', JSON.stringify(data))
  res.redirect('/Sell')
})//Posting data into the Hoodies_Jackets.json file that is input from client on the sell page

app.post('/sell_shirts_form',urlencodedParser,(req,res)=>{
  const {Image_File,Seller,Title,Description,Price,Percentage_For_Charity,Size} = req.body
  const shirts_data = fs.readFileSync('Shirts_T-Shirts.json');
  const data = JSON.parse(shirts_data)
  data.shirt.push({Image_File,Seller,Title,Description,Price,Percentage_For_Charity,Size})
  const w = fs.writeFileSync('Shirts_T-Shirts.json', JSON.stringify(data))
  res.redirect('/Sell')
})//Posting data into the Shirts_T-Shirts.json file that is input from client on the sell page

//---------------------Sell Page----------------
//---------------------Cart Page----------------
app.get('/Cart',(req, res) => {
  res.sendFile(__dirname + '/views/Cart_Page.html');
}) // Cart Page

app.post('/addToCart', (req,res)=>{
  console.log(req.body);
  const {Image_File,Seller,Title,Description,Price,Percentage_For_Charity,Size} = req.body
  const carts_data = fs.readFileSync('Carts.json');
  const data = JSON.parse(carts_data)
  data.push({Image_File,Seller,Title,Description,Price,Percentage_For_Charity,Size})
  const w = fs.writeFileSync('Carts.json', JSON.stringify(data))
  console.log(w)
  res.send().status(200)
})//Posting data into the Carts.json file that is input from client on the sell page

app.get('/carts.json',(req,res)=>{
  const carts_data = fs.readFileSync('Carts.json');
  const carts = JSON.parse(carts_data);
  console.log(carts);
  res.send(carts);
})//Gets the information from the Carts.json file
//---------------------Cart Page----------------

module.exports = app;