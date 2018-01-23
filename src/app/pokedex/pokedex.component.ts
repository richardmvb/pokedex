import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../shared/services/pokedex.service';
import { Pokemon } from '../shared/models/pokemon';

@Component({
  providers: [PokedexService],
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  private myPokedexOrderedByAttack: Pokemon[];

  constructor(private _pokedexService: PokedexService) { }

  ngOnInit() {
    this.myPokedexOrderedByAttack = this._pokedexService.getOrderedPokedexByAttack();
  }

  removePokemonFromPokedex(id: number) {
    this._pokedexService.removePokemonFromPokedex(id);
    this.myPokedexOrderedByAttack = this._pokedexService.getOrderedPokedexByAttack();
  }

}
