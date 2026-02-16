import React from 'react';
import './App.css';

function FunComponent(props){
  return (<>
    <b><br/><br/>Name : {props.name}</b>
    <b><br/>Age : {props.age}</b>
    <b><br/>isAdmin : {String(props.isAdmin)}</b>
    <b><br/>Address : {props.address}</b>
  </>);
}
class ClassComponent extends React.Component{
  render(){
    return (<>
    <b><br/><br/>Name : {this.props.name}</b>
    <b><br/>Age : {this.props.age}</b>
    <b><br/>isAdmin : {String(this.props.isAdmin)}</b>
    <b><br/>Address : {this.props.address}</b>
    </>);
  };
}
function App() {
  return (<>
    <FunComponent name="Andrew Anderson" age={45} isAdmin={true} address={"Indore"}/>
    <ClassComponent name="Peter Parker" age={75} isAdmin={false} address={"Bhopal"}/>
  </>);
}

export default App;
