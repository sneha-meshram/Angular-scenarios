import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test4Component } from './test4.component';
import { Child4Component } from './child4/child4.component';

@NgModule({
  declarations: [
    Test4Component,
    Child4Component
  ],
  imports: [
   CommonModule,
  ],
     exports: [
      Test4Component,
     ]
})
export class Test4Module { }
