import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {
  public cartAddedSubject = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    debugger;
    return this.http.get<any[]>('http://127.0.0.1:8000/piece_list/pieces/') ;
  }


  addToCart(obj: any): Observable<any> {
    debugger;
    return this.http.post<any>("http://127.0.0.1:8000//panier_list/panierpieces/",obj) ;
  }

  getCartItemsByCustId(custId: number) : Observable<any[]>  {
    return this.http.get<any[]>('http://127.0.0.1:8000/panier_list/paniers/'+ custId+ '/');
  }

  getAllProducts(): Observable<any[]> {
    debugger;
    return this.http.get<any[]>('http://127.0.0.1:8000/piece_list/pieces/');
  }
}
