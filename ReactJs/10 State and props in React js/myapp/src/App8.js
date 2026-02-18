import React from 'react';

class MyComponent extends React.Component{
  state={
    name : this.props.name
  }
  render(){
    return(<>
      <b>Name : {this.state.name}</b>
    </>);
  }
}
function App() {
  return (<>
    <MyComponent name="Peter Parker"/>
  </>);
}

export default App;

