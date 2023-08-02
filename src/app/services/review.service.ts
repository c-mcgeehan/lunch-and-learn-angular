import { Injectable } from '@angular/core';
import { Review } from '../models/review';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  private REVIEW_LIST: Review[] = [
    { id: 1, movieId: 1, comment: 'Meh..' },
    { id: 1, movieId: 1, comment: 'Awesome movie!' },
    { id: 1, movieId: 2, comment: '10/10 would watch again' },
    { id: 1, movieId: 4, comment: 'Was way too long' },
    { id: 1, movieId: 5, comment: 'Classic!' },
  ];

  public getReviewsByMovieId(movieId: number) {
    return of(this.REVIEW_LIST.filter((r) => r.movieId === movieId));
  }
}
