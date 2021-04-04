import { PokemonAbility } from "./pokemon-ability";
import { PokemonMoves } from "./pokemon-moves";
import { PokemonStats } from "./pokemon-stats";
import { PokemonType } from "./pokemon-type";

export class PokemonEntry {
  id: number;
  name: string;
  sprite: string;
  height: number;
  weight: number;
  abilities: PokemonAbility[];
  moves: PokemonMoves[];
  genera: string;
  base_experience: string;
  types: PokemonType[];
  stats: PokemonStats[];
  sprites: any;

  constructor() {}
}
