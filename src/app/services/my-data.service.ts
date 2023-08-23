import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { map } from 'rxjs/operators';
import { Observable ,Subject} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class MyDataService {
  public cartAddedSubject = new Subject<boolean>();
  api_url: string = 'http://127.0.0.1:8000/';
  
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

  getProduct(id: number): Observable<any[]> {
    debugger;
    return this.http.get<any[]>('http://127.0.0.1:8000/piece_list/pieces/'+id);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>('http://127.0.0.1:8000/piece_list/pieces/'+id);
  }



  AddProduct(nom: string, prix:number, qts: number) : Observable<any>{
    return this.http.post<any>(this.api_url + 'piece_list/pieces/',
      { nom ,prix  , qts}, httpOptions
    ).pipe(
      map(user => {
        return user;
      })
    );
  }
}
