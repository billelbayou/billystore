"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Game } from "../../public/Games";

interface ContextType {
  wishlist: Game[];
  toggleWishlist: (game: Game) => void;
  cart: Game[];
  toggleCart: (game: Game) => void;
}

const Context = createContext<ContextType | undefined>(
  undefined
);

export function ContextProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<Game[]>([]);
  const [cart, setCart] = useState<Game[]>([]);

  const toggleWishlist = (game: Game) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.some((g) => g.id === game.id)) {
        return prevWishlist.filter((g) => g.id !== game.id);
      } else {
        return [...prevWishlist, game];
      }
    });
  };
  const toggleCart = (game: Game) => {
    setCart((prevCart) => {
      if (prevCart.some((g) => g.id === game.id)) {
        return prevCart.filter((g) => g.id !== game.id);
      } else {
        return [...prevCart, game];
      }
    });
  };

  return (
    <Context.Provider value={{ wishlist, toggleWishlist, cart, toggleCart }}>
      {children}
    </Context.Provider>
  );
}

export function UseContext() {
  const context = useContext(Context);
  if (!context) {
    throw new Error("UseContext must be used within a ContextProvider");
  }
  return context;
}