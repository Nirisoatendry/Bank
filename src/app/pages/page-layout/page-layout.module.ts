import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutRoutingModule } from './page-layout-routing.module';
import { PageLayoutComponent } from './page-layout.component';
import { HeaderComponent } from 'src/app/features/header/header.component';
import { PageLoanModule } from '../page-loan/page-loan.module';


@NgModule({
  declarations: [
    PageLayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PageLayoutRoutingModule,
    PageLoanModule
  ]
})
export class PageLayoutModule { }
