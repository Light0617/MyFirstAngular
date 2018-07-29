import { Injectable } from '@angular/core';

import { Anime } from './anime';
import { ANIMES } from './mock-animes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class AnimeService {
  constructor(private messageService: MessageService) { }

  getAnimes(): Observable<Anime[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('AnimeService: fetched animes')
    return of(ANIMES);
  }
}