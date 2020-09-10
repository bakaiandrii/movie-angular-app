import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

}
