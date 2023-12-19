import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre,GenresResponse } from './genre-menu/genre.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGNlNGZjYzJjYzQ1MTYyZmJlYzMxMjAzMThjNWFkMyIsInN1YiI6IjY1ODAwMWJhYWM2MTdjMDg3MjE0ZTc4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hP6Cfu0ANqczXsrOknbiyL_IK2JGt2Ed5raIBSpDqPY'
  constructor(private http: HttpClient) {}

  getGenres(): Observable<GenresResponse> {
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: `Bearer ${this.apiKey}`
    });
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en'
    return this.http.get<GenresResponse>(url, { headers });
  }
}
