import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TotalDetailsRoutingModule } from './total-details-routing.module';
import { TotalDetailsComponent } from './total-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonalDetailsComponent } from '../personal-details/personal-details.component';
import { CompanyDetailsComponent } from '../company-details/company-details.component';
import { AddressFormsComponent } from '../address-forms/address-forms.component';


@NgModule({
  declarations: [
    TotalDetailsComponent,
    PersonalDetailsComponent,
    CompanyDetailsComponent,
    AddressFormsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TotalDetailsRoutingModule
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class TotalDetailsModule { }
