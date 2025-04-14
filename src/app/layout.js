import "./globals.css";
import { Inter } from 'next/font/google'
import { Metadata } from 'next';

//font otimizada
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Mc Donald's 2",
  description: "App de cardápio digital",
  icons:{
    icon: '/Favicon.ico',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
