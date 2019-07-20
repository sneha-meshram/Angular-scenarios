import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

 constructor() { }
 message: any = new Subject<any>();

}
