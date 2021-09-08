import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Razor } from '../models/razor-pay.model';

@Injectable({
  providedIn: 'root'
})
export class RazorPayService {
  private API_URL= environment.API_URL;

  constructor(private http: HttpClient) { }

  createRazorPayOrder(orderDetails:{}){
    return this.http.post<Razor>(`${this.API_URL}`,orderDetails)
  }
}
