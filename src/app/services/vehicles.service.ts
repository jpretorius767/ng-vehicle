import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  apiUrl: string = `${environment.apiUrl}/vehicles`;
  constructor(private http: HttpClient) { }

  getVehicles (): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
