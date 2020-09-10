import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-popular-film',
  templateUrl: './popular-film.component.html',
  styleUrls: ['./popular-film.component.css']
})
export class PopularFilmComponent implements OnInit {

  movies: any[];
  constructor(private searchService: SearchService) { }


  ngOnInit(): void {
    this.searchService.popularMovie().subscribe(movie => this.movies = movie.results);
  }

}
