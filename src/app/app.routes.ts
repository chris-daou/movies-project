import { Routes } from '@angular/router';
import { AppComponent} from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { NowplayingComponent } from './nowplaying/nowplaying.component';
import { PopularComponent } from './popular/popular.component';
import { TopratedComponent } from './toprated/toprated.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home/28/1', pathMatch: 'full' },
  {path: 'home/:genre/:page', component: HomeComponent},
  {path: 'movie/:id', component: DetailComponent},
  {path: 'nowplaying', component: NowplayingComponent},
  {path: 'popular', component: PopularComponent},
  {path: 'toprated', component: TopratedComponent},
  {path: 'upcoming', component: UpcomingComponent},
];
