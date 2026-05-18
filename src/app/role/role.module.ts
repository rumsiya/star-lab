import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleListComponent } from './role-list/role-list.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { PublicModule } from '../public/public.module';
import { MatTableModule } from '@angular/material/table';
import { ShowRoleComponent } from './show-role/show-role.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RoleListComponent,
    AddRoleComponent,
    ShowRoleComponent
  ],
  imports: [
    CommonModule,
    PublicModule,
    MatTableModule,
    FormsModule
  ]
})
export class RoleModule { }
