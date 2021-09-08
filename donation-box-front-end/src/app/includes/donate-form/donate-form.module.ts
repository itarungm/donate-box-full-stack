import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonateFormComponent } from './donate-form.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  declarations: [
    DonateFormComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[DonateFormComponent]
})
export class DonateFormModule { }
