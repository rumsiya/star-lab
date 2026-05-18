import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowTestComponent } from './show-test/show-test.component';
import { TestListComponent } from './test-list/test-list.component';
import { AddTestComponent } from './add-test/add-test.component';
import { PublicModule } from '../public/public.module';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    ShowTestComponent,
    TestListComponent,
    AddTestComponent
  ],
  imports: [
    CommonModule,
    PublicModule,
    FormsModule,
    MatTableModule,
    MatSnackBarModule,
    MatSelectModule
  ]
})
export class TestModule { }
