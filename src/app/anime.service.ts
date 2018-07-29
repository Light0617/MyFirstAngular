import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Anime } from './anime';
import { ANIMES } from './mock-animes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class AnimeService {
  constructor(private messageService: MessageService) { }

  getAnimes(): Observable<Anime[]> {
    // TODO: send the message _after_ fetching the animees
    this.messageService.add('AnimeService: fetched animes')
    return of(ANIMES);
  }

  getAnime(id: number): Observable<Anime> {
    // TODO: send the message _after_ fetching the anime
    this.messageService.add(`AnimeService: fetched anime id=${id}`);
    return of(ANIMES.find(anime => anime.id === id));
  }
}
