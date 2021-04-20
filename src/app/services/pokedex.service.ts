import { Injectable } from '@angular/core';
import { forkJoin, Observable, of, BehaviorSubject, throwError } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon';
import { PokemonList } from '../models/pokemon-list';
import { ComponentsService } from './component.service';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private lengthSubject: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  public length$: Observable<number> = this.lengthSubject.asObservable();

  private connectionSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(navigator.onLine);
  public connection$: Observable<boolean> = this.connectionSubject.asObservable();

  constructor(
    private http: HttpClient,
    private componentService: ComponentsService
  ) {
    window.addEventListener('offline', () => {
      this.connectionSubject.next(false);
    });
    window.addEventListener('online', () => {
      this.connectionSubject.next(true);
    });
  }

  getPokemonList(limit: number = 12, offset: number = 0): Observable<Pokemon[]> {
    const getPokemons$ = this.http.get(`${environment.apiBaseUrl}/pokemon?limit=${limit}&offset=${offset}`)
      .pipe(
        tap((res: any) => this.lengthSubject.next(res.count)),
        map((res: PokemonList) => res.results),
        catchError((error) => {
          return throwError(error);
        }),
        mergeMap(this.loadPokemonsFromApiOrDB),
        map(this.pokemonListMap)
      );

    return this.componentService.showLoaderUntilCompleted(getPokemons$);
  }

  getPokemonByID(id: number | string): Observable<Pokemon> {
    return this.http.get(`${environment.apiBaseUrl}/pokemon/${id}`) as Observable<Pokemon>;
  }

  private loadPokemonsFromApiOrDB = (pokemons: { name: string, url: string }[]): Observable<any> => {
    const pokemonsDB = {} || {};
    const details = pokemons.map(pokemon => {
      const id = pokemon.url.split('pokemon/')[1].replace(/[^0-9]/g, '');
      return pokemonsDB[id] ? of(pokemonsDB[id]) : this.getPokemonByID(id);
    });
    return forkJoin(details);
  }

  private pokemonListMap = (pokemonList): Pokemon[] => {
    return pokemonList
      .filter(pokemon => {
        return pokemon.sprites.other || pokemon.sprites.official;
      })
      .map(pokemon => ({
        height: pokemon.height,
        id: pokemon.id,
        name: pokemon.name.split('-')[0],
        sprites: {
          front: pokemon.sprites.front ? pokemon.sprites.front : pokemon.sprites.front_default,
          official: pokemon.sprites.official ? pokemon.sprites.official : pokemon.sprites.other['official-artwork'].front_default
        },
        stats: pokemon.stats,
        types: pokemon.types,
        weight: pokemon.weight
      }));
  }
}
