'use client';

import { useWishlist } from '@/context/Wishlist/WishlistContext';
import { WishlistButtonProps } from './WishlistButton.types';

export const WishlistButton = ({ id }: WishlistButtonProps) => {
  const { toggleWishlist } = useWishlist();
  return <button onClick={() => toggleWishlist(id)}>Fav</button>;
};
