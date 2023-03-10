import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http : HttpClient) {

  }

  public getPhotos(mot: string): Observable<any> {
    return this.http.get<any>(`https://pixabay.com/api/?key=14310549-5946cef47ae394f92692e2ae7&q=${mot}`);
  }
}
