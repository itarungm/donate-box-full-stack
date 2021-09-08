import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { DonateFormModule } from 'src/app/includes/donate-form/donate-form.module';
import { DonateShareLinkComponent } from '../donate-share-link/donate-share-link.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ErrorOccurredModule } from 'src/app/utilities/error-occurred/error-occurred.module';
import { ThankYouModule } from 'src/app/utilities/thank-you/thank-you.module';

@NgModule({
  declarations: [
    HomePageComponent,
    DonateShareLinkComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    DonateFormModule,
    ErrorOccurredModule,
    ThankYouModule
  ],
  exports:[]
})
export class HomePageModule { }
