import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../../../globals.css";
import Script from "next/script";

const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anna Loviagina – Professional Artist",
  description: "Professional artist creating art that touches the soul. Her works are distinguished by deep emotional content and unique artistic vision.",
  authors: [{ name: "LOVIGIN LTD", url: "https://lovigin.com" }],
  icons: {
    icon: "/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],
            k.async=1;k.src=r;a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(100670717, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true
            });
          `}
        </Script>
      </head>
      <body className={nunito.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
