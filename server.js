//jshint esversion:6

//Setup the server

//require the npm packages express,mongoose,bodyparser,ejs
const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const ejs = require('ejs');
/*
----------------------------------these for the login and signup to secure the password-------------------
const bcrypt = require('bcrypt');
const saltRounds = 10;
// for sessions
const session = require('express-session') 
*/
const app = express();
/*
// to use sessions
app.use(session({ 
  	secret: "it's a my secret key beacuase i am the best developer so it have about 20 characters", 
    resave: true, 
    saveUninitialized: true
})) 
*/

//setting the view engine ejs (templating engine) (in view files)
app.set("view engine",'ejs');
// use the body parser for the post request
// app.use(bodyParser.urlencoded({extended:true}));
//used to store the static files (html,css,js) (public directory)

//connect with mongoose

//mongoose.connect("mongodb://localhost:27017/classroomDB", {useNewUrlParser: true , useUnifiedTopology: true });

app.use(express.static("public"));

app.get("/",function(req,res){
	 res.render('index')
})



//to listen at port 3000
app.listen(3000,function(){
	console.log("Running at Port 3000");
})