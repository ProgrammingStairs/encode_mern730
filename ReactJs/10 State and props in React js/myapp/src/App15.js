import React from 'react';

class MyComponent extends React.Component{
  state = {
    name : "",
    obj:{}
  }
  printData=()=>{
    this.setState({obj:{message : this.state.name}})
  }
  render(){
    return(<>
      <input
        type='text'
        placeholder='Enter Description'
        onChange={(event)=>{
          this.setState({name:event.target.value});
        }}
      /> 
      <button onClick={this.printData}>Click While Finish Writing</button>
      <br/>
      {this.state.obj!=null ? this.state.obj.message : ""}
    </>);
  }
}
function App() {
  return (<>
    <MyComponent/>
  </>);
}
export default App;

