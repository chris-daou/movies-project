import { Routes } from '@angular/router';
import { AppComponent} from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home/28/1', pathMatch: 'full' },
  {path: 'home/:genre/:page', component: HomeComponent},
  {path: 'movie/:id', component: DetailComponent},

];
