import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLearnerDetailsComponent } from './add-learner-details/add-learner-details.component';
import { GenericAgencyProfileModule } from '../generic-agency-profile/generic-agency-profile.module';
import { SharedModule } from '../shared/shared.module';
import { NavbarBrandModule } from '../shared/navbar/navbar-brand/navbar-brand.module';



@NgModule({
  declarations: [
    AddLearnerDetailsComponent,
  ],
  imports: [
    CommonModule,
    GenericAgencyProfileModule,
    SharedModule,
    NavbarBrandModule,
  ],
  exports: [
    AddLearnerDetailsComponent,
  ]
})
export class GenericHubModule { }
