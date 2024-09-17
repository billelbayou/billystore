"use client";

import { FiShoppingCart } from "react-icons/fi";
import { Game } from "../../../public/Games";
import { UseContext } from "@/context/context";

export default function CartButton({ game }: { game: Game }) {
  const { cart, toggleCart } = UseContext();
  const isInCart = cart.some((item) => item.id === game.id);

  return (
    <button
      className={`${isInCart ? "bg-green-500" : "bg-primary"} w-fit h-fit p-2 rounded-lg`}
      onClick={() => toggleCart(game)}
    >
      <FiShoppingCart size={25} />
    </button>
  );
}
