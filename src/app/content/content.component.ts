import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../services/shows.service';
import IShow from '../services/IShow';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  popularShows: IShow[];
  lastVisitedShows: IShow[];

  constructor(
    private ShowsService: ShowsService
  ) { }

  ngOnInit(): void {
    this.ShowsService.getShows().subscribe(data => {
      this.popularShows = data.sort((a, b) => b.weight - a.weight).slice(0, 10);
    });

    this.lastVisitedShows = this.ShowsService.getLastVisitedShows();
  }
}
