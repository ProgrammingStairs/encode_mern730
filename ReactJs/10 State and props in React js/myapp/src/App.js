import React from 'react';

class MyComponent extends React.Component{
  state = {
    name : "",
    email: "",
    password : "",
    obj:{}
  }
  printData=()=>{
    this.setState({
      obj:
        {
          name : this.state.name,
          email : this.state.email,
          password : this.state.password
        }
      })
  }
  render(){
    return(<>
      <input
        type='text'
        placeholder='Enter Name'
        onChange={(event)=>{
          this.setState({name:event.target.value});
        }}
      /><br/>
      <input
        type='email'
        placeholder='Enter Email'
        onChange={(event)=>{
          this.setState({email:event.target.value});
        }}
      /><br/> 
       <input
        type='password'
        placeholder='Enter Password'
        onChange={(event)=>{
          this.setState({password:event.target.value});
        }}
      /> <br/>

      <button onClick={this.printData}>Click While Finish Writing</button>
      <br/>
      {this.state.obj.name!=null ? `Name : ${this.state.obj.name}` : ""} <br/>
      {this.state.obj.email!=null ? `Email : ${this.state.obj.email}` : ""} <br/>
      {this.state.obj.password!=null ? `Password : ${this.state.obj.password}` : ""} <br/>

    </>);
  }
}
function App() {
  return (<>
    <MyComponent/>
  </>);
}
export default App;
