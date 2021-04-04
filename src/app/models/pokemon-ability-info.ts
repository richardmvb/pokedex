import { PokemonAbility } from './pokemon-ability';
import { PokemonMoves } from './pokemon-moves';

export class PokemonAbilityInfo {
  height: number;
  weight: number;
  abilities: PokemonAbility[];
  moves: PokemonMoves[];
  category: string;
  genera: string | any;
  base_experience: string;


  constructor(height: number, weight: number, abilities: PokemonAbility[], moves: PokemonMoves[], category: string, base_experience: string) {
    this.height = height;
    this.weight = weight;
    this.abilities = abilities;
    this.moves = moves;
    this.category = category;
    this.base_experience = base_experience;
  }
}
