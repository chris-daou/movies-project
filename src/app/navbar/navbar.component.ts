import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  genre: number = 0;
  pagenum: number = 1;
  constructor(private route: ActivatedRoute, private router: Router) {}

  goToPrevious(event: Event){
    event.preventDefault();
    this.route.params.subscribe(params=>{
      this.genre = +params['genre'];
      this.pagenum = +params['page'];})
    this.pagenum = this.pagenum - 1;
    if (this.pagenum < 1){
      this.pagenum = 1;
    }
    this.router.navigate(['home', this.genre, this.pagenum]).then(() => {
      window.location.reload();
    });
  }

goToNext(event: Event){
  event.preventDefault();
  this.route.params.subscribe(params => {
    this.genre = +params['genre'];
    this.pagenum = +params['page'];
    this.pagenum = this.pagenum + 1;
    console.log("after + " + this.pagenum);
  });
  this.router.navigate(['home', this.genre, this.pagenum]).then(() => {
    window.location.reload();
  });

}


}
