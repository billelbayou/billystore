"use client";

import GamesGrid from "@/components/ui/GamesGrid";
import Games, { Game, gameCategories } from "../../../public/Games";
import { useState } from "react";

export default function CategoryPage() {
  const [categoryArray, setCategoryArray] = useState<Game[]>(Games);

  return (
    <div className="h-full w-full p-3">
      <div className="mb-4 rounded-lg overflow-hidden">
        <ul className="bg-secondary justify-between h-full flex ">
          {gameCategories.map((category) => (
            <li key={category} className="p-4 hover:bg-primary">
              <button
                className="flex justify-center items-center"
                onClick={() =>
                  setCategoryArray(() =>
                    Games.filter((game) => game.category === category)
                  )
                }
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="ml-auto">
        <GamesGrid gamesArray={categoryArray} />
      </div>
    </div>
  );
}
