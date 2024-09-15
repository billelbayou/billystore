import { Game } from "../../../public/Games";

export default function BuyButton({game}: {game: Game}) {
  return (
    <button className="bg-primary w-40 h-14 flex flex-col justify-center px-6 rounded-xl mr-4">
      <p className="font-bold">Buy now</p>
      <p>${game.price}</p>
    </button>
  );
}
