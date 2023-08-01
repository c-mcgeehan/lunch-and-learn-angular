import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  constructor() {}

  textVal: string = '';
  isBold: boolean = false;
  isShiny: boolean = false;
  isShown: boolean = true;

  items: any[] = [
    { name: 'James J.', value: 100.25 },
    { name: 'Bob B.', value: 55.25 },
    { name: 'Allison A.', value: 650.0 },
  ];

  ngOnInit(): void {}
}
