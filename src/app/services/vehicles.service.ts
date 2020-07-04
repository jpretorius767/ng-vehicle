import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class VehiclesApiService {
  apiUrl: string = `${environment.apiUrl}/vehicles`;
  constructor(private http: HttpClient) { }

  getVehicles (): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
