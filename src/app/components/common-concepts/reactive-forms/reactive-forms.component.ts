import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  public personForm?: FormGroup;

  ngOnInit(): void {
    this.personForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: new FormControl('', [Validators.maxLength(10)]),
      age: new FormControl(''),
    });

    this.personForm?.controls.age.valueChanges.subscribe((age) => {
      console.log('Age Changed:', age);
    });
  }

  onSubmit() {
    console.log('Form Data:', this.personForm?.value);
  }
}
