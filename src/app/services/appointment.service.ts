import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private testSubject = new  BehaviorSubject<any>(null);
  public testApp$ = this.testSubject.asObservable();

  constructor() { }

  setSelectedTest(tests:[]){
    this.testSubject.next(tests);
  }

  resetTest(){
      this.testSubject.next([]);

  }
}
