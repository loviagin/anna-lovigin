import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Анна Ловягина – Профессиональный художник",
  description: "Профессиональный художник, создающий искусство, которое трогает душу. Ее работы отличаются глубоким эмоциональным содержанием и уникальным художественным видением.",
  authors: [{ name: "LOVIGIN LTD", url: "https://lovigin.com" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={nunito.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
