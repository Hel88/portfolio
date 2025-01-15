import { Geist, Geist_Mono, Julius_Sans_One, Lato, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapClient from '@/components/BootstrapClient.js';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const julius_sans_one = Julius_Sans_One({
  variable: "--font-julius-sans-one",
  subsets: ["latin"],
  weight: '400',
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: '400',
});

const jetbrainmono = JetBrains_Mono({
  variable: "--font-jet-brain-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Helena Barbillon",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${julius_sans_one.variable} ${lato.variable} ${jetbrainmono.variable} `}>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
