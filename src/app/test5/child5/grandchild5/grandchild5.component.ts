import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grandchild5',
  templateUrl: './grandchild5.component.html',
  styleUrls: ['./grandchild5.component.css']
})
export class Grandchild5Component implements OnInit {

  constructor() { }
  @Output() public sendToParentEvent = new EventEmitter();
  ngOnInit() {
  }
  sendMessageToParent(message: string)
  {
    this.sendToParentEvent.emit(message);
  }
}
