import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

//Example: <form *ngIf="editForm" class="form" novalidate doubleSubmitProtected (protectedSubmit)="onSubmit(editForm)" [formGroup]="editForm">
//         <button type="submit" class="btn btn-success btn-raised" [disabled]="editForm.invalid" *ngIf="canEdit">Submit</button>
@Directive({
  selector: '[doubleSubmitProtected]',
})
export class DoubleSubmitProtectorDirective implements OnInit, OnDestroy {
  constructor() {}

  @Input()
  throttleTime: number = 500;

  @Output()
  protectedSubmit: EventEmitter<any> = new EventEmitter<any>();

  submits = new Subject();
  submitSub = new Subscription();

  ngOnInit() {
    this.submitSub.add(
      this.submits
        .pipe(throttleTime(this.throttleTime))
        .subscribe((e) => this.publishProtectedSubmit(e))
    );
  }

  ngOnDestroy() {
    this.submitSub.unsubscribe();
  }

  publishProtectedSubmit(e: any) {
    this.protectedSubmit.emit(e);
  }

  @HostListener('submit', ['$event'])
  submitEvent(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.submits.next(event);
  }
}
