import nodemailer from 'node-mailer';
function mailer(email,callback){
    try{
        const transport = nodemailer.createTransport({
            service:gmail,
            auth:{
                user : "your_email@gmail.com",
                pass : "your_app_password"
            }
        });
        const mailOption = {
            from : "your_email@gmail.com",
            to : email,
            subject : "Verification Mail From Placement Portal",
            html: `Hello ${email}, This is a verification mail from Placement Portal, you need to click on the below link to verify.<br>
            <form action=''>
                <button>Click to Verify</button>
            </form>
            ` 
        };
        transport.sendMail(mailOption,(info)=>{
            if(info){

            }else{

            }
        })
    }catch(error){
        console.log("Error in nodemailer : ",error);
    }
}
export default {mailer:mailer};