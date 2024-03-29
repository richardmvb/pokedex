import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  @Input() public pokemons: Pokemon[] = [];

  constructor(private router: Router, private typesService: TypesService) { }

  ngOnInit(): void { }

  public openPokemonDetail(pokemonId: number) {
    this.router.navigate([`pokemon/${pokemonId}`]);
  }

  getPokemonType(types): string {
    if (types.length === 1) {
      const typeID = +types[0].type.url.split('type/')[1].replace(/[^0-9]/g, '');
      return `${this.typesService.pokemonTypes.get(typeID).name}`;
      // return `${this.typesService.pokemonTypes.get(typeID).color}e3`;
    } else {
      const firstTypeID = +types[0].type.url.split('type/')[1].replace(/[^0-9]/g, '');
      const secondTypeID = +types[1].type.url.split('type/')[1].replace(/[^0-9]/g, '');
      return `${this.typesService.pokemonTypes.get(firstTypeID).name}`;
      /* return `linear-gradient(130deg, ${this.typesService.pokemonTypes.get(firstTypeID).color} 0%,
      ${this.typesService.pokemonTypes.get(secondTypeID).color} 100%)`; */
    }
  }

  generateCardClass(types): string {
    if (types.length === 1) {
      const typeID = +types[0].type.url.split('type/')[1].replace(/[^0-9]/g, '');
      return `card--${this.typesService.pokemonTypes.get(typeID).name}`;
      // return `${this.typesService.pokemonTypes.get(typeID).color}e3`;
    } else {
      const firstTypeID = +types[0].type.url.split('type/')[1].replace(/[^0-9]/g, '');
      const secondTypeID = +types[1].type.url.split('type/')[1].replace(/[^0-9]/g, '');
      return `card--${this.typesService.pokemonTypes.get(firstTypeID).name}`;
      /* return `linear-gradient(130deg, ${this.typesService.pokemonTypes.get(firstTypeID).color} 0%,
      ${this.typesService.pokemonTypes.get(secondTypeID).color} 100%)`; */
    }
  }
}
