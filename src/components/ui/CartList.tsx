import { Game } from "../../../public/Games";
import Image from "next/image";
export default function CartList({ gamesArray }: { gamesArray: Game[] }) {

  const totalPrice = gamesArray.reduce((sum, game) => sum + game.price, 0);

  return (
    <div className="w-full bg-secondary">
      <ul className="w-full">
        {gamesArray.map((game) => (
          <li key={game.id}>
            <Image src={game.Image} alt={game.title} width={70} />
            <h3>{game.title}</h3>
          </li>
        ))}
      </ul>
      <h2>Your total is : {totalPrice}</h2>
    </div>
  );
}
