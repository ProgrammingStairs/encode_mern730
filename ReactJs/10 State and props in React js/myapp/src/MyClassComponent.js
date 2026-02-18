import React from 'react';
class MyClassComponent extends React.Component{
  render(){
    return(<>
    <h3>Class Component</h3>
    <table border={1} cellSpacing={0} cellPadding={5}>
      <tr>
        <th>S.No</th>
        <th>BookName</th>
        <th>AuthorName</th>
        <th>Price(In INR)</th>
      </tr>
      {
        this.props.dataArray.map((book,index)=>{
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

export default MyClassComponent;