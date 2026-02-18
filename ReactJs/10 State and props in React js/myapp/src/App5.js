import React from 'react';

function MyComponent(props){
  return(<>
    <h3>Functional Component</h3>
    <table border={1} cellSpacing={0} cellPadding={5}>
      <tr>
        <th>S.No</th>
        <th>BookName</th>
        <th>AuthorName</th>
        <th>Price</th>
      </tr>
      {
        props.data.map((book,index)=>{
          return (<tr>
            <td>{index+1}</td>
            <td>{book.bookName}</td>
            <td>{book.authorName}</td>
            <td>{book.price}</td>            
          </tr>);
        })
      }
    </table>
  </>);
}
class MyClassComponent extends React.Component{
  render(){
    return(<>
    <h3>Class Component</h3>
    <table border={1} cellSpacing={0} cellPadding={5}>
      <tr>
        <th>S.No</th>
        <th>BookName</th>
        <th>AuthorName</th>
        <th>Price</th>
      </tr>
      {
        this.props.data.map((book,index)=>{
          return (<tr>
            <td>{index+1}</td>
            <td>{book.bookName}</td>
            <td>{book.authorName}</td>
            <td>{book.price}</td>            
          </tr>);
        })
      }
    </table>
  </>);
  }
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
    <MyClassComponent data={bookArray}/>
  </>);
}

export default App;
