import { MaterializeModule } from 'angular2-materialize';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonEntryComponent } from './pokemon-list/pokemon-entry/pokemon-entry.component';
import { PokemonAbilityInfoComponent } from './pokemon-info/pokemon-ability-info/pokemon-ability-info.component';
import { PokemonDescriptionComponent } from './pokemon-info/pokemon-description/pokemon-description.component';
import { PokemonStatsComponent } from './pokemon-info/pokemon-stats/pokemon-stats.component';
import { PokemonTypesComponent } from './pokemon-info/pokemon-types/pokemon-types.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { LoaderComponent } from './shared/loader/loader.component';

import { FeetPipe } from './shared/metrics/feet.pipe';
import { PoundPipe } from './shared/metrics/pound.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonEntryComponent,
    PaginationComponent,
    PokemonInfoComponent,
    NavbarComponent,
    PokemonAbilityInfoComponent,
    FeetPipe,
    PoundPipe,
    PokemonDescriptionComponent,
    PokemonTypesComponent,
    PokemonStatsComponent,
    PokedexComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'pokemon/:id', component: PokemonInfoComponent },
      { path: 'page/:nr', component: PokemonListComponent },
      { path: 'pokedex', component: PokedexComponent },
      { path: '', redirectTo: '/page/1', pathMatch: 'full' }
    ]),
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
