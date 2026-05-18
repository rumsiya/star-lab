import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-test',
  templateUrl: './show-test.component.html',
  styleUrls: ['./show-test.component.scss']
})
export class ShowTestComponent implements OnInit {

  test:any
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    this.test= data
  }

  ngOnInit(): void {
  }

}
