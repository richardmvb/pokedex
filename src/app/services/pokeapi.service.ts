import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from '../../environments/environment';

import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { PokemonList } from "../models/pokemon-list";
import { PokemonEntry } from "../models/pokemon-entry";

@Injectable()
export class PokeapiService {
    private DEFAULT_LIMIT: number = 500;
    private DEFAULT_OFFSET: number = 0;
    private _detailRegex = /^https:\/\/pokeapi.co\/api\/v2\/pokemon\/(\d+)\/$/;

    constructor(private http: HttpClient) { }

    public findAll(offset: number = this.DEFAULT_OFFSET, limit: number = this.DEFAULT_LIMIT): Observable<any> {
        return this.http
            .get(`${environment.apiBaseUrl}/pokemon/?offset=${offset}&limit=${limit}`)
            .pipe(
                map(data => this.getList(data)),
                catchError(this.handleError)
            );
    }

    private getList(data: any): PokemonList {
        const results = data.results
            .map(result => this.getEntry(result))
            .filter(entry => entry.id < 10000);
        return new PokemonList(results, data.count);
    }

    private getEntry(data: any): PokemonEntry {
        const matches = this._detailRegex.exec(data.url),
            id = matches == null ? null : parseInt(matches[1]),
            sprite = id == null ? null : `${environment.spriteBaseUrl}/${id}.png`;
        return new PokemonEntry(id, data.name, sprite);
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return throwError(
            'Something bad happened; please try again later.');
    }
}