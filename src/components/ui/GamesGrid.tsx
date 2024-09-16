import { Game } from "../../../public/Games";
import GameCard from "./GameCard";

export default function GamesGrid({ gamesArray }: { gamesArray: Game[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
      {gamesArray.map((game) => (
        <div key={game.title}>
          <GameCard game={game} />
        </div>
      ))}
    </div>
  );
}
