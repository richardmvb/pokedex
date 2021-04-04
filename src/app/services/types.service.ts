import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  public pokemonTypes: Map<number, { name: string, color: string, contrast: string }> = new Map([
    [1, { name: 'normal', color: '#A8A878', contrast: '#FFFFFF' }],
    [2, { name: 'lutador', color: '#C03028', contrast: '#FFFFFF' }],
    [3, { name: 'voador', color: '#A890F0', contrast: '#FFFFFF' }],
    [4, { name: 'venenoso', color: '#A040A0', contrast: '#FFFFFF' }],
    [5, { name: 'terra', color: '#E0C068', contrast: '#FFFFFF' }],
    [6, { name: 'rocha', color: '#B8A038', contrast: '#FFFFFF' }],
    [7, { name: 'inseto', color: '#A8B820', contrast: '#FFFFFF' }],
    [8, { name: 'fantasma', color: '#705898', contrast: '#FFFFFF' }],
    [9, { name: 'Metálico', color: '#B8B8D0', contrast: '#FFFFFF' }],
    [10, { name: 'fire', color: '#F08030', contrast: '#FFFFFF' }],
    [11, { name: 'water', color: '#6890F0', contrast: '#FFFFFF' }],
    [12, { name: 'grass', color: '#78C850', contrast: '#FFFFFF' }],
    [13, { name: 'electric', color: '#F8D030', contrast: '#FFFFFF' }],
    [14, { name: 'psychic', color: '#F85888', contrast: '#FFFFFF' }],
    [15, { name: 'ice', color: '#98D8D8', contrast: '#FFFFFF' }],
    [16, { name: 'dragão', color: '#7038F8', contrast: '#FFFFFF' }],
    [17, { name: 'dark', color: '#705848', contrast: '#FFFFFF' }],
    [18, { name: 'fairy', color: '#EE99AC', contrast: '#FFFFFF' }]
  ]);
}
