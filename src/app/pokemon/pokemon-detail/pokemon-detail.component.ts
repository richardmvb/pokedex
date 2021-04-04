import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  public pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokedexService: PokedexService,
    public locationService: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      const pokemonId = parseInt(param.get('id'));
      this.getPokemonById(pokemonId);
    });
  }

  private getPokemonById(pokemonId: number): void {
    this.pokedexService.getPokemonByID(pokemonId).subscribe(pokemon => {
      console.log(pokemon);
      this.pokemon = this.initializePokémonInformation(pokemon);
    });
  }

  private initializePokémonInformation(pokemon): Pokemon {
    return {
      height: pokemon.height,
      id: pokemon.id,
      name: pokemon.name.split('-')[0],
      sprites: {
        front: pokemon.sprites.front ? pokemon.sprites.front : pokemon.sprites.front_default,
        official: pokemon.sprites.official ? pokemon.sprites.official : pokemon.sprites.other['official-artwork'].front_default
      },
      stats: pokemon.stats,
      types: pokemon.types,
      weight: pokemon.weight,
      base_experience: pokemon.base_experience,
      abilities: pokemon.abilities,
      moves: pokemon.moves.slice(0, 10)
    };
  }
}
