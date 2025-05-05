import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import '@/styles/globals.scss';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Roman Sosnovskyi | Frontend Developer',
  description: 'Professional portfolio showcasing my frontend development work',
  metadataBase: new URL('https://yourdomain.com'),
  openGraph: {
    title: 'Roman Sosnovskyi - Frontend Developer',
    description: 'Professional portfolio showcasing my frontend development work',
    images: '/og-image.jpg',
  },
};

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
