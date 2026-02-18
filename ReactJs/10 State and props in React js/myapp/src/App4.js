import React from 'react';

function MyComponent(props){
  {
    // console.log(props);
    console.log(props.data);
  }
  return(<>
      <b>BookName : {props.data.bookName}</b> <br/>
      <b>AuthorName : {props.data.authorName}</b> <br/>
      <b>Price : {props.data.price}</b> <br/>
  </>);
}
function App() {
  var book = {
    bookName : "Programming In C",
    authorName : "Dennis Ritchie",
    price : 455
  }
  return (<>
    <MyComponent data={book}/>
  </>);
}

export default App;


