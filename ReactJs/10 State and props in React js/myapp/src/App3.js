import React from 'react';
import './App.css';

function FunComponent({name="noname",age=0,isAdmin=false,address="noaddress"}){
  return (<>
    <b><br/><br/>Name : {name}</b>
    <b><br/>Age : {age}</b>
    <b><br/>isAdmin : {String(isAdmin)}</b>
    <b><br/>Address : {address}</b>
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
ClassComponent.defaultProps={
  name:"noname",
  age : 0,
  isAdmin:false,
  address:"noaddress"
}
function App() {
  return (<>
    <FunComponent name="Andrew Anderson"  isAdmin={true} />
    <ClassComponent  age={75}  address={"Bhopal"}/>
  </>);
}

export default App;
