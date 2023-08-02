import { Component, OnInit } from '@angular/core';
import { Observable, from, of, throwError } from 'rxjs';
import { catchError, filter, finalize, switchMap, tap } from 'rxjs/operators';
import { MovieLibraryService } from 'src/app/services/movie-library.service';
import { ReviewService } from 'src/app/services/review.service';
@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent implements OnInit {
  constructor(
    private movieLibrarySvc: MovieLibraryService,
    private reviewSvc: ReviewService
  ) {}

  obs: Observable<number> = new Observable<number>((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    //subscriber.error(new Error('An expected error'));
    subscriber.next(3);
    subscriber.next(4);
    subscriber.complete(); //
  });

  ngOnInit(): void {
    const subscription = this.obs.subscribe((val) => {
      console.log('In subscribe - result from next', val);
    });

    //this.errorHandling();
  }

  errorHandling() {
    const subscription = this.obs
      .pipe(
        tap((val) => {
          console.log('in tap checking val', val);
        }),
        catchError((error: Error) => {
          console.log('local error handling here', error);
          return throwError(
            new Error('Failed to read the next int for some reason...')
          );
          //return of(0); //replacement observable value to return when an error occurs
        }), //Could put another catchError here to then return a replacement variable, or not to stop the observable stream
        tap((val) => {
          console.log('post error tap', val);
        }),
        finalize(() => {
          //This happens AFTER the subscribe callback below the pipe
          console.log('FINALIZED!');
        })
      )
      .subscribe((res) => {
        console.log('subscribe result', res);
      });
  }

  pipeCalls() {
    //User selects a game they want to look into

    //Chaining calls
    this.movieLibrarySvc
      .getReviewsByMovieId(1)
      .pipe(
        switchMap((movie) => {
          //Cancel ongoing observable calls, only use last (click it with 2 game ids, the 2nd comes back if the 1st is slow)
          console.log('movie', movie);
          //ADD TIMEOUT HERE TO EXAMPLE
          return this.reviewSvc.getReviewsByMovieId(movie.id);
        }),
        tap((review) => {
          console.log('review', review);
        }),
        catchError((error: Error) => {
          console.log('An error has occurred', error);
          return throwError(error);
        })
      )
      .subscribe();
  }
}
