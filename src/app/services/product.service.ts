import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Product } from '../products/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //API_URL: string = "/api/";

  API_URL: string = "http://localhost:3000/api/";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    // return this.http.get<Product[]>(this.API_URL+"products").pipe(
    //   retry(2),
    //   catchError((error: HttpErrorResponse) => {
    //     console.error(error);
    //     return throwError(error);
    //   })
    return this.http.get<Product[]>(this.API_URL+"products").pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
  // getProduct(productId : string){
  //  return this.http.get(`${this.API_URL + 'product'}/${productId}`) 
  // }

  getProduct(productId: number) : Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products/'+productId).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
