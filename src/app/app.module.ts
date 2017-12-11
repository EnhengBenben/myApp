import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { TopComponent } from './menu/top/top.component';
import { FooterComponent } from './menu/footer/footer.component';
import { ContentComponent } from './menu/content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { DashboardEditComponent } from './dashboard/edit/edit.component';
import { Code404Component } from './code404/code404.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SidebarComponent,
    TopComponent,
    FooterComponent,
    ContentComponent,
    DashboardComponent,
    AccountComponent,
    DashboardEditComponent,
    Code404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
