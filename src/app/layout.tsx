
import { Header } from '@/components/Header';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased bg-gray-100`}>
        <Header />
        <main className='max-w-screen-xl mx-auto '>{children}</main>
      </body>
    </html>
  );
}
