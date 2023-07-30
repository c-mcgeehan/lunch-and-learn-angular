import { Injectable } from '@angular/core';
import { Review } from '../models/review';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  private REVIEW_LIST: Review[] = [
    { id: 1, movieId: 1, comment: 'Meh..' },
    { id: 1, movieId: 1, comment: 'Awesome game!' },
    { id: 1, movieId: 2, comment: '10/10 would play again' },
    { id: 1, movieId: 4, comment: 'Full of try hards' },
    { id: 1, movieId: 5, comment: 'Classic!' },
  ];

  public getReviewsByMovieId(movieId: number) {
    return of(this.REVIEW_LIST.filter((r) => r.movieId === movieId));
  }
}
