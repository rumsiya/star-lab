import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.scss']
})
export class AppointmentDetailsComponent implements OnInit,OnChanges {

  @Input() appointment:any;
  constructor() { }

  ngOnChanges(changes :SimpleChanges){
  }

  ngOnInit(): void {
  }

}
