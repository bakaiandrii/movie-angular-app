import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../services/search.service';
import {DataTransferService} from '../../services/data-transfer.service';


@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.css']
})
export class SearchAreaComponent implements OnInit {
  searchItem: string;
  movies: any[];
  page: number;
  totalResults: number;
  totalPages: number;


  constructor(private searchService: SearchService,
              private dataTransferService: DataTransferService) {
  }


  ngOnInit(): void {

  }


  searchMovie() {
    this.searchService.searchMovie(this.searchItem).subscribe(movie => {
      this.movies = movie.results;
      this.page = movie.page;
      this.totalResults = movie.total_results;
      this.totalPages = movie.total_pages;
      // console.log(this.page, this.totalResults, this.totalPages);
    });
  }

  getArrayFromNumber(len) {
    return new Array(len);
  }

  changePage(numberPage: number): void{
    console.log(numberPage);
    this.searchService.changePage(this.searchItem, numberPage).subscribe(movie => {
      this.movies = movie.results;
      this.page = movie.page;
      this.totalResults = movie.total_results;
      this.totalPages = movie.total_pages;
    });
  }

  prevPage(numberPage: number): void{
    this.searchService.changePage(this.searchItem, --numberPage).subscribe(movie => {
      this.movies = movie.results;
      this.page = movie.page;
      this.totalResults = movie.total_results;
      this.totalPages = movie.total_pages;
    });
  }

  nextPage(numberPage: number): void{
    this.searchService.changePage(this.searchItem, ++numberPage).subscribe(movie => {
      this.movies = movie.results;
      this.page = movie.page;
      this.totalResults = movie.total_results;
      this.totalPages = movie.total_pages;
    });
  }
}
