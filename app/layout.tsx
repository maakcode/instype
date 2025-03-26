import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const sans = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Instype",
  description: "바로 쓰고 바로 공유하는 인스타일 텍스트 에디터",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} antialiased`}>{children}</body>
    </html>
  );
}
