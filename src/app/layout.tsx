import { Inter } from 'next/font/google';
import './globals.css';
import React from "react";
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
}); 

export const metadata = {
  title: 'Zen Coffee',
  description: 'E-commerce de café',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} antialiased bg-zinc-950`}>
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}