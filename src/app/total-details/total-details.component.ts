import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressFormsComponent } from '../address-forms/address-forms.component';
import { CompanyDetailsComponent } from '../company-details/company-details.component';
import { FormLibHelper } from '../form-lib-helper';
import { Person } from '../Person';
import { PersonalDetailsComponent } from '../personal-details/personal-details.component';

@Component({
  selector: 'app-total-details',
  templateUrl: './total-details.component.html',
  styleUrls: ['./total-details.component.css']
})
export class TotalDetailsComponent implements OnInit {

  formsnapshot: any;

  personalFormDetails: FormGroup | any = {};
  companyFormDetails: FormGroup | any = {};
  addressFormDetails: FormGroup | any = {};

  public person: Person = {
    firstName: '',
    lastName: '',
    gender: '',
    email: '',

    primaryAddress: '',
    secondaryAddress: '',
    pincode: '',
    country: '',

    companyName: '',
    employeeName: '',
    employeeId: '',
    designation: ''
  }

  show: any

  constructor() {

    this.createpersonaldetails();
    this.createcompanydetails();
    this.createaddressdetails();

    console.log("GETTING DATA FROM PERSONAL DETAILS USING GETITEM",
      this.show = localStorage.getItem("personal details"));

    console.log("GETTING DATA FROM COMPANY DETAILS USING GETITEM",
      this.show = localStorage.getItem("company details"));

    console.log("GETTING DATA FROM ADDRESS DETAILS USING GETITEM",
      this.show = localStorage.getItem("address details"));
  }


  createpersonaldetails() {
    this.personalFormDetails = new FormGroup({
      firstName: new FormControl(this.person.firstName, Validators.required),
      lastName: new FormControl(this.person.lastName, Validators.required),
      gender: new FormControl(this.person.gender, Validators.required),
      email: new FormControl(this.person.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")),
    })
  }

  createcompanydetails() {
    this.companyFormDetails = new FormGroup({
      companyName: new FormControl(this.person.companyName, Validators.required),
      employeeName: new FormControl(this.person.employeeName, Validators.required),
      employeeId: new FormControl(this.person.employeeId, Validators.required),
      designation: new FormControl(this.person.designation, Validators.required)
    })
  }

  createaddressdetails() {
    this.addressFormDetails = new FormGroup({
      primaryAddress: new FormControl(this.person.primaryAddress, Validators.required),
      secondaryAddress: new FormControl(this.person.secondaryAddress, Validators.required),
      pincode: new FormControl(this.person.pincode, Validators.required),
      country: new FormControl(this.person.country, Validators.required),
    })
  }



  ngOnInit() {

  }

  submitForm() {

    let personal_details = {
      firstName: this.personalFormDetails.value.firstName,
      lastName: this.personalFormDetails.value.lastName,
      email: this.personalFormDetails.value.email,
    }

    let company_details = {
      companyName: this.companyFormDetails.value.companyName,
      employeeName: this.companyFormDetails.value.employeeName,
      employeeId: this.companyFormDetails.value.employeeId,
      designation: this.companyFormDetails.value.designation
    }

    let address_details = {
      primaryAddress: this.addressFormDetails.value.primaryAddress,
      secondaryAddress: this.addressFormDetails.value.secondaryAddress,
      pincode: this.addressFormDetails.value.pincode,
      country: this.addressFormDetails.value.country
    }

    // STORING DATA IN THE SESSION_STORAGE AND LOCAL_STORAGE
    sessionStorage.setItem('personal details', JSON.stringify(personal_details));
    localStorage.setItem('personal details', JSON.stringify(personal_details));

    sessionStorage.setItem('company details', JSON.stringify(company_details));
    localStorage.setItem('company details', JSON.stringify(company_details));

    sessionStorage.setItem('address details', JSON.stringify(address_details));
    localStorage.setItem('address details', JSON.stringify(address_details));


    if (this.personalFormDetails.valid && this.companyFormDetails.valid && this.addressFormDetails.valid) {
      alert('Form Submission Successfully submitted');
      this.saveForm();
    }
    else {
      alert('Form Submission Failed');
    }

    FormLibHelper.showTouchedValidation(this.personalFormDetails);
    FormLibHelper.showTouchedValidation(this.companyFormDetails);
    FormLibHelper.showTouchedValidation(this.addressFormDetails);
  }

  saveForm() {
    this.formsnapshot = this.personalFormDetails.value, this.companyFormDetails.value, this.addressFormDetails.value;
    console.log("Saving personal form successfully...", this.personalFormDetails.value);
    console.log("Saving company form successfully...", this.companyFormDetails.value);
    console.log("Saving address form successfully...", this.addressFormDetails.value);
  }
}
