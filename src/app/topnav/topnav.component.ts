import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.css'
})
export class TopnavComponent {

  constructor(private router: Router) {}

  NowPlaying(event:Event){
    event.preventDefault();
    this.router.navigate(['nowplaying']).then(() => {
      window.location.reload();
    });
  }

}
