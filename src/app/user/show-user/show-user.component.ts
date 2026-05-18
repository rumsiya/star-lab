import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {

  user:any;
  constructor(
      @Inject(MAT_DIALOG_DATA) data:any
  ) {
    this.user= data;
  }

  ngOnInit(): void {
  }

}
