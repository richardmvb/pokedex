import { Pokemon } from './pokemon';

export class Pokedex {
    myPokedex: Pokemon[];

    constructor(myPokedex: Pokemon[]) {
        this.myPokedex = myPokedex;
    }
}
