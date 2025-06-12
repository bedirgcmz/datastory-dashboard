import './globals.css';
import { Geist } from 'next/font/google';
import { Providers } from './providers';
import PageIntro from '@/components/PageIntro';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geist = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Datastory Dashboard',
  description: 'Technical task for Datastory',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <Providers>
          <Header />
          <PageIntro />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
