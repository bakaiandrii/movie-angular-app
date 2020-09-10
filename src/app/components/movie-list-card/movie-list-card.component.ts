import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-movie-list-card',
  templateUrl: './movie-list-card.component.html',
  styleUrls: ['./movie-list-card.component.css']
})
export class MovieListCardComponent implements OnInit {

  @Input() movie: any;

  constructor(private router: Router,
              private movieService: MovieService) {
  }

  ngOnInit(): void {

  }

  navigate(movie: any): void {
    this.router.navigate(['view',movie.title], {state: {movie}});
  }

  addToList(movie: any) {
    this.movieService.addToListOfFavorite(movie);
  }
}
