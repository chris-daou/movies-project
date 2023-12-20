import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nowplaying',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nowplaying.component.html',
  styleUrl: './nowplaying.component.css'
})
export class NowplayingComponent implements OnInit{
  films: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    console.log("hello" + this.route);



    this.apiService.getPlaying().subscribe({
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
