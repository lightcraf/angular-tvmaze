import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ShowsService } from '../services/shows.service';
import IShow from '../services/IShow';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchResult: IShow;

  constructor(
    private route: ActivatedRoute,
    private ShowsService: ShowsService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.onSearchShow(params['q'])
    });
  }

  onSearchShow(searchValue: string): void {
    this.ShowsService.searchShow(searchValue).subscribe(data => {
      this.searchResult = data;
    });
  }

}
