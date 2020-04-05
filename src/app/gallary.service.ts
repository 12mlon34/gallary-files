import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GallaryService {

  constructor(private http: HttpClient) { }
  getImg(){
    return this.http.get("https://jsonplaceholder.typicode.com/photos?_page=1&_limit=10&fbclid=IwAR0YgIDUU-qVsSdMxa3s9UAvATlQfP4XAuGI-VC0ghCvj04exupZmtE9NGk");
  }
}
