import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './home/explore/explore.component';
import { FeaturedComponent } from './home/featured/featured.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './home/library/library.component';
import { ProfileComponent } from './home/profile/profile.component';
import { SearchComponent } from './home/search/search.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'search', component: SearchComponent },
      { path: 'explore', component: ExploreComponent },
      { path: 'library', component: LibraryComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'featured', component: FeaturedComponent },
      {path: '', component: FeaturedComponent }
    ]
  },
  { path: 'registration', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
