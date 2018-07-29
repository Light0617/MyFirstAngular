import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Anime } from '../anime';
import { AnimeService }  from '../anime.service'

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {
  @Input() anime: Anime;

  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAnime();
  }

  getAnime(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.animeService.getAnime(id)
      .subscribe(anime => this.anime = anime);
  }

  goBack(): void {
    this.location.back();
  }
}
