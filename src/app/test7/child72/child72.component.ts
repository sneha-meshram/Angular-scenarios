import { Component, OnInit } from '@angular/core';
import { NewserviceService } from 'src/app/newservice.service';

@Component({
  selector: 'app-child72',
  templateUrl: './child72.component.html',
  styleUrls: ['./child72.component.css']
})
export class Child72Component implements OnInit {

  constructor(private siblingService: NewserviceService) { }
  siblingMessage: any;
  ngOnInit() 
  {
    this.siblingService.message.subscribe(data => {this.siblingMessage = data;});
  }
}
