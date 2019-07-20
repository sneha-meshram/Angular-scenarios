import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Module } from './test1/test1.module';
import { Test3Module } from './test3/test3.module';
import { Test4Module } from './test4/test4.module';
import { Test5Module } from './test5/test5.module';
import { Test6Module } from './test6/test6.module';
import { Test7Module } from './test7/test7.module';
import { Test8Module } from './test8/test8.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Test1Module,
    Test3Module,
    Test4Module,
    Test5Module,
    Test6Module,
    Test7Module,
    Test8Module
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
