import { Game } from "../../../public/Games";
import GameCard from "./GameCard";

export default function GamesGrid({ gamesArray }: { gamesArray: Game[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(250px,250px))] gap-5">
      {gamesArray.map((game) => (
        <div key={game.id}>
          <GameCard game={game} />
        </div>
      ))}
    </div>
  );
}
