import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { AnimesComponent } from './animes/animes.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    AnimesComponent,
    AnimeDetailComponent,
    MessagesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
