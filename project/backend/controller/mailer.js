import nodemailer from 'nodemailer';
function mailer(email,callback){
    try{
        const transport = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user : "karangangwal005@gmail.com",
                pass : "zirl sfsl pcde tnin"
            }
        });
        const mailOption = {
            from : "karangangwal005@gmail.com",
            to : email,
            subject : "Verification Mail From Placement Portal",
            html: `Hello ${email}, This is a verification mail from Placement Portal, you need to click on the below link to verify.<br>
            <form action='http://localhost:5000/tpo/verifyEmail' method='post'>
                <input type='hidden' name='email' id='email' value='${email}'>
                <button>Click to Verify</button>
            </form>
            ` 
        };
        transport.sendMail(mailOption,(error,info)=>{
            if(info){
                console.log("Mail sent from mailer");
                callback(info);
            }else{
                console.log("Error while sending mail : ",error);
                callback(false);
            }
        })
    }catch(error){
        console.log("Error in nodemailer : ",error);
    }
}
export default {mailer:mailer};