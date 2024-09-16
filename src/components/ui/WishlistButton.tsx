"use client";

import { GoHeart, GoHeartFill } from "react-icons/go";
import { Game } from "../../../public/Games";
import { useWishlist } from "@/context/WishlistProvider";

export default function WishlistButton({ game }: { game: Game }) {
  const { wishlist, toggleWishlist } = useWishlist();
  const isInWishlist = wishlist.some((item) => item.id === game.id);

  return (
    <button
      className="h-11 w-11 bg-white/30 rounded-xl flex justify-center items-center ml-3"
      onClick={() => toggleWishlist(game)}
    >
      {isInWishlist ? <GoHeartFill size={20} /> : <GoHeart size={20} />}
    </button>
  );
}
