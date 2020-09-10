import {Component, OnChanges, OnInit} from '@angular/core';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-movie-favorite-list',
  templateUrl: './movie-favorite-list.component.html',
  styleUrls: ['./movie-favorite-list.component.css']
})
export class MovieFavoriteListComponent implements OnInit, OnChanges {

  movies: any[];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movies = this.movieService.getListOfFavorite();
  }
  ngOnChanges(): void{
    this.movies = this.movieService.getListOfFavorite();
  }

  clearList() {
    this.movies = [];
    this.movieService.clearListOfFavorite();
  }
}
