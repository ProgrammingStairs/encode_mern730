import nodemailer from 'nodemailer';
const mailer = function(email,callback){
    const transport = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'karangangwal005@gmail.com',
            pass:'kobw ekwz hwii effe'
        }
    });

    const mailOption = {
        from : 'karangangwal005@gmail.com',
        to : email,
        subject: 'Verification Mail',
        html: `Hello ${email}, <br>Its a Verification Mail, Please click on the below button to verify.
        <form action='http://localhost:3000/user/verifyEmail' method='post'>
            <input type='hidden' name='email' id='email' value='${email}'>
            <button>Click to Verify</button>
        </form>
        `
    }
    transport.sendMail(mailOption,(error,info)=>{
        if(error){
            console.log("Something went wrong while sending email : ",error);
            callback(false);
        }else{
            console.log("Mail Sent from mailer");
            callback(true);
        }
    });
}

export default {mailer:mailer};