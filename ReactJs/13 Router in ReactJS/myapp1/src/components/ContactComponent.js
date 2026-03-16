import { Link,Outlet, useLocation } from "react-router-dom";

function ContactComponent(){
    var location = useLocation();
    console.log(location.pathname);
    const status = location.pathname!="/contact";
    console.log(status);
    
    return(<>
    <div style={{marginLeft:"120px",height:"80px",backgroundColor:"black",color:"white",width:"200px"}}>
        <Link to="/contact/contactComponent1" style={{color:"white",textDecoration:"none", fontSize:"20px"}}>ContactComponent1</Link> <br/> <hr/>
        <Link to="/contact/contactComponent2" style={{color:"white",textDecoration:"none", fontSize:"20px"}}>ContactComponent2</Link>
    </div>
    {status ? (<Outlet/>):(
        <div>
            <h1>Contact Component</h1>
            <p>This is Contact Component</p>
        </div>
    )}
    </>);
}
export default ContactComponent;