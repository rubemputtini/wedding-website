import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isabella & Rubem",
  description: "Casamento Isabella e Rubem",
  authors: [{ name: "Rubem Puttini", url: "www.rubemputtini.com.br" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
