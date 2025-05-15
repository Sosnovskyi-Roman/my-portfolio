import { Inter } from 'next/font/google';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import '@/styles/globals.scss';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={inter.variable}>
      <body>
        <div className='container'>
          <Header />
          <main className='main'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
