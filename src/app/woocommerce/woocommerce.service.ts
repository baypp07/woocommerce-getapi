import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WoocommerceService {
  productsUrl = 'api/heroes';
  constructor(
    private http: HttpClient) {
  }

  getListOfProducts (): Observable<any> {
    return this.http.get<any>(this.productsUrl);
  }
}