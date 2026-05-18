import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-role',
  templateUrl: './show-role.component.html',
  styleUrls: ['./show-role.component.scss']
})
export class ShowRoleComponent implements OnInit {

  role:any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    this.role = data;
  }

  ngOnInit(): void {
  }

}
