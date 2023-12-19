import { Routes } from '@angular/router';
import { AppComponent} from './app.component';

export const routes: Routes = [
    {path: 'home/:genre/:page', component: AppComponent},

];
