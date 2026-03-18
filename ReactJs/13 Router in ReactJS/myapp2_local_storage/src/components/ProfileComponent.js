import { useLocation } from "react-router-dom";
function ProfileComponent(){
    localStorage.setItem("navShow","profile");
    const location = useLocation();
    return(<>
        <h1>Profile Component</h1>
        <p>{location?.state?.message} <br/> Hello {location?.state?.email}</p>
    </>);
}
export default ProfileComponent;