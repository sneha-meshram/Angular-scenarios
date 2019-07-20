import { Component, OnInit } from '@angular/core';
import { NewserviceService } from '/home/test/Downloads/Angular/angbind/src/app/newservice.service';
@Component({
  selector: 'app-child71',
  templateUrl: './child71.component.html',
  styleUrls: ['./child71.component.css']
})
export class Child71Component implements OnInit {

  constructor(private siblingService: NewserviceService){ }

  ngOnInit() {
  }
  sendMessage(data)
  {
    this.siblingService.message.next(data);
  }
}
