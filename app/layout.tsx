import './globals.css';
import type { Metadata } from 'next';
import { Merriweather, Lato } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { SpeedInsights } from '@vercel/speed-insights/next';

const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '700', '900'],
  variable: '--font-merriweather'
});

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato'
});

export const metadata: Metadata = {
  title: 'Divya Agency - Premium Drip Irrigation Systems',
  description: 'Leading supplier of drip irrigation systems and agricultural equipment. Transform your farming with efficient irrigation solutions.',
  keywords: 'drip irrigation, agriculture, farming, irrigation systems, water conservation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${merriweather.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
        <Toaster position="top-right" />
        <SpeedInsights />
      </body>
    </html>
  );
}