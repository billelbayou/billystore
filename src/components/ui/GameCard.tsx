import { FiShoppingCart } from "react-icons/fi";
import { Game } from "../../../public/Games";
import Image from "next/image";

export default function GameCard({ game }: { game: Game }) {
  return (
    <div className="bg-secondary/60 rounded-xl overflow-hidden">
      <Image src={game.Image} alt={game.title} />
      <div className="p-4">
        <h2 className="text-white text-lg h-16">{game.title}</h2>
        <div className="flex items-center justify-between mt-5">
          <div>
            <p>Price</p>
            <h3 className="text-white text-xl">{game.price}</h3>
          </div>
          <div className="bg-primary w-fit h-fit p-2 rounded-lg">
            <FiShoppingCart size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}
