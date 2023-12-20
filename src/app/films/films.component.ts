import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent implements OnInit{
  films: any[] = [];
  genre: number = 0;
  pagenum: number = 1;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    console.log("hello" + this.route);
    this.route.params.subscribe(params=>{
      this.genre = +params['genre'];
      this.pagenum = +params['page'];
    console.log(this.genre);
    console.log(this.pagenum);})
    console.log("Initialization of FilmsComponent");


    this.apiService.getFilms(this.genre,this.pagenum).subscribe({
      next: (response) => {
        console.log('Response: ', response);
        this.films = response.results;
      },
      error: (error) => {
        console.error('Error fetching films: ', error);
      },
      complete: () => {
        console.log('Film fetch complete');
      }
    });
  }

  goToFilmDetails(id: Number) {
    console.log('Go to film details: ', id);
    this.router.navigate(['movie', id]).then(() => {
      window.location.reload();
  });
}
}
