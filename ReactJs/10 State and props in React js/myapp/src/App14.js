import React from 'react';

class MyComponent extends React.Component{
  state = {
    name : ""
  }
  render(){
    return(<>
      <input
        type='text'
        placeholder='Enter Description'
        onChange={(event)=>{
          this.setState({name:event.target.value});
        }}
      /> <br/>
      {this.state.name}
    </>);
  }
}
function App() {
  return (<>
    <MyComponent/>
  </>);
}
export default App;
