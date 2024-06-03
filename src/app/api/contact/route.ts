import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type FormData = {
    name: string;
    email: string;
    message: string;
};

export async function POST(request: NextRequest) {
    try {
        const { name, email, message }: FormData = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        if (!name || !email || !message) {
            return NextResponse.json({ message: 'Please fill in all fields' }, { status: 400 });
        }

        const mailData = {
            from: process.env.EMAIL_USER, 
            to: process.env.EMAIL_USER, 
            subject: `Message from ${email} -Client Name: ${name}`,
            text: message,
            replyTo: email 
        };

        await transporter.sendMail(mailData);
        console.log('Email sent successfully');
        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (err) {
        console.error('Error sending email:', err);
        return NextResponse.json({ message: 'Error sending email'}, { status: 500 });
    }
}

export function GET() {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
