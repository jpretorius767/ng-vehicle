import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { VehiclesApiService } from '../services/vehicles.service';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Vehicle } from '../models';

@Component({
  selector: 'vehicles-component',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit, OnDestroy {
  vehicles:  MatTableDataSource<Vehicle>;
  subscription: Subscription;
  isLoading = false;
  displayedColumns: string[] = ['position', 'make', 'model', 'year', 'bodyType'];

  @ViewChild('paginator', { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private vehiclesService: VehiclesApiService, private _snackBar: MatSnackBar) {
  }

  getVehicles(): Subscription {
    this.isLoading = true;
    return this.vehiclesService.getVehicles()
        .subscribe(data => this.processData(data.data), err => this.handleError(err));
  }

  handleError (err: Error): void {
    this.isLoading = false;
    this.openSnackBar('Oops! An error has occurred in trying to retreive data', 'Close');
  }

  openSnackBar(message: string, action: string = 'Close') {
    this._snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['mat-toolbar', 'error']
    });
  }

  processData (data: Array<Vehicle>) {
    this.isLoading = false;
    data.forEach((vehicle, index) => {
      let idx = index + 1; 
      vehicle.position = idx;
    });
    this.vehicles =  new MatTableDataSource(data);
    this.vehicles.paginator = this.paginator;
    this.vehicles.sort = this.sort;
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.getVehicles();
  }

  /*
  Filter the table - not currently used
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.vehicles.filter = filterValue.trim().toLowerCase();

    if (this.vehicles.paginator) {
      this.vehicles.paginator.firstPage();
    }
  }

}
