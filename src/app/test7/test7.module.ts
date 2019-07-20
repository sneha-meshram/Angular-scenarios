import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test7Component } from './test7.component';
import { Child72Component } from './child72/child72.component';
import { Child71Component } from './child71/child71.component';

@NgModule({
  declarations: [
    Test7Component,
    Child72Component,
    Child71Component],
  imports: [
    CommonModule
  ],
  exports: [
    Test7Component,
  ]
})
export class Test7Module { }
