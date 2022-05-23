import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLayoutModule } from './pages/page-layout/page-layout.module';
import { LoanCreateComponent } from './feature/loan-create/loan-create.component';
import { LoanListComponent } from './feature/loan-list/loan-list.component';



@NgModule({
  declarations: [
    AppComponent,
    LoanCreateComponent,
    LoanListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
