import React from 'react';

class MyComponent extends React.Component{
  /*
  constructor(props){
    super(props);
    this.state = {
      name : this.props.name
    }
    this.changeName = ()=>{
      this.setState({name:"Mathew Math"});
    }
  }
  */
  /*
  constructor(props){
    super(props);
    this.state = {
      name : this.props.name
    }
  }
  changeName = ()=>{
      this.setState({name:"Mathew Math"});
  }
  */
 
  constructor(props){
    super(props);
    this.state = {
      name : this.props.name
    }
    this.changeName = this.changeName.bind(this);
  }
  changeName(){
      this.setState({name:"Mathew Math"});
  }
 
  render(){
    return(<>
      <b>Name : {this.state.name}</b>
      <br/>
      <button onClick={this.changeName}>Change Name</button>
    </>);
  }
}
function App() {
  return (<>
    <MyComponent name="Peter Parker"/>
  </>);
}
export default App;

