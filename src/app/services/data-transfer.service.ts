import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private state = new BehaviorSubject({});
  constructor() { }

  changeState(value): void{
    this.state.next(value);
  }

  getState(){
    return this.state.getValue();
  }
}
