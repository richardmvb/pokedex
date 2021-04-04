import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokedexService } from '../services/pokedex.service';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
    public pokemons: Pokemon[] = [];

    constructor(private pokedexService: PokedexService) { }

    ngOnInit(): void {
        this.fetchPokemons();
    }

    private fetchPokemons() {
        this.pokedexService.getPokemonList().subscribe(
            (data) => {
                console.log(data)
                this.pokemons = data;
            },
            (error) => {
                throw new Error(error);
            })
    }
}
