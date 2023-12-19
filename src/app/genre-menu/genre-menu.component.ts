import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Genre } from './genre.model';

@Component({
  selector: 'app-genre-menu',
  standalone: true,
  imports: [],
  templateUrl: './genre-menu.component.html',
  styleUrl: './genre-menu.component.css'
})
export class GenreMenuComponent {
  genres: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getGenres().subscribe(
      (response) => {
        this.genres = response.genres;
      },
      (error) => {
        console.error('Error fetching genres: ', error);
      }
    );
  }

}
