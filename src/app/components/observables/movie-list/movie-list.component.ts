import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MovieLibraryService } from 'src/app/services/movie-library.service';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit, OnDestroy {
  constructor(private movieLibSvc: MovieLibraryService) {}

  moviesToDisplay: Movie[] = [];

  subscriptions = new Subscription();

  ngOnInit(): void {
    const movieSub = this.movieLibSvc.movies$.subscribe((movies) => {
      console.log('Someone added a movie');
      this.moviesToDisplay = movies;
    });
    this.subscriptions.add(movieSub);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
