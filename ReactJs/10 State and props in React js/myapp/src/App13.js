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
  decrement = ()=>{
    this.setState({count:this.state.count-1});
  }
  reset = ()=>{
    this.setState({count:0});
  }
  incrementByThree = ()=>{
    this.setState({count:this.state.count+3});
  }
  changeTitle = ()=>{
    this.setState({title:"Counter"});
  }

  render(){
    return(<>
      <b>{this.state.title} : {this.state.count}</b>
      <br/>
      <button onClick={()=>{this.increment()}}>Increment</button>
      <button onClick={this.decrement}>Decrement</button>
      <button onClick={this.reset}>Reset</button>
      <button onClick={this.incrementByThree}>IncrementByThree</button>
      <button onClick={this.changeTitle}>ChangeTitle</button>
    </>);
  }
}
function App() {
  return (<>
    <MyComponent/>
  </>);
}
export default App;
