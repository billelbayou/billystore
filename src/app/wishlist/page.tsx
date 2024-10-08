"use client";

import { UseContext } from "@/context/context"; 
import GamesGrid from "@/components/ui/GamesGrid";

export default function WishlistPage() {
  const { wishlist } = UseContext(); 

  if (wishlist.length === 0) {
    return <div className="p-4">Your wishlist is currently empty.</div>;
  }

  return (
    <div className="p-4">
      <GamesGrid gamesArray={wishlist}/>
    </div>
  );
}
