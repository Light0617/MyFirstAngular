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
  selectedAnime: Anime;

  constructor(private animeService: AnimeService) { }

  ngOnInit() {
    this.getAnimes();
  }

  onSelect(anime: Anime): void {
    this.selectedAnime = anime;
  }

  getAnimes(): void {
    this.animeService.getAnimes()
      .subscribe(animes => this.animes = animes);
  }

}
