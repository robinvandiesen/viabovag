'use server';
import { cookies } from 'next/headers';

export const setCookie = async (vehicleId: string) => {
  const cookieStore = await cookies();
  const hasCookie = cookieStore.has('wishlist');
  if (hasCookie) {
    const wishlist = cookieStore.get('wishlist');
    if (!wishlist) return;
    const wishlistArray = wishlist.value.split(',');
    const isInWishlist = wishlistArray.some((id: string) => id === vehicleId);
    if (isInWishlist) {
      // Remove the vehicle if it's already in the wishlist
      const wishlistFiltered = wishlistArray.filter((id: string) => id !== vehicleId);
      (await cookies()).set('wishlist', wishlistFiltered.join(','));
    } else {
      (await cookies()).set('wishlist', `${wishlist.value.toString()},${vehicleId}`);
    }
  } else {
    (await cookies()).set('wishlist', vehicleId);
  }
};

export const getCookie = async () => {
  const cookieStore = await cookies();
  return cookieStore;
}