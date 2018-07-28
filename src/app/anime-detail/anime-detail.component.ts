import { Component, OnInit, Input } from '@angular/core';
import { Anime } from '../anime';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  // <app-anime-detail [anime]="selectedAnime"></app-anime-detail>
  constructor() { }
  @Input() anime: Anime;
  ngOnInit() {
  }

}
