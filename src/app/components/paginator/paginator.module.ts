import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    FormsModule,
    MatSelectModule,
  ],
  exports : [
    PaginatorComponent
  ]
})
export class PaginatorModule { }
