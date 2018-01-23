import { Component, Input   } from '@angular/core';
import { PokedexService } from '../../shared/services/pokedex.service';
import { PokeapiService } from '../../shared/services/pokeapi.service';
import { PokemonEntry } from '../../shared/models/pokemon-entry';
import { Pokedex } from '../../shared/models/pokedex';

@Component({
  providers: [PokeapiService, PokedexService],
  selector: 'app-pokemon-entry',
  templateUrl: './pokemon-entry.component.html',
  styleUrls: ['./pokemon-entry.component.css']
})
export class PokemonEntryComponent {
  @Input() pokemon: PokemonEntry = null;
  @Input() withLink = true;
  loading = false;
  failed = false;

  constructor(private _service: PokeapiService, private _pokedexService: PokedexService) { }

  addToPokedex(pokemon: PokemonEntry) {
    // Pokedex full with 6 pokemons
    if ( this._pokedexService.getSizeOfPokedex() < 6 ) {
      this.loading = true;
      this.failed = false;
      const observable = this._service.findOne(pokemon.id);
      observable.subscribe(p => {
        alert('Pokemon added successfully!');
        this._pokedexService.addPokemonToPokedex(p);
        this.loading = false;
      }, () => {
        this.loading = false;
        this.failed = true;
      });
    }else {
      alert('Pokédex is full!');
      this.loading = false;
      this.failed = false;
    }
  }

}
