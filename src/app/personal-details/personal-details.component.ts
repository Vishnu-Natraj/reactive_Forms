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

  // public personalFormDetails: FormGroup | any;

  formsnapshot: any;

  public person: Person = {
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
  }

  constructor() {
    // this.createpersonaldetails();
  }

  ngOnInit(): void {

  }


  // createpersonaldetails() {
  //   this.personalFormDetails = new FormGroup({
  //     firstName: new FormControl(this.person.firstName, Validators.required),
  //     lastName: new FormControl(this.person.lastName, Validators.required),
  //     gender: new FormControl(this.person.gender, Validators.required),
  //     email: new FormControl(this.person.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")),
  //   })
  // }
}
