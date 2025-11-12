import express from 'express';
var app = express();
app.set("views","views");
app.set("view engine","ejs");

const bookArray = [{
    bookName : "C Language",
    bookAuthor : "Dennis Ritchie",
    bookPrice : 789.34
},{
    bookName : "C Language",
    bookAuthor : "Dennis Ritchie",
    bookPrice : 789.34
},{
    bookName : "C Language",
    bookAuthor : "Dennis Ritchie",
    bookPrice : 789.34
},{
    bookName : "C Language",
    bookAuthor : "Dennis Ritchie",
    bookPrice : 789.34
},{
    bookName : "C Language",
    bookAuthor : "Dennis Ritchie",
    bookPrice : 789.34
}];

app.get("/",(request,response)=>{
    response.render("index2.ejs",{bookArray});
});
app.listen(3000,()=>{
    console.log("Connection established successfully");
});