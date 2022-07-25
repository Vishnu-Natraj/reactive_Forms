import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from '../Person';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  @Input() companyFormDetails: any = {};

  // public companyFormDetails: FormGroup | any;

  formsnapshot: any;

  public person: Person = {
    companyName: '',
    employeeName: '',
    employeeId: '',
    designation: ''
  }

  constructor() {
    // this.createcompanydetails();
  }

  ngOnInit(): void {
  }

  // createcompanydetails() {
  //   this.companyFormDetails = new FormGroup({
  //     companyName: new FormControl(this.person.companyName, Validators.required),
  //     employeeName: new FormControl(this.person.employeeName, Validators.required),
  //     employeeId: new FormControl(this.person.employeeId, Validators.required),
  //     designation: new FormControl(this.person.designation, Validators.required)
  //   })
  // }

}
