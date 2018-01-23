import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { Pokedex } from '../models/pokedex';

@Injectable()
export class PokedexService {
  private nextId: number;

  constructor() {
    const pokedex = this.getPokedex();
  }

  public addPokemonToPokedex(pokemon: Pokemon): void {
    const pokedex = this.getPokedex();
    pokedex.push(pokemon);

    // save the pokedex to local storage
    this.setLocalStorageTodos(pokedex);
  }

  public getPokedex(): Pokemon[] {
    const localStorageItem = JSON.parse(localStorage.getItem('pokedex'));
    return localStorageItem === null ? [] : localStorageItem.pokedex;
  }

  public removePokemonFromPokedex(id: number): void {
    let pokedex = this.getPokedex();
    pokedex = pokedex.filter((pokemon) => pokemon.baseInfo.id !== id);
    this.setLocalStorageTodos(pokedex);
  }

  public getSizeOfPokedex() {
    return this.getPokedex().length;
  }

  public getOrderedPokedexByAttack(): Pokemon[] {
    return this.getPokedex().sort((a: any, b: any) => {
      if (a.stats.attack > b.stats.attack) {
        return -1;
      } else if (a.stats.attack < b.stats.attack) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  // private function to help save to local storage
  private setLocalStorageTodos(pokedex: Pokemon[]): void {
    localStorage.setItem('pokedex', JSON.stringify({ pokedex: pokedex }));
  }

}
