import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AccountComponent} from './account/account.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  }, {
    path: 'account', component: AccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
