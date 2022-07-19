const express = require('express');
const fetch = require("node-fetch");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

//routes
app.get('/', (req, res) =>{
  res.render('index')
});

app.get('/history', async(req, res) =>{
  let url = "https://api.unsplash.com/photos/random/?client_id=SRQjMtPIDrqVL-xWm51Gp1qpw9NFQ6YRv40_ISxn-ZE&orientation=landscape&featured=true&query=python";
  let response = await fetch(url);
  let data = await response.json();
  let image = data.urls.regular;
  res.render('history', {"pythonUrl":image})
});

app.get('/philosophy', (req, res) => {
  res.render('philosophy',)
});

app.get('/usecases', (req, res) => {
  res.render('usecases',)
});

app.get('/news', (req, res) => {
  res.render('news',)
});

app.get('/', (req, res) => {
  res.render('venus',)
});

app.listen(3000,() => {
  console.log('Server is running on port 3000');

});
