import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-genre-menu',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './genre-menu.component.html',
  styleUrls: ['./genre-menu.component.css']
})
export class GenreMenuComponent implements OnInit {
  genres: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {};

  ngOnInit() {
    console.log("Initialization of GenreMenuComponent");

    this.apiService.getGenres().subscribe({
      next: (response) => {
        this.genres = response.genres;
        console.log('Genres: ', this.genres);
      },
      error: (error) => {
        console.error('Error fetching genres: ', error);
      },
      complete: () => {
        console.log('Genre fetch complete');
      }
    });
  }

  goToGenre(event: Event, id: number) {
    event.preventDefault();
    console.log('Go to genre: ', id);
    this.router.navigate(['home', id, 1]).then(() => {
      window.location.reload();
    });
  }
}
