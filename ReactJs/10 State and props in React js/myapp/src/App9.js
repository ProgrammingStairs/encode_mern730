import React from 'react';

class MyComponent extends React.Component{
  constructor(){
    super();
    // console.log("Inside Constructor ",this);
    this.state = {
      name : "Andrew Anderson"
    }
  }
  render(){
    return(<>
      <b>Name : {this.state.name}</b>
    </>);
  }
}
function App() {
  return (<>
    <MyComponent/>
  </>);
}

export default App;
