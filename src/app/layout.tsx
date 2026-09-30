import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["thai", "latin"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "GamerStore - จำหน่ายไอดีเกม เติมเกมออนไลน์",
  description: "ศูนย์รวมจำหน่ายไอดีเกมออนไลน์คุณภาพ เติมเกมส์ราคาถูก ปลอดภัย ได้รับของทันที บริการตลอด 24 ชั่วโมง",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${kanit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
