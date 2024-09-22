"use client";

import { UseContext } from "@/context/context"; 
import CartList from "@/components/ui/CartList";
import Link from "next/link";

export default function CartPage() {
  const { cart } = UseContext(); 

  if (cart.length === 0) {
    return <div className="p-4">Your Cart is currently empty.</div>;
  }

  return (
    <div className="p-4">
      <CartList gamesArray={cart} />
      <Link href={"/checkout"}>checkout</Link>
    </div>
  );
}
