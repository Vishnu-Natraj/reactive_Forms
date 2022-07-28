import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from '../Person';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  @Input() personalFormDetails: FormGroup | any;
  formsnapshot: any;

  public person: Person = {
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
