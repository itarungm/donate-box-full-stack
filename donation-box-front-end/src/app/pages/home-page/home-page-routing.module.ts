import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonateShareLinkComponent } from '../donate-share-link/donate-share-link.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page.component';

const routes: Routes = [{
  path:'',
  component:HomePageComponent
},
{
  path:'donate-link/:details',
  component:DonateShareLinkComponent
},
{
  path:'**',
  component:PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
