import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieLibraryService } from 'src/app/services/movie-library.service';

@Component({
  selector: 'quick-overview',
  templateUrl: './quick-overview.component.html',
  styleUrls: ['./quick-overview.component.css'],
})
export class QuickOverviewComponent implements OnInit {
  constructor(private movieLibSvc: MovieLibraryService) {}

  templateBindings: string =
    'How things show up in the HTML from code behind, two-way binding';
  showPipes: boolean = false;
  showDirectives: boolean = false;

  movies: Movie[] = [];
  textVal: string = '';

  ngOnInit(): void {}

  togglePipes() {
    this.showPipes = !this.showPipes;
  }

  toggleDirectives() {
    this.showDirectives = !this.showDirectives;
  }

  captureSubmission(data: any) {
    console.log('Captured Submission:', data);
  }

  populateMovies() {
    this.movieLibSvc.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }
}
