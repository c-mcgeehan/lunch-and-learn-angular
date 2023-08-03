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

  templateBindings: string = 'How things show up in the HTML from code behind.';
  showReactiveForms: boolean = false;

  movies: Movie[] = [];

  ngOnInit(): void {
    this.movieLibSvc.getMovies().subscribe((movies) => {
      console.log(movies);
    });
  }

  toggleReactiveForms() {
    this.showReactiveForms = !this.showReactiveForms;
  }

  captureSubmission(data: any) {
    console.log('Captured Submission:', data);
  }

  getMovies() {
    this.movieLibSvc.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }
}
