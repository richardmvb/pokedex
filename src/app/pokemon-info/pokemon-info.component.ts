import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from '../shared/services/pokeapi.service';
import { Pokemon } from '../shared/models/pokemon';
import { Title } from '@angular/platform-browser';

@Component({
  providers: [PokeapiService],
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {
  pokemon: Pokemon;
  loading = false;
  failed = false;

  constructor(private _route: ActivatedRoute, private _service: PokeapiService, private _titleService: Title) { }

  ngOnInit() {
    const observable = this._route.params
      .map(params => params['id'])
      .flatMap(id => this._service.findOne(id))
      .share();
    this.loading = true;
    this.failed = false;
    observable.subscribe(pokemon => {
      this.pokemon = pokemon;
      this.loading = false;
    }, () => {
      this.loading = false;
      this.failed = true;
    });
    observable.subscribe(pokemon => {
      this._titleService.setTitle(`#${pokemon.baseInfo.id} - ${pokemon.baseInfo.name}`);
    });
  }

}
