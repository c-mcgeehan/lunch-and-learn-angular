import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { BehaviorSubject, Observable, of, Subject, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

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

  private moviesSubject: BehaviorSubject<Movie[]>;
  movies$: Observable<Movie[]>;

  public constructor() {
    this.moviesSubject = new BehaviorSubject<Movie[]>(this.MOVIE_LIST);
    this.movies$ = this.moviesSubject.asObservable();
  }

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

  public addMovie(title: string) {
    //Get highest id + 1
    const newId =
      this.MOVIE_LIST.reduce((maxId, obj) => Math.max(maxId, obj.id), 0) + 1;

    const newMovie: Movie = {
      id: newId,
      title: title,
      releaseDate: new Date(),
    };
    //Add delay to simulate web call
    const delayedObservable = of(newMovie).pipe(delay(1500));

    return delayedObservable.subscribe((movieToAdd) => {
      this.MOVIE_LIST.push(movieToAdd);

      //For broadcasting this to subscribers
      this.moviesSubject.next(this.MOVIE_LIST);
      console.log('Movie added', movieToAdd);
    });
  }
}
