import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarBrandModule } from './navbar-brand/navbar-brand.module';



@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    NavbarBrandModule,
  ],
  exports: [
    NavbarComponent,
  ],
})
export class NavbarModule { }
