//npm modules
const nodemailer=require('nodemailer');

//Email class handles creating transport to sending it
class Email{
    constructor(user)
    {
        this.from=`Adwaith ${process.env.EMAIL_FROM}`;
        this.to=user.to;
        this.url=user.url;
    }
    createmail()
    {    
        return nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.GMAIL_USERNAME,
                pass:process.env.GMAIL_PASSWORD
            }
        })
    }
    async sendmail(subject)
    {
        const option={                          //Options such as from and to are defined to send the details to mail
            from:this.from,
            to:this.to,
            subject:subject,
            text:this.url
        }
        await this.createmail().sendMail(option);   //Mail is finally sent to client
    }
    async passwordreset()
    {
        await this.sendmail('Your password token'); //Calls sendmain() with subject
    }
}

module.exports=Email;