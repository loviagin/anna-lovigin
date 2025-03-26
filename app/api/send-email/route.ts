import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import Email from '@/app/components/email/email';
import { render } from '@react-email/render';
import * as React from 'react';

export async function POST() {
    const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

    const html = await render(React.createElement(Email, { url: 'https://lovigin.com' }));

    try {
        console.log("Sending email with values:", {
            from: 'noreply@irisprophoto.me',
            to: 'ilia.loviagin@gmail.com',
            subject: 'New certificate purchase',
            html,
        });

        const data = await resend.emails.send({
            from: 'corp@lovigin.com',
            to: 'ilia.loviagin@gmail.com',
            subject: 'Re: АО "Почта России" - Уточнение ОПС ИНН 9729376985 ООО "ЛОВИДЖИН"',
            html,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
    }
}