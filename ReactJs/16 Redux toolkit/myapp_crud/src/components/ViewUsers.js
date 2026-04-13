import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../store/UserSlice.js";
import { useNavigate } from "react-router-dom";
function ViewUsers(){
    const userArray = useSelector(state=> state.user.userArray);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    {console.log("---> ",userArray);}
    const deleteData = (obj)=>{
        dispatch(deleteUser(obj));
    }
    const updateData = (obj)=>{
         console.log("index from view users : ",obj);
        
        navigate("/addUser",{
            state:{
                userData:obj.user,
                   index : obj.index 
            }
        });
    }
    
    return (<>
        <h3>view users</h3>
        <table border={1} cellSpacing={0}>
            <tr>
                <td>S.No</td>
                <td>Username</td>
                <td>Email</td>
                <td>Password</td>
                <td>Address</td>
                <td colspan="2">Action</td>
            </tr>
            {
                userArray.map((user,index)=>{
                    return(<tr>
                        <td>{index+1}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>{user.address}</td>
                        <td><button onClick={()=>{updateData({user,index})}}>Update</button></td>
                        <td><button onClick={()=>{deleteData({user,index})}}>Delete</button></td>
                    </tr>);
                })
            }
        </table>
    </>);
}
export default ViewUsers;