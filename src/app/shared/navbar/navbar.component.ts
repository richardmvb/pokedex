import { Component, Input } from '@angular/core';
import { PokedexService } from '../../shared/services/pokedex.service';

@Component({
  providers: [PokedexService],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  @Input() title: String;

  constructor(private _pokedexService: PokedexService) { }
}
