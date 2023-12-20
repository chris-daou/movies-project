import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { FavoritesService } from '../cookie.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  details: any;
  id: number = 0;
  credits: String[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService, private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id = +params['id'];
    });
    this.apiService.getFilmDetails(this.id).subscribe({
      next: (response) => {

        this.details = response;
        console.log('Response: ', this.details);
      },
      error: (error) => {
        console.error('Error fetching film details: ', error);
      },
      complete: () => {
        console.log('Film details fetch complete');
      }
    });
    this.apiService.getFilmCredits(this.id).subscribe({
      next: (response: { cast: { known_for_department: string; name: string }[] }) => {
        const actorsList = response.cast.filter((actor: { known_for_department: string }) => actor.known_for_department === "Acting").slice(0, 3);
        const actorNames: string[] = actorsList.map((actor: { name: string }) => actor.name);
        this.credits = actorNames;
      },
      error: (error) => {
        console.error('Error fetching film details: ', error);
      },
      complete: () => {
        console.log('Film details fetch complete');
      }
    });
  }
  addToFavorite(id: number): void {
    console.log("add to favorite");
    const favorites = this.favoritesService.initializeFavorites();
    if (!favorites.includes(id)) {
      favorites.push(id);
      this.favoritesService.updateFavorites(favorites);
      console.log("Item added to favorites:", id);
    } else {
      console.log("Item is already in favorites:", id);
    }
    console.log("Current favorites:", this.favoritesService.initializeFavorites());
  }

  }
