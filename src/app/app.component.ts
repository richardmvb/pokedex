import { Component, OnInit } from '@angular/core';
import { PokemonEntry } from './models/pokemon-entry';
import { PokeapiService } from './services/pokeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: String = 'Poke-AZ';
  public pokemons: PokemonEntry[] = [];

  constructor (private pokeapiService: PokeapiService) { }
  
  ngOnInit(): void {
    this.pokeapiService.findAll().subscribe(
      (data) => {
        this.pokemons = data.pokemons;
      },
      (error) => {
        throw new Error(error);
        
      })
  }

  public speakPokemon(pokemonName: string) {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(pokemonName));
  }
}
