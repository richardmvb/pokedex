import { PokemonEntry } from './pokemon-entry';

export interface PokemonList {
    count: number;
    next: string;
    previous: any;
    results: {
        name: string;
        url: string;
    }[];
}

