import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from '../Person';

@Component({
  selector: 'app-address-forms',
  templateUrl: './address-forms.component.html',
  styleUrls: ['./address-forms.component.css']
})
export class AddressFormsComponent implements OnInit {
  @Input() addressFormDetails: FormGroup | any = {};
  formsnapshot: any;

  public person: Person = {
    primaryAddress: '',
    secondaryAddress: '',
    pincode: '',
    country: '',
  }

  constructor() {

  }

  ngOnInit(): void {
  }



}
