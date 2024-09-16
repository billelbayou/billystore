import GrandTheftAutoV from "./Games/Grand Theft Auto V.jpg";
import ForzaHorizon5 from "./Games/Forza Horizon 5.png";
import TheWitcher3 from "./Games/The Witcher 3 Wild Hunt.png";
import EldenRing from "./Games/Elden Ring.jpg";
import RedDeadRedemption2 from "./Games/Red Dead Redemption 2.png";
import ARK from "./Games/ARK Survival Evolved.jpg";
import Battlefield2042 from "./Games/Battlefield 2042.jpg";
import blackmythwukong from "./Games/Black Myth Wukong.jpg";
import codmw3 from "./Games/CODMW3.png";
import cyberpunk2077 from "./Games/Cyberpunk 2077.jpg";
import fc24 from "./Games/FC24.jpg";
import godofwar from "./Games/God of War.jpg";
import hitman3 from "./Games/Hitman 3.png";
import nba2k from "./Games/NBA2K.png";
import nomanssky from "./Games/No Man's Sky.png";
import rust from "./Games/Rust.png";
import dishonored2 from "./Games/Dishonored 2.jpg";
import assettoCorsa from "./Games/Assetto Corsa.jpg";
import { StaticImageData } from "next/image";

export const gameCategories: string[] = [
  "Action-Adventure",
  "Action RPG",
  "Racing",
  "Survival",
  "First-Person Shooter",
  "Sports",
  "Stealth",
];

export type Game = {
  id: number;
  title: string;
  Image: StaticImageData;
  price: number;
  category: string;
  bestSellers: boolean;
  newGames: boolean;
};

const Games: Game[] = [
  {
    id: 1,
    title: "Grand Theft Auto V",
    Image: GrandTheftAutoV,
    price: 14.99,
    category: "Action-Adventure",
    bestSellers: true,
    newGames: false,
  },
  {
    id: 2,
    title: "Red Dead Redemption 2",
    Image: RedDeadRedemption2,
    price: 59.99,
    category: "Action-Adventure",
    bestSellers: true,
    newGames: false,
  },
  {
    id: 3,
    title: "Elden Ring",
    Image: EldenRing,
    price: 59.99,
    category: "Action RPG",
    bestSellers: true,
    newGames: true,
  },
  {
    id: 4,
    title: "Forza Horizon 5",
    Image: ForzaHorizon5,
    price: 29.99,
    category: "Racing",
    bestSellers: true,
    newGames: false,
  },
  {
    id: 5,
    title: "The Witcher 3: Wild Hunt",
    Image: TheWitcher3,
    price: 39.99,
    category: "Action RPG",
    bestSellers: true,
    newGames: false,
  },
  {
    id: 6,
    title: "ARK: Survival Evolved",
    Image: ARK,
    price: 14.99,
    category: "Survival",
    bestSellers: false,
    newGames: false,
  },
  {
    id: 7,
    title: "Battlefield 2042",
    Image: Battlefield2042,
    price: 59.99,
    category: "First-Person Shooter",
    bestSellers: false,
    newGames: true,
  },
  {
    id: 8,
    title: "Black Myth: Wukong",
    Image: blackmythwukong,
    price: 59.99,
    category: "Action RPG",
    bestSellers: false,
    newGames: true,
  },
  {
    id: 9,
    title: "Call of Duty: Modern Warfare III",
    Image: codmw3,
    price: 69.99,
    category: "First-Person Shooter",
    bestSellers: true,
    newGames: true,
  },
  {
    id: 10,
    title: "Cyberpunk 2077",
    Image: cyberpunk2077,
    price: 59.99,
    category: "Action RPG",
    bestSellers: false,
    newGames: false,
  },
  {
    id: 11,
    title: "EA Sports FC 24",
    Image: fc24,
    price: 69.99,
    category: "Sports",
    bestSellers: true,
    newGames: true,
  },
  {
    id: 12,
    title: "God of War",
    Image: godofwar,
    price: 19.99,
    category: "Action-Adventure",
    bestSellers: true,
    newGames: false,
  },
  {
    id: 13,
    title: "Hitman 3",
    Image: hitman3,
    price: 5.79,
    category: "Stealth",
    bestSellers: false,
    newGames: false,
  },
  {
    id: 14,
    title: "NBA 2K24",
    Image: nba2k,
    price: 59.99,
    category: "Sports",
    bestSellers: true,
    newGames: true,
  },
  {
    id: 15,
    title: "No Man's Sky",
    Image: nomanssky,
    price: 23.99,
    category: "Survival",
    bestSellers: false,
    newGames: false,
  },
  {
    id: 16,
    title: "Rust",
    Image: rust,
    price: 39.99,
    category: "Survival",
    bestSellers: false,
    newGames: false,
  },
  {
    id: 17,
    title: "Dishonored 2",
    Image: dishonored2,
    price: 19.99,
    category: "Stealth",
    bestSellers: true,
    newGames: false,
  },
  {
    id: 18,
    title: "Assetto Corsa",
    Image: assettoCorsa,
    price: 29.99,
    category: "Racing",
    bestSellers: true,
    newGames: false,
  },
];

export const survivalCategory = Games.filter(
  (game) => game.category === "Survival"
);
export const actionAdventureCategory = Games.filter(
  (game) => game.category === "Action-Adventure"
);
export const stealthCategory = Games.filter(
  (game) => game.category === "Stealth"
);
export const sportsCategory = Games.filter(
  (game) => game.category === "Sports"
);
export const actionRPGCategory = Games.filter(
  (game) => game.category === "Action RPG"
);
export const FPSCategory = Games.filter(
  (game) => game.category === "First-Person Shooter"
);
export const racingCategory = Games.filter(
  (game) => game.category === "Racing"
);
export const BestGames = Games.filter((game) => game.bestSellers);
export const NewGames = Games.filter((game) => game.newGames);

export default Games;
