import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../services/shows.service';
import { ActivatedRoute} from '@angular/router';
import IShow from '../services/IShow';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  constructor(
    private ShowsService: ShowsService,
    private route: ActivatedRoute
  ) { }

  showData: IShow;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getShow(Number(params['id']));
    });
  }

  getShow(id: number): void {
    this.ShowsService.getShow(id).subscribe(data => {
      this.showData = data;
      this.ShowsService.setLastVisitedShows(data);
    });
  }

}
