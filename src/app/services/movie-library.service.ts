import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { of, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MovieLibraryService {
  private MOVIE_LIST: Movie[] = [
    { id: 1, title: 'Oppenheimer', releaseDate: new Date('2023-01-01') },
    {
      id: 2,
      title: 'Top Gun: Maverick',
      releaseDate: new Date('2022-01-01'),
    },
    {
      id: 3,
      title: 'Harry Potter and the Sorcerers Stone',
      releaseDate: new Date('2001-01-01'),
    },
    {
      id: 4,
      title: 'Lord of the Rings: The Fellowship of the Ring',
      releaseDate: new Date('2001-01-01'),
    },
    {
      id: 5,
      title: 'Star Wars: Return of the Jedi',
      releaseDate: new Date('1983-01-01'),
    },
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
