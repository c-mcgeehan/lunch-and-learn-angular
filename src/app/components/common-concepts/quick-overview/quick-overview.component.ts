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
  showReactiveForms: boolean = false;

  movies: Movie[] = [];
  textVal: string = '';

  ngOnInit(): void {}

  toggleReactiveForms() {
    this.showReactiveForms = !this.showReactiveForms;
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
