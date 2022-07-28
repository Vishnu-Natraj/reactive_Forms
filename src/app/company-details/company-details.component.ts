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
  formsnapshot: any;

  public person: Person = {
    companyName: '',
    employeeName: '',
    employeeId: '',
    designation: ''
  }

  constructor() {

  }

  ngOnInit(): void {
  }
}
