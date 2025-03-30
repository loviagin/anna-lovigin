import * as React from 'react';
import { Html, Button, Head } from "@react-email/components";

interface EmailProps {
  name: string;
  email: string;
  message: string;
}

function Email(props: EmailProps) {
  const { name, email, message } = props;

  return (
    <Html lang="ru">
      <Head>
        <title>Новое сообщение с сайта annaloviagina.art</title>
      </Head>
      <body>
        <p>Имя: {name}</p>
        <p>Email: {email}</p>
        <p>Сообщение: {message}</p>
        <Button href="https://annaloviagina.art">Перейти на сайт</Button>
      </body>
    </Html>
  );
}

export default Email;