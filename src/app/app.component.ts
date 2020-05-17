import { Component } from '@angular/core';
// import { ShowsService } from './services/shows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tvmaze';

  // searchData;

  constructor(
    // private ShowsService: ShowsService
  ) {}

  // onSearchShow(searchValue: string): void {
  //   console.log("zzzz");
  //   this.ShowsService.searchShow(searchValue).subscribe(data => {
  //     this.searchData = data;
  //     console.log(data);
  //   });
  // }
}
