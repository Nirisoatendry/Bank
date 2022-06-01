import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutComponent } from './page-layout.component';
import { PageLoanModule } from '../page-loan/page-loan.module';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'loan',
        loadChildren: () => import('src/app/pages/page-loan/page-loan.module')
          .then(module => module.PageLoanModule)
      }
     
    ] , 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLayoutRoutingModule { }
