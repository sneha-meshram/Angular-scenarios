import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewserviceService } from '../newservice.service';
import { Test8Component } from './test8.component';

@NgModule({
  declarations: [Test8Component],
  imports: [
    CommonModule
  ],
  providers: [NewserviceService],
  exports: [
    Test8Component
  ]
})
export class Test8Module { }
