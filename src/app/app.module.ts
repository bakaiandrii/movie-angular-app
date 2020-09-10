import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { MovieListCardComponent } from './components/movie-list-card/movie-list-card.component';
import { SearchAreaComponent } from './components/search-area/search-area.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './components/footer-content/footer.component';
import {RouterModule} from '@angular/router';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PopularFilmComponent } from './components/popular-film/popular-film.component';
import { ViewDetailMovieComponent } from './components/view-detail-movie/view-detail-movie.component';
import { MovieFavoriteListComponent } from './components/movie-favorite-list/movie-favorite-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListCardComponent,
    SearchAreaComponent,
    FooterComponent,
    RegistrationFormComponent,
    PaginationComponent,
    PopularFilmComponent,
    ViewDetailMovieComponent,
    MovieFavoriteListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: PopularFilmComponent},
      {path: 'registration', component: RegistrationFormComponent},
      {path: 'search', component: SearchAreaComponent},
      {path: 'view/:movieTitle', component: ViewDetailMovieComponent},
      {path: 'favorite/films', component: MovieFavoriteListComponent}
    ]),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
