import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowComponent } from './show/show.component';
import { ContentComponent } from './content/content.component';
import { SearchComponent } from './search/search.component';
import { ShowScheduleComponent } from './show-schedule/show-schedule.component';
import { ShowsComponent } from './shows/shows.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', component: ContentComponent, pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'schedule', component: ShowScheduleComponent },
  { path: 'shows', component: ShowsComponent, pathMatch: 'full' },
  { path: 'show/:id', component: ShowComponent },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
