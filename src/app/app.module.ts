import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './home/search/search.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ExploreComponent } from './home/explore/explore.component';
import { LibraryComponent } from './home/library/library.component';
import { ProfileComponent } from './home/profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule, HttpClientJsonpModule, HttpClient } from '@angular/common/http';
import { FeaturedComponent } from './home/featured/featured.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    SearchComponent,
    ExploreComponent,
    LibraryComponent,
    ProfileComponent,
    RegistrationComponent,
    FeaturedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
