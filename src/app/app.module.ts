import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '',redirectTo: '/home', pathMatch: 'full'},
  { path: 'profile', component: ProfileComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    SidenavbarComponent,
    FooterComponent,
    ProfileComponent,
    MessagesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

