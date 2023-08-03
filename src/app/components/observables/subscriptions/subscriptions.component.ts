import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, pipe, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MovieLibraryService } from 'src/app/services/movie-library.service';

@Component({
  selector: 'subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css'],
})
export class SubscriptionsComponent implements OnInit, OnDestroy {
  constructor(private movieLibrarySvc: MovieLibraryService) {}

  subscriptions = new Subscription();

  ngOnInit(): void {
    interval(1000).subscribe((val) => {
      console.log('interval...', val);
    });

    this.movieLibrarySvc
      .getMovies()
      .pipe(delay(5000))
      .subscribe((movies) => {
        console.log('get movies no subscription');
      });

    //Below is equivalent to:
    //const getMoviesSub = serviceCall.subscribe();
    //this.subscriptions.add(getMoviesSub);
    this.subscriptions.add(
      this.movieLibrarySvc
        .getMovies()
        .pipe(delay(5000))
        .subscribe((movies) => {
          console.log('get movies with subscription');
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
