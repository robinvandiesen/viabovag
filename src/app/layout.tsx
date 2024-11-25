import { Header } from '@/components/Header';
import './globals.css';
import { WishlistProvider } from '@/context/Wishlist/WishlistContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased bg-gray-100`}>
        <WishlistProvider>
          <Header />
          <main className='max-w-screen-xl mx-auto'>{children}</main>
        </WishlistProvider>
      </body>
    </html>
  );
}
