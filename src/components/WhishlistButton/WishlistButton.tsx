'use client';

import { useWishlist } from '@/context/Wishlist/WishlistContext';
import { WishlistButtonProps } from './WishlistButton.types';

export const WishlistButton = ({ id }: WishlistButtonProps) => {
  const { toggleWishlist } = useWishlist();
  return <button className='btn btn-blue bg-gray-100 p-4' onClick={() => toggleWishlist(id)}>Add to wishlist</button>;
};
