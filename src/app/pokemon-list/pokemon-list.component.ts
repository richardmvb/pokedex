import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../shared/services/pokeapi.service';
import { PokemonEntry } from '../shared/models/pokemon-entry';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  providers: [PokeapiService],
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: PokemonEntry[];
  count = 0;
  offset = 0;
  limit = 20;
  loading = false;
  failed = false;

  constructor(private _service: PokeapiService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    const observable = this._route.params
      .map(params => params['nr'])
      .map(pageNr => (pageNr - 1) * this.limit);
    observable.subscribe(offset => this.offset = offset);
    observable.share().subscribe(offset => this.findAll(offset, this.limit));
  }

  findAll(offset: number, limit: number) {
    this.pokemons = [];
    this.loading = true;
    this.failed = false;
    this._service.findAll(offset, limit).subscribe(result => {
      this.pokemons = result.pokemons;
      this.count = result.count;
      this.loading = false;
    }, () => {
      this.loading = false;
      this.failed = true;
    });
  }

  onPageChange(offset) {
    this.offset = offset;
    this._router.navigate(['/page', (offset / this.limit) + 1]);
  }

}
