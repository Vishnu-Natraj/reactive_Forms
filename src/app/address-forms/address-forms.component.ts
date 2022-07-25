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
  // public addressFormDetails: FormGroup | any;
  formsnapshot: any;

  public person: Person = {
    primaryAddress: '',
    secondaryAddress: '',
    pincode: '',
    country: '',
  }

  constructor() {
    // this.createaddressdetails();
  }

  ngOnInit(): void {
  }

  // createaddressdetails() {
  //   this.addressFormDetails = new FormGroup({
  //     primaryAddress: new FormControl(this.person.primaryAddress, Validators.required),
  //     secondaryAddress: new FormControl(this.person.secondaryAddress, Validators.required),
  //     pincode: new FormControl(this.person.pincode, Validators.required),
  //     country: new FormControl(this.person.country, Validators.required),
  //   })
  // }

}
