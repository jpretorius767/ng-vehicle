import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared.module';
import { VehiclesApiService } from './services/vehicles.service';
import { VehiclesComponent } from './vehicles';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [VehiclesApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
