import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

 const routes: Routes = [
  {
   path: '',
   component: HomeComponent
 },
  { path: 'AboutUs', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'Contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
