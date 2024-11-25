'use client';

import React, { createContext, PropsWithChildren, useContext,  useState } from "react";
import { WishlistContextProps } from "./WishlistContext.types";
import { setCookie } from "./WishlistCookie";

export const WishlistContext = createContext<WishlistContextProps | undefined>(undefined);

export const WishlistProvider = ({ children }: PropsWithChildren) => {
  const [wishlistCount, setWishlistCount] = useState(0);

  const toggleWishlist = (id: string) => {
    const count = wishlistCount+1;
    setWishlistCount(count);
    setCookie(id);
  }

  return (
    <WishlistContext.Provider value={{ wishlistCount, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
