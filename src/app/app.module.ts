import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AnimesComponent } from './animes/animes.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimesComponent,
    AnimeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
