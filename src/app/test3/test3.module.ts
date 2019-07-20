import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test3Component } from './test3.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    Test3Component,
    ChildComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    Test3Component,
  ]
})
export class Test3Module { }
