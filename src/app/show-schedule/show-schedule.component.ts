import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../services/shows.service';
import IShow from '../services/IShow';

@Component({
  selector: 'app-show-schedule',
  templateUrl: './show-schedule.component.html',
  styleUrls: ['./show-schedule.component.scss']
})
export class ShowScheduleComponent implements OnInit {
  runningShows: IShow[];
  days: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  constructor(
    private ShowsService: ShowsService
  ) { }

  ngOnInit(): void {
    this.ShowsService.getShows().subscribe(data => {
      this.runningShows = data.filter(item => {
        return item.status === 'Running' && item.schedule.time !== '';
      }).sort(this.compareValues());
    });
  }

  compareValues() {
    return function (object1, object2): number {
      const value1 = (typeof object1.schedule.time === "string") ? object1.schedule.time.toLowerCase() : object1.schedule.time;
      const value2 = (typeof object2.schedule.time === "string") ? object2.schedule.time.toLowerCase() : object2.schedule.time;

      if (value1 < value2) {
        return -1;
      } else if (value1 > value2) {
        return 1;
      } else {
        return 0;
      }
    };
  }

}
