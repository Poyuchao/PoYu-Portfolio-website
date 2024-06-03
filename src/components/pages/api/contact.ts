
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type FormData = {
    name: string;
    email: string;
    message: string;

};


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   
    if (req.method==='POST'){
        const {name, email, message}: FormData = req.body;

        console.log("post request received");

        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS
            },

        });

        const mailData = {
            from: email,
            to:process.env.EMAIL_USER,
            subject:`Contact Message from ${name}`,
            text:message,
        };

        try{
            await transporter.sendMail(mailData);
            res.status(200).json({message:'Email sent successfully'});

        }catch(err){
            res.status(500).json({message:'Error sending email'});
        }
    }else{
        res.status(405).json({message:'Method not allowed'});
    }


}