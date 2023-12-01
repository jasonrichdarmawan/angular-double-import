import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HubProfileExperienceComponent } from './hub-profile-experience/hub-profile-experience.component';
import { SharedModule } from '../shared/shared.module';
import { GenericHubModule } from '../generic-hub/generic-hub.module';



@NgModule({
  declarations: [
    HubProfileExperienceComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,

    // the compiler is smart enough to detect circular dependency
    // try to uncomment this
    // it will throw error
    // GenericHubModule,
  ],
  exports: [
    HubProfileExperienceComponent,
  ],
})
export class GenericAgencyProfileModule { }
