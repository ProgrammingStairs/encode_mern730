import { Sequelize } from "sequelize";
const sequelize = new Sequelize(
    'seq_mern730',
    'root',
    'root',
    {
        host:'localhost',
        dialect:'mysql'        
    }
);

sequelize.authenticate().then(()=>{
    console.log("Connection established successfully");
}).catch((error)=>{
    console.log("Error : ",error);
});

export default sequelize;