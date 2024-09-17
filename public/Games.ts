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
  description: string
};

export const Games: Game[] = [
  {
    id: 1,
    title: "Grand Theft Auto V",
    Image: GrandTheftAutoV,
    price: 14.99,
    category: "Action-Adventure",
    bestSellers: true,
    newGames: false,
    description: "Grand Theft Auto V offers players an expansive and highly detailed open world where they can engage in everything from high-stakes heists to simply enjoying a ride through Los Santos. The game features a massive storyline with three distinct protagonists and an online mode, GTA Online, where players can build their criminal empires or compete in adrenaline-fueled races and deathmatches.",
  },
  {
    id: 2,
    title: "Red Dead Redemption 2",
    Image: RedDeadRedemption2,
    price: 59.99,
    category: "Action-Adventure",
    bestSellers: true,
    newGames: false,
    description: "Red Dead Redemption 2 is an epic tale of life in America's unforgiving heartland. Set at the turn of the century, the game follows Arthur Morgan, an outlaw struggling to survive in a world that’s changing rapidly. Experience an expansive open world filled with danger, opportunity, and immersive storytelling, where every choice shapes the outcome of your journey.",
  },
  {
    id: 3,
    title: "Elden Ring",
    Image: EldenRing,
    price: 59.99,
    category: "Action RPG",
    bestSellers: true,
    newGames: true,
    description: "Elden Ring, developed by FromSoftware, combines intricate level design, punishing combat, and an expansive open-world structure. Players must navigate the Lands Between, a mythical realm torn apart by war and shrouded in mystery. With deep lore written by George R. R. Martin, this action RPG offers vast freedom, customization, and countless secrets to uncover.",
  },
  {
    id: 4,
    title: "Forza Horizon 5",
    Image: ForzaHorizon5,
    price: 29.99,
    category: "Racing",
    bestSellers: true,
    newGames: false,
    description: "Forza Horizon 5 invites players to explore the diverse landscapes of Mexico in the most expansive Forza world yet. With stunning visuals, dynamic weather, and a seamless open world, the game offers thrilling races, customizable cars, and an array of challenges. Experience the beauty of Mexican cities, forests, deserts, and beaches in exhilarating high-speed competitions.",
  },
  {
    id: 5,
    title: "The Witcher 3: Wild Hunt",
    Image: TheWitcher3,
    price: 39.99,
    category: "Action RPG",
    bestSellers: true,
    newGames: false,
    description: "The Witcher 3: Wild Hunt is a genre-defining RPG that immerses players in a world of moral ambiguity, complex characters, and stunning open-world environments. As Geralt of Rivia, a monster hunter for hire, players will traverse vast lands, battle fearsome creatures, and make tough choices that shape the course of the story. With rich lore and countless side quests, the world of The Witcher is teeming with adventure.",
  },
  {
    id: 6,
    title: "ARK: Survival Evolved",
    Image: ARK,
    price: 14.99,
    category: "Survival",
    bestSellers: false,
    newGames: false,
    description: "ARK: Survival Evolved challenges players to survive in a prehistoric world filled with dinosaurs and other ancient creatures. Players must gather resources, build shelters, and craft weapons to survive the harsh environment. With both cooperative and competitive multiplayer, ARK offers an expansive world of exploration and adventure, where players can tame dinosaurs or wage wars against rival tribes.",
  },
  {
    id: 7,
    title: "Battlefield 2042",
    Image: Battlefield2042,
    price: 59.99,
    category: "First-Person Shooter",
    bestSellers: false,
    newGames: true,
    description: "Battlefield 2042 brings players into a near-future world ravaged by climate disasters and geopolitical conflict. Featuring massive, dynamic maps, this first-person shooter allows up to 128 players to engage in epic battles. The game introduces new mechanics such as tornadoes, wingsuits, and adaptable weapons, adding complexity to its hallmark fast-paced combat.",
  },
  {
    id: 8,
    title: "Black Myth: Wukong",
    Image: blackmythwukong,
    price: 59.99,
    category: "Action RPG",
    bestSellers: false,
    newGames: true,
    description: "Black Myth: Wukong is a visually stunning action RPG based on the Chinese myth of the Monkey King. Players will encounter mythical creatures, solve puzzles, and engage in fast-paced, strategic combat. The game’s rich visuals and deep storytelling, combined with challenging gameplay, immerse players in a mythical world filled with folklore and adventure.",
  },
  {
    id: 9,
    title: "Call of Duty: Modern Warfare III",
    Image: codmw3,
    price: 69.99,
    category: "First-Person Shooter",
    bestSellers: true,
    newGames: true,
    description: "Call of Duty: Modern Warfare III is the latest installment in the legendary first-person shooter series. Featuring a gripping single-player campaign and expansive multiplayer modes, this game provides action-packed combat with cutting-edge weapons, tactical gameplay, and cooperative missions. Modern Warfare III pushes the boundaries of realism and scale in war games.",
  },
  {
    id: 10,
    title: "Cyberpunk 2077",
    Image: cyberpunk2077,
    price: 59.99,
    category: "Action RPG",
    bestSellers: false,
    newGames: false,
    description: "Cyberpunk 2077 transports players into a dystopian future where they assume the role of V, a mercenary in the vast, high-tech world of Night City. With branching storylines, character customization, and cutting-edge combat, players can explore a rich narrative experience filled with complex characters, corporate corruption, and stunning futuristic environments.",
  },
  {
    id: 11,
    title: "EA Sports FC 24",
    Image: fc24,
    price: 69.99,
    category: "Sports",
    bestSellers: true,
    newGames: true,
    description: "EA Sports FC 24 is the next evolution in football gaming, delivering realistic gameplay with advanced mechanics and updated teams. Build your dream team in Ultimate Team, lead your club to glory in Career Mode, or compete online against the best in the world. With new animations and enhanced tactics, this is the ultimate football simulation.",
  },
  {
    id: 12,
    title: "God of War",
    Image: godofwar,
    price: 19.99,
    category: "Action-Adventure",
    bestSellers: true,
    newGames: false,
    description: "God of War is a modern retelling of the classic mythological journey of Kratos, who now battles against Norse gods and monsters. The game combines brutal combat, heartwarming father-son dynamics, and breathtaking landscapes. Players will explore realms, solve puzzles, and engage in epic battles as they uncover the mysteries of Kratos’ past and his new role as a father.",
  },
  {
    id: 13,
    title: "Hitman 3",
    Image: hitman3,
    price: 5.79,
    category: "Stealth",
    bestSellers: false,
    newGames: false,
    description: "In Hitman 3, players become Agent 47, a highly skilled assassin tasked with eliminating high-profile targets around the world. The game features massive, open-ended levels that offer players the freedom to complete their missions in a variety of creative and stealthy ways. With stunning locales and intricate assassination opportunities, Hitman 3 offers a thrilling and strategic stealth experience.",
  },
  {
    id: 14,
    title: "NBA 2K24",
    Image: nba2k,
    price: 59.99,
    category: "Sports",
    bestSellers: true,
    newGames: true,
    description: "NBA 2K24 delivers an authentic basketball experience with stunning graphics, realistic gameplay, and all your favorite NBA teams and players. Play through the immersive career mode, lead your team to victory in MyTeam, or compete online in multiplayer modes. With cutting-edge animations and detailed player models, NBA 2K24 offers a top-tier sports simulation.",
  },
  {
    id: 15,
    title: "No Man's Sky",
    Image: nomanssky,
    price: 23.99,
    category: "Survival",
    bestSellers: false,
    newGames: false,
    description: "No Man’s Sky is an expansive space exploration game where players can discover planets, creatures, and star systems that are procedurally generated. The game allows players to explore freely, collect resources, and build bases across a nearly infinite universe. With multiplayer modes, frequent updates, and massive world-building opportunities, it offers a vast and endless journey of exploration.",
  },
  {
    id: 16,
    title: "Rust",
    Image: rust,
    price: 39.99,
    category: "Survival",
    bestSellers: false,
    newGames: false,
    description: "Rust is a multiplayer survival game that places players in a harsh, post-apocalyptic world. Players must gather resources, craft weapons, and build bases to protect themselves from other players. The game offers a brutal and unforgiving world where danger lurks around every corner, and survival depends on quick thinking and strategic gameplay.",
  },
  {
    id: 17,
    title: "Dishonored 2",
    Image: dishonored2,
    price: 19.99,
    category: "Stealth",
    bestSellers: true,
    newGames: false,
    description: "Dishonored 2 places players in the shoes of an assassin with supernatural abilities as they navigate a complex world filled with intrigue and treachery. Set in a dystopian society, players can choose between two protagonists, each with unique powers and abilities, as they stealthily eliminate enemies or cause chaos. The game's rich narrative, combined with its detailed world, offers an unparalleled stealth experience.",
  },
  {
    id: 18,
    title: "Assetto Corsa",
    Image: assettoCorsa,
    price: 29.99,
    category: "Racing",
    bestSellers: true,
    newGames: false,
    description: "Assetto Corsa is a racing simulator that provides players with a highly realistic driving experience. With meticulously detailed cars, laser-scanned tracks, and accurate physics, the game delivers an authentic racing experience. Whether you're competing in intense races or simply enjoying the thrill of driving, Assetto Corsa offers one of the most immersive and rewarding racing games available.",
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
