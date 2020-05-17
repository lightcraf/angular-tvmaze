import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../services/shows.service';
import IShow from '../services/IShow';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  shows: IShow[];
  genreList: string[];
  genreParam: string;
  newShows: IShow[];

  constructor(
    private route: ActivatedRoute,
    private ShowsService: ShowsService
  ) { }

  ngOnInit(): void {
    this.ShowsService.getShows().subscribe(data => {
      this.shows = data;

      const genres: string[] = data.map(item => {
        return item.genres;
      }).reduce((acc, val) => acc.concat(val), []);

      this.genreList = [...new Set(genres)];

      this.route.queryParams.subscribe(params => {
        if (params['genre']) {
          const genre: string = params['genre'].toLowerCase();
          this.genreParam = genre;
          this.filterShowsByGenre(genre);
        } else {
          this.genreParam = '';
          this.newShows = this.shows.slice(0, 40);
        }
      });
    });

  }

  filterShowsByGenre(genre: string): void {
    this.newShows = this.shows.filter(item => {
      return item.genres.map(i => i.toLowerCase()).includes(genre);
    }).slice(0, 40);
  }

}
