import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { VehiclesService } from '../services/vehicles.service';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Vehicle {
  make: string;
  year: number;
  model: string;
  bodyType: string;
}

@Component({
  selector: 'vehicles-component',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit, OnDestroy {
  vehicles:  MatTableDataSource<Vehicle>;
  subscription: Subscription;

  displayedColumns: string[] = ['make', 'model', 'year', 'bodyType'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private vehiclesService: VehiclesService, private _snackBar: MatSnackBar) {

  }

  getVehicles(): void {
    this.subscription = this.vehiclesService.getVehicles()
        .subscribe(data => this.vehicles =  new MatTableDataSource(data.data), err => this.handleError(err));
  }

  handleError (err: Error): void {
    this.openSnackBar('Oops! An error has occurred in trying to retreive data', 'Close');
  }

  openSnackBar(message: string, action: string = 'Close') {
    this._snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['mat-toolbar', 'error']
    });
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getVehicles();
    // if (this.vehicles) {
      // this.vehicles.paginator = this.paginator;
      // this.vehicles.sort = this.sort;
      setTimeout(() => {
        this.vehicles.sort = this.sort;
        this.vehicles.paginator = this.paginator;
      });
    // }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.vehicles.filter = filterValue.trim().toLowerCase();

    if (this.vehicles.paginator) {
      this.vehicles.paginator.firstPage();
    }
  }

}
