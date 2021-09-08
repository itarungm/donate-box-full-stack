import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonateShareLinkComponent } from './donate-share-link.component';
import { ErrorOccurredModule } from 'src/app/utilities/error-occurred/error-occurred.module';
import { ThankYouComponent } from 'src/app/utilities/thank-you/thank-you.component';



@NgModule({
  declarations: [
    DonateShareLinkComponent,
    ThankYouComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DonateShareLinkComponent]
})
export class DonateShareLinkModule { }
