import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-stats',
  templateUrl: './pokemon-stats.component.html',
  styleUrls: ['./pokemon-stats.component.scss']
})
export class PokemonStatsComponent {
    @Input() stats;
    
    /**
    * Nome dos status traduzidos.
    */
    public statusNames: Map<string, { name: string, color: string }> = new Map([
        ['hp', { name: 'Vida', color: '#FF5959' }],
        ['attack', { name: 'Ataque', color: '#F5AC78' }],
        ['defense', { name: 'Defesa', color: '#FAE078' }],
        ['special-attack', { name: 'Ataque SP', color: '#6890F0' }],
        ['special-defense', { name: 'Defesa SP', color: '#78C850' }],
        ['speed', { name: 'Velocidade', color: '#FA92B2' }]
    ]);
}
