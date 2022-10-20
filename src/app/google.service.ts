import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor(private http:HttpClient) { }

  getData () {
    // let url = "https://jsonplaceholder.typicode.com/todos/1";
    let url = "https://www.google.com";
    return this.http.get(url);
  }
}
