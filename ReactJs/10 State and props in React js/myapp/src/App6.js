import React from 'react';
import MyClassComponent from './MyClassComponent.js';
function MyComponent(props){
  return(<>
    <MyClassComponent dataArray = {props.data}/>
  </>);
}


  var bookArray = [{
    bookName : "Programming In C",
    authorName : "Dennis Ritchie",
    price : 455
  },{
    bookName : "Programming In Java",
    authorName : "James Gosling",
    price : 50
  },{
    bookName : "Programming In JavaScript",
    authorName : "Brenden Eich",
    price : 4321
  },{
    bookName : "Html",
    authorName : "Tim Berners Lee",
    price : 2000
  }]

function App() {
  return (<>
    <MyComponent data={bookArray}/>
  </>);
}

export default App;
