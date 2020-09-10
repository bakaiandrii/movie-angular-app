import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {logger} from 'codelyzer/util/logger';
import {Movie} from '../../interfaces/Movie';
import {DataTransferService} from '../../services/data-transfer.service';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-view-detail-movie',
  templateUrl: './view-detail-movie.component.html',
  styleUrls: ['./view-detail-movie.component.css']
})
export class ViewDetailMovieComponent implements OnInit {

  movie: Movie;

  constructor(private movieService: MovieService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => this.movie = history.state.movie);
  }

  addToList(movie: Movie): void {
    this.movieService.addToListOfFavorite(movie);
    // console.log(this.movieService.getListOfFavorite());
  }
}
