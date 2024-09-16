"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Game } from "../../public/Games";

interface WishlistContextType {
  wishlist: Game[];
  toggleWishlist: (game: Game) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<Game[]>([]);

  const toggleWishlist = (game: Game) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.some((g) => g.id === game.id)) {
        return prevWishlist.filter((g) => g.id !== game.id);
      } else {
        return [...prevWishlist, game];
      }
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
