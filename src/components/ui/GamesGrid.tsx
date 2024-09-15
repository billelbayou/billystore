import { Game }  from "../../../public/Games";
import GameCard from "./GameCard";

export default function GamesGrid({gamesArray}: {gamesArray: Game[]}) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {gamesArray.map(game => (
          <div key={game.title}>
            <GameCard game={game}/>
          </div>
        ))}
      </div>
    </div>
  );
}
