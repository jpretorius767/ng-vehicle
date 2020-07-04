import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { PageNotFoundComponent } from './page-not-found';
import { VehiclesComponent } from './vehicles';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'home', component: HomeComponent },
 { path: 'vehicles', component: VehiclesComponent },
 { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

//   children: [
//     { path: '', pathMatch: 'full', component: AppComponent },
//     { path: 'vehicles', component: VehiclesComponent },
//     { path: '**', redirectTo: 'home' }
//   ]
];


@NgModule({
  imports: [MatTableModule, MatFormFieldModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
