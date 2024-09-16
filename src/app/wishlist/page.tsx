"use client";

import { useWishlist } from "@/context/WishlistProvider"; 
import GamesGrid from "@/components/ui/GamesGrid";

export default function WishlistPage() {
  const { wishlist } = useWishlist(); 

  if (wishlist.length === 0) {
    return <div className="p-4">Your wishlist is currently empty.</div>;
  }

  return (
    <div className="p-4">
      <GamesGrid gamesArray={wishlist}/>
    </div>
  );
}
