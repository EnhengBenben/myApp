import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AccountComponent} from './account/account.component';
import {Code404Component} from './code404/code404.component';
import {DashboardEditComponent} from './dashboard/edit/edit.component';
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import {MenuComponent} from "./menu/menu.component";

const routes: Routes = [
  {path: '', redirectTo: 'app/dashboard', pathMatch: 'full'},
  {path: 'app', component: MenuComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'dashboard/edit/:id', component: DashboardEditComponent},
    {path: 'account', component: AccountComponent},
  ]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: Code404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
