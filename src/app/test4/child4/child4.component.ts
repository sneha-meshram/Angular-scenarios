import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {
  
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit('hey banglore');
  }
}
