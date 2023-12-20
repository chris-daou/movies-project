import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FavoritesService } from '../cookie.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-fav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fav.component.html',
  styleUrl: './fav.component.css'
})
export class FavComponent implements OnInit{
  films: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router, private favoritesService: FavoritesService) {}

  ngOnInit() {
    const favorites = this.favoritesService.initializeFavorites();
    console.log('Favorites: ', favorites);

    // Create an array of observables for each API call
    const apiRequests = favorites.map((favorite) => this.apiService.getFilmDetails(favorite));

    // Use forkJoin to execute all API calls in parallel
    forkJoin(apiRequests).subscribe({
      next: (responses) => {
        console.log('Responses: ', responses);
        // Handle responses as needed, e.g., merging into a single array
        this.films = responses;
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
