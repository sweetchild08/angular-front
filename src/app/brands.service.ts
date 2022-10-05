import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Brand } from './brand';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {


  constructor(private http: HttpClient) { }

  // get brands
  getbrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(environment.backend_url + '/brands')
      .pipe(
        catchError(this.handleError<Brand[]>('fetch all brands',[]))
      )
  }
  // get brand
  getbrand(id: any): Observable<Brand> {
    return this.http.get<Brand>(environment.backend_url + '/brand/' + id);
  }
  // update brand
  updatebrand(id: any, brand: Brand | null): Observable<Brand> {
    return this.http.put<Brand>(environment.backend_url + '/brand/' + id, brand);
  }
  // delete brand
  deletebrand(id:number):Observable<string>{
    return this.http.delete<string>(environment.backend_url+'/brand/'+id)
  }
  // add brand
  addbrand(brand:object):Observable<Brand>{
    return this.http.post<Brand>(environment.backend_url+'/brand',brand)
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error('error at operation '+operation)
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
