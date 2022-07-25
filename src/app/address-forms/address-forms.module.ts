import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressFormsRoutingModule } from './address-forms-routing.module';
import { AddressFormsComponent } from './address-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddressFormsRoutingModule, 
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AddressFormsModule { }
