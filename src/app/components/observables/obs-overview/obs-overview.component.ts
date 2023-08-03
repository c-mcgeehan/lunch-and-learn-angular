import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { MovieLibraryService } from 'src/app/services/movie-library.service';

@Component({
  selector: 'obs-overview',
  templateUrl: './obs-overview.component.html',
  styleUrls: ['./obs-overview.component.css'],
})
export class ObsOverviewComponent implements OnInit {
  constructor(private movieLibrarySvc: MovieLibraryService) {}

  movieName: string = '';

  ngOnInit(): void {
    this.movieLibrarySvc.getMovies().subscribe((movies) => {
      console.log('movies returned', movies);
    });

    const liElement = document.getElementById('myMouseLI')!;
    const mouseMovement = fromEvent<MouseEvent>(liElement, 'mousemove');

    mouseMovement.subscribe((evt) => {
      console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
    });
  }

  addMovie() {
    this.movieLibrarySvc.addMovie(this.movieName);
    this.movieName = '';
  }
}
