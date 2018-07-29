import { Component, OnInit } from '@angular/core';

import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {
  animes: Anime[];

  constructor(private animeService: AnimeService) { }

  ngOnInit() {
    this.getAnimes();
  }

  getAnimes(): void {
    this.animeService.getAnimes()
      .subscribe(animes => this.animes = animes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.animeService.addAnime({ name } as Anime)
      .subscribe(anime => {
        this.animes.push(anime);
      });
  }

  delete(anime: Anime): void{
    this.animes = this.animes.filter(h => h != anime);
    this.animeService.deleteAnime(anime).subscribe();
  }

}
