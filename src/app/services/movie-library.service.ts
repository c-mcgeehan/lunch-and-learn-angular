import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { of, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MovieLibraryService {
  private MOVIE_LIST: Movie[] = [
    { id: 1, title: 'Diablo IV', releaseDate: new Date('2023-05-01') },
    {
      id: 2,
      title: 'Zelda: Ocarina of Time',
      releaseDate: new Date('1997-01-01'),
    },
    { id: 3, title: 'Pokemon: Yellow', releaseDate: new Date('1999-01-01') },
    {
      id: 4,
      title: 'Call of Duty: Black Ops 2',
      releaseDate: new Date('2010-01-01'),
    },
    { id: 5, title: 'Pong', releaseDate: new Date('1975-01-01') },
  ];

  public constructor() {}

  //Dummy service call to return observable instead of http request
  public getMovies() {
    return of(this.MOVIE_LIST);
  }

  public getReviewsByMovieId(id: number) {
    const movie = this.MOVIE_LIST.find((g) => g.id === id);
    if (movie === undefined) {
      return throwError(new Error('404 Movie does not exist...'));
    } else {
      return of(movie);
    }
  }
}
