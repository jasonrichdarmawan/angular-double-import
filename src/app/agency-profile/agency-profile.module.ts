import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyProfileRoutingModule } from './agency-profile-routing.module';
import { GenericAgencyProfileModule } from '../generic-agency-profile/generic-agency-profile.module';
import { AgencyProfileComponent } from './agency-profile/agency-profile.component';
import { GenericHubModule } from '../generic-hub/generic-hub.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AgencyProfileComponent
  ],
  imports: [
    CommonModule,
    AgencyProfileRoutingModule,
    GenericAgencyProfileModule,
    GenericHubModule,

    // try to comment SharedModule
    // and use `<div app-navbar>` in agency-profile.component.html
    // it will not throw error
    SharedModule,
  ]
})
export class AgencyProfileModule { }
