import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../models/pokemon';
import { PokedexService } from '../services/pokedex.service';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
    public pokemons: Pokemon[] = [];

    constructor(
        private pokedexService: PokedexService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            const pokemonListSize = (params.size) ? params.size : 12; 
            this.fetchPokemons(pokemonListSize);
        });        
    }

    private fetchPokemons(size) {
        this.pokedexService.getPokemonList(size).subscribe(
            (data) => {
                this.pokemons = data;
            },
            (error) => {
                throw new Error(error);
            })
    }
}
