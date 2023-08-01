import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  constructor(private datePipe: DatePipe) {}

  currentDate: Date = new Date();
  numberVal: number = 0;

  ngOnInit(): void {
    console.log('raw date', this.currentDate);
    console.log(
      'date pipe transformed',
      this.datePipe.transform(this.currentDate, 'short')
    );
  }
}
