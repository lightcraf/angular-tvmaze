import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import IShow from './IShow';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(
    private http: HttpClient
  ) { }

  getShows(): Observable<IShow[]> {
    const responseHeader = new HttpHeaders();
    responseHeader.set("Access-Control-Allow-Origin", "http://api.tvmaze.com");
    responseHeader.set("Access-Control-Allow-Headers:", "Content-Type");
    responseHeader.set("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");
    responseHeader.set("Content-Type", "application/json");
    return this.http.get<IShow[]>('http://api.tvmaze.com/shows', { headers: responseHeader });
  }

  searchShow(query): Observable<IShow> {
    const responseHeader = new HttpHeaders();
    responseHeader.set("Access-Control-Allow-Origin", "http://api.tvmaze.com");
    responseHeader.set("Access-Control-Allow-Headers:", "Content-Type");
    responseHeader.set("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");
    responseHeader.set("Content-Type", "application/json");
    return this.http.get<IShow>('http://api.tvmaze.com/search/shows?q=' + query, { headers: responseHeader });
  }

  getShow(id): Observable<IShow> {
    const responseHeader = new HttpHeaders();
    responseHeader.set("Access-Control-Allow-Origin", "http://api.tvmaze.com");
    responseHeader.set("Access-Control-Allow-Headers:", "Content-Type");
    responseHeader.set("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");
    responseHeader.set("Content-Type", "application/json");
    return this.http.get<IShow>('http://api.tvmaze.com/shows/' + id, { headers: responseHeader });
  }

  getLastVisitedShows() {
    return JSON.parse(localStorage.getItem('lastVisitedShows')) || [];
  }

  setLastVisitedShows(show: IShow): void {
    const showList = JSON.parse(localStorage.getItem('lastVisitedShows')) || [];
    const index = showList.findIndex(item => {
      return item.id === show.id;
    });

    if (index > -1) {
      showList.splice(index, 1);
      showList.unshift(show);
    } else if (index === -1 && showList.length < 5) {
      showList.unshift(show);
    } else if (index === -1 && showList.length >= 5) {
      showList.unshift(show);
      showList.pop();
    }

    localStorage.setItem('lastVisitedShows', JSON.stringify(showList));
  }
}
