import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.css']
})
export class Child5Component implements OnInit {
 
  @Output() public sendToParentEvent= new EventEmitter();
  
  constructor() { }
  
  ngOnInit() {
  }
  sendMessageToParent(event)
  {
    this.sendToParentEvent.emit(event);
  }
}
