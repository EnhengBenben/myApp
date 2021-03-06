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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
