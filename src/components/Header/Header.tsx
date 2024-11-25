'use client';

import { useWishlist } from '@/context/Wishlist/WishlistContext';
import Link from 'next/link';

export const Header = () => {
  const {wishlistCount} = useWishlist();
  return (
    <header className='sticky top-0 z-[100] bg-black'>
      <nav className='flex justify-between items-center h-16 mx-auto max-w-screen-xl px-6  py-1'>
        <Link className='flex items-center h-full text-white order-10 sm:order-none' href="/">
          <img
            alt='ViaBovag Logo'
            loading='lazy'
            width='38'
            height='57'
            decoding='async'
            data-nimg='1'
            className='object-contain w-auto h-full flex-shrink-0 hidden sm:block'
            src='https://www.viabovag.nl/next-images/logo/logo-bovag.svg'
          ></img>
          <img
            alt='viaBOVAG.nl'
            loading='lazy'
            width='120'
            height='17'
            decoding='async'
            data-nimg='1'
            className='w-24 sm:w-32 sm:ml-1'
            src='https://www.viabovag.nl/next-images/logo/logo-bovag-text.svg'
          ></img>
        </Link>
        <Link
          className='relative order-[30] justify-self-end flex-shrink-0'
          href='/wishlist'
        >
          <span className='flex items-center justify-center h-6 w-6 relative'>
            <svg
              className='absolute top-0 right-0 w-full h-full fill-white'
              viewBox='0 0 24 24'
            >
              <use xlinkHref='#icon--heart'></use>
              <svg id='icon--heart' viewBox='0 0 24 24'>
                <path d='M21.2 3.4a7.5 7.5 0 00-2-1.5 5.7 5.7 0 00-6.6 1.5l-.6.7-.6-.7a5.8 5.8 0 00-4.3-2c-1.6 0-3.2.7-4.3 2A7 7 0 001 8.3a7 7 0 001.8 4.9l8.8 10 .4.2.4-.2 8.8-9.9A7.2 7.2 0 0023 8.4c0-1.9-.6-3.7-1.8-5z'></path>
              </svg>
            </svg>
            <span
              className='text-black font-semibold relative -translate-y-[1px] '
              data-testid='header-favorite-count'
            >{wishlistCount}</span>
          </span>
        </Link>
      </nav>
    </header>
  );
};
