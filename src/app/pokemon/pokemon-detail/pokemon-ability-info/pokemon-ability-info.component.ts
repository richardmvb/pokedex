import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-ability-info',
  templateUrl: './pokemon-ability-info.component.html',
  styleUrls: ['./pokemon-ability-info.component.scss']
})
export class PokemonAbilityInfoComponent {
  @Input() pokemon: Pokemon;

  constructor() { }

}
