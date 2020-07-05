import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [ CommonModule ],
  exports: [CommonModule, 
    MatSnackBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatPaginatorModule
   ]
 })
export class SharedModule {
    static forRoot() {
      return {
        ngModule: SharedModule,
        providers: []
      }
    }
  }