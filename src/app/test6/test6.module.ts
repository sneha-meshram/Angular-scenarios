import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test6Component } from './test6.component';
import { Child2Component } from './child2/child2.component';
import { Child1Component } from './child1/child1.component';

@NgModule({
  declarations: [
    Test6Component,
    Child2Component,
    Child1Component],
  imports: [
    CommonModule
  ],
  exports: [
    Test6Component,
  ]
})
export class Test6Module { }
