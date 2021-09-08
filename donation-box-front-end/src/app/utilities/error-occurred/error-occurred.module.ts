import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorOccurredComponent } from './error-occurred.component';



@NgModule({
  declarations: [ErrorOccurredComponent],
  imports: [
    CommonModule
  ],
  exports:[ErrorOccurredComponent]
})
export class ErrorOccurredModule { }
