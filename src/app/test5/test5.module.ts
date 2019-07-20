import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test5Component } from './test5.component';
import { Grandchild5Component } from './child5/grandchild5/grandchild5.component';
import { Child5Component } from './child5/child5.component';

@NgModule({
  declarations: [
    Test5Component,
    Child5Component,
    Grandchild5Component
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    Test5Component,
  ]
})
export class Test5Module { }
