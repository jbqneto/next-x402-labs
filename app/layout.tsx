import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FaucetModal } from '@/components/faucet-modal';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Web3 Labs - x402 Payment Experiments',
  description: 'Unlocking Web3 micro-payments and experiments',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FaucetModal />
        </div>
      </body>
    </html>
  );
}
