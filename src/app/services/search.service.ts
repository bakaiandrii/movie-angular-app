import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../interfaces/Movie';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiKey = '61896784c32256ebb118099bf12122fc';

  constructor(private httpClient: HttpClient) {
  }

  //Search for movies
  searchMovie(item: string): Observable<Movie>{
    return this.httpClient.get<Movie>(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${item}`);
  }

  changePage(item: string, pageNumber: number): Observable<Movie>{
    return this.httpClient.get<Movie>(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${item}&page=${pageNumber}`);
  }

  //Get a list of the current popular movies on TMDb
  popularMovie(): Observable<Movie>{
    return this.httpClient.get<Movie>(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`);
  }
}
