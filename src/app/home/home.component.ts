import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { GenreMenuComponent } from '../genre-menu/genre-menu.component';
import { FilmsComponent } from '../films/films.component';


@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, GenreMenuComponent, FilmsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'movies-project';
}
