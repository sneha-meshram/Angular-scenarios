import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
 public message;
  constructor() { }

  ngOnInit() {
  }
 onclick(sm) {
   console.log(sm);
   this.message= sm;
 }
}
