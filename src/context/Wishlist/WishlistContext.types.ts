export interface WishlistContextProps {
  wishlistCount: number;
  toggleWishlist: (vehicleId: string) => void;
}