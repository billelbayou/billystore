import Image from "next/image";
import rdr2Wide from "../../public/rdr2.jpg";
import { GoHeart } from "react-icons/go";
import Carousel from "@/components/ui/Carousel";
import Games, { BestGames, NewGames } from "../../public/Games";
import GamesGrid from "@/components/ui/GamesGrid";
import BuyButton from "@/components/ui/BuyButton";

export default function Home() {
  const rdr2 = Games[1];

  return (
    <div className="p-4 h-full w-full">
      <div className="rounded-xl relative w-fit h-fit">
        <Image
          src={rdr2Wide}
          alt="Red Dead Redemtption 2"
          className="rounded-xl"
        />
        <div className="absolute bottom-0 text-white flex justify-between w-full p-8 items-end">
          <div className="w-96">
            <h2 className="text-2xl font-bold mb-5">{rdr2.title}</h2>
            <p>
              RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van
              der Linde gang, on the run across America at the dawn of the
              modern age.
            </p>
          </div>
          <div className="flex items-center">
            <BuyButton game={rdr2} />
            <button className="h-14 w-14 bg-white/30 rounded-xl flex justify-center items-center">
              <GoHeart size={20} />
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="side-heading">Actual Games</h2>
        <Carousel imagesUrl={Games.map((game) => game.Image)} />
      </div>
      <div>
        <h2 className="side-heading">Best Sellers</h2>
        <GamesGrid gamesArray={BestGames} />
      </div>
      <div>
        <h2 className="side-heading">New Games</h2>
        <GamesGrid gamesArray={NewGames} />
      </div>
    </div>
  );
}
