"use client";

import { useState } from "react";
import Games from "../../../../public/Games";
import Image from "next/image";
import GamesGrid from "@/components/ui/GamesGrid";

const platforms = ["PC", "XBOX", "PLAYSTATION"];

export default function GamePage({ params }: { params: { gameId: string } }) {
  const game = Games.find((game) => game.id === parseInt(params.gameId));

  const [platform, setPlatform] = useState(0);

  function handleClick(index: number) {
    setPlatform(index);
  }

  if (!game) {
    return <p>Game id not found</p>;
  }

  const sameCategory = Games.filter(element => element.category === game.category).filter(e => e !== game)

  return (
    <div className="w-full h-full">
      <div className="flex my-10">
        <div className="w-1/3">
          <Image src={game.Image} alt={game.title} />
        </div>
        <div className="flex-1 flex flex-col mx-10">
          <p>Category &gt; {game.category}</p>
          <div className="flex justify-between items-center mt-5">
            <h2 className="text-3xl font-bold text-white">{game.title}</h2>
            <h1 className="text-3xl text-white font-bold">${game.price}</h1>
          </div>
          <div className="mt-10">
            <p className="mb-5 text-xl">Choose a platform :</p>
            <div className="flex">
              {platforms.map((element, index) => (
                <div
                  onClick={() => handleClick(index)}
                  key={element}
                  className={`w-44 text-center cursor-pointer p-4 ${
                    platform === index ? "bg-primary" : "bg-secondary"
                  }`}
                >
                  <h2 className="text-xl">{element}</h2>
                </div>
              ))}
            </div>
            <div className="py-5">
              <h2 className="text-xl text-white">Game description :</h2>
              <p>{game.description}</p>
            </div>
          </div>
          <div className="w-full h-20 bg-primary flex justify-center items-center mt-auto">
            <p className="text-3xl font-bold">Add to cart</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl mb-5">Similair Games :</h2>
        <GamesGrid gamesArray={sameCategory}/>
      </div>
    </div>
  );
}
