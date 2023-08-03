import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-angular',
  templateUrl: './main-angular.component.html',
  styleUrls: ['./main-angular.component.css'],
})
export class MainAngularComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  clientIds: number[] = [5];
  activeId: number = 1;
  toggleClient(isForward: boolean) {
    if (isForward) {
      if (this.activeId == 5) {
        this.activeId = 1;
      }
      this.activeId++;
    } else {
      if (this.activeId == 1) {
        this.activeId = 1;
      }
      this.activeId--;
    }
  }
}
