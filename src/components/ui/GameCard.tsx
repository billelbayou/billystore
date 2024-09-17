import { Game } from "../../../public/Games";
import Image from "next/image";
import WishlistButton from "@/components/ui/WishlistButton";
import Link from "next/link";
import CartButton from "./CartButton";

export default function GameCard({ game }: { game: Game }) {
  return (
    <div className="bg-secondary/60 rounded-xl overflow-hidden">
      <Link href={`/games/${game.id}`}>
        <Image src={game.Image} alt={game.title} />
      </Link>
      <div className="p-4">
        <h2 className="text-white text-lg h-16">{game.title}</h2>
        <div className="flex items-center justify-between mt-5">
          <div>
            <p>Price</p>
            <h3 className="text-white text-xl">{game.price}</h3>
          </div>
          <div className="flex items-center">
            <CartButton game={game}/>
            <WishlistButton game={game} />
          </div>
        </div>
      </div>
    </div>
  );
}
