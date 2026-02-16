import React from 'react';
import './App.css';

function FunComponent(props){
  { 
    console.log("This is functional component ");
    console.log("Result : ",props);
  }
  return (<>
    <b>Name : {props.name}</b>
  </>);
}
class ClassComponent extends React.Component{
  render(){
    { 
      console.log("This is class component ");
      console.log("Result : ",this.props);
    }  
    return (<>
    <b><br/>Name : {this.props.name}</b>
    </>);
  };
}
function App() {
  return (<>
    <FunComponent name="Andrew Anderson"/>
    <ClassComponent name="Peter Parker"/>
  </>);
}

export default App;
