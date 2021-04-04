import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PokemonComponent } from './pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonTypesComponent } from './pokemon-detail/pokemon-types/pokemon-types.component';
import { PokemonStatsComponent } from './pokemon-detail/pokemon-stats/pokemon-stats.component';
import { PokemonAbilityInfoComponent } from './pokemon-detail/pokemon-ability-info/pokemon-ability-info.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FeetPipe } from '../utils/feet.pipe';
import { PoundPipe } from '../utils/pound.pipe';

@NgModule({
  declarations: [
    PokemonComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonTypesComponent,
    PokemonStatsComponent,
    PokemonAbilityInfoComponent,
    FeetPipe,
    PoundPipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PokemonModule { }
