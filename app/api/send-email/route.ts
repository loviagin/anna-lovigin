import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import Email from '@/app/components/email/email';
import { render } from '@react-email/render';
import * as React from 'react';

interface RequestBody {
    name: string;
    email: string;
    message: string;
}

export async function POST(request: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, message }: RequestBody = await request.json();

    const html = await render(React.createElement(Email, { name, email, message }));

    try {
        // console.log("Sending email with values:", {
        //     from: 'noreply@lovigin.com',
        //     to: 'ilia.loviagin@gmail.com',
        //     subject: 'Новое сообщение с сайта annaloviagina.art',
        //     html,
        // });

        const data = await resend.emails.send({
            from: 'noreply@lovigin.com',
            to: 'anna-lov@yandex.ru',
            cc: 'ilia.loviagin@gmail.com',
            subject: 'Новое сообщение с сайта annaloviagina.art',
            html,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
    }
}