import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies = [];
  constructor() { }

  addToListOfFavorite(movie){
    this.movies.push(movie);
  }
  getListOfFavorite(){
    return this.movies;
  }

  clearListOfFavorite(){
    this.movies = [];
    return this.movies;
  }

  getNumberOfLikedFilms(): number{
    return this.movies.length;
  }
}
