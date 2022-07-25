import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'address_Forms', loadChildren: () => import('./address-forms/address-forms.module').then(m => m.AddressFormsModule) },
  { path: 'company_Details', loadChildren: () => import('./company-details/company-details.module').then(m => m.CompanyDetailsModule) },
  { path: 'personal_Details', loadChildren: () => import('./personal-details/personal-details.module').then(m => m.PersonalDetailsModule) },
  { path: '', loadChildren: () => import('./total-details/total-details.module').then(m => m.TotalDetailsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
