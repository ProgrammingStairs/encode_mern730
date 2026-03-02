function Display(props){
    return (<>
    {props.data.length==0 ? <div>No Record Found</div> : (<table border={1} cellspacing={0} cellpadding={8}>
            <tr>
                <th>S.No</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th colspan='2'>Action</th>
            </tr>
            {
                props.data.map((obj,index)=>{
                    return (<tr>
                        <td>{index+1}</td>
                        <td>{obj.username}</td>
                        <td>{obj.email}</td>
                        <td>{obj.password}</td>
                        <td><button onClick={()=>{props.updateData({obj,index})}}>Update</button></td>
                        <td><button onClick={()=>{props.deleteData(index)}}>Delete</button></td> 
                    </tr>);
                })
            }
        </table>)}
    </>);
}
export default Display;