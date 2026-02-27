function Display(props){
    return (<>
    <table border={1} cellspacing={0} cellpadding={8}>
            <tr>
                <th>S.No</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
            {
                props.data.map((obj,index)=>{
                    return (<tr>
                        <td>{index+1}</td>
                        <td>{obj.username}</td>
                        <td>{obj.email}</td>
                        <td>{obj.password}</td>
                    </tr>);
                })
            }
        </table>
    </>);
}
export default Display;