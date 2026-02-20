import React from 'react';

class MyComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title : "Counting",
      count : 0
    }
  }
  increment = ()=>{
    this.setState({count:this.state.count+1});
  }
  render(){
    return(<>
      <b>{this.state.title} : {this.state.count}</b>
      <br/>
      <button onClick={this.increment}>Increment</button>
    </>);
  }
}
function App() {
  return (<>
    <MyComponent/>
  </>);
}
export default App;


