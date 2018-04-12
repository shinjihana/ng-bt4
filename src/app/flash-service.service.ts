import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept' : 'application/json',
    'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFhZDQ3NGY4NTdmZWUyMGY0NTkyMTY4ZjVhYWVlOWVmMWZhYjA2YWY4NzI1Y2U4MDQ1ZjJiYjE4NTZlYmEzYWMyM2VhYmViNTc2ZTcwM2U3In0.eyJhdWQiOiIzIiwianRpIjoiYWFkNDc0Zjg1N2ZlZTIwZjQ1OTIxNjhmNWFhZWU5ZWYxZmFiMDZhZjg3MjVjZTgwNDVmMmJiMTg1NmViYTNhYzIzZWFiZWI1NzZlNzAzZTciLCJpYXQiOjE1MjM1MTcxNDMsIm5iZiI6MTUyMzUxNzE0MywiZXhwIjoxNTU1MDUzMTQzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.bIIZgrFEBmtdba_CFVcr1tb09evOFeT8DuxfF7nu7pOMIUmguZ2gYQMr65qDW4mkBq3kB7BPPOXr7VDSDqU9R3ta8T2eADn-sCIW6_W7num2sPL5Sx0NXCyUUTn3wLvjwOk0Uml_t6L2F_aCY7PaS-85Ioj8zuBz46ITPPye_WB8KPpVzDUjwKDzjfjVJbrTzhHD8p9MkpW3UJQlvrrnPBwEAhm_ITxoiKn0UQj0VusshusanCvvxGqo11kx-XbdYMWrPdRG1ievp6pwgdO4o1KxXB67HyrhxjUqgEBb6UGKaZWkQgADGI7HMcuwEEdqjAItUHZLWOxJG_PxwT9_jzHQLtKIkZLTABBFjMVAVG2D_TzCxlN_1JO-JN-2hOiVS9U006rdl4mfEdHEL0mGY7o-GyAKlbM8BtxmlhMYE-EtEh497nmoIIaLHyu8gejEM0wy2tKmH4pVFKk3SmkteIOG8_PIPguxc5WVZrddsN48_eJ7w4H0lmhcbx1K8n5ziu6AfdFmbNSt_6Vl_E148_GbJ-9-dMDaE9r7vQCidZPay_Uu1uLhvMy8ApGPbTO2mYdyjufCPVhWy-U-OVlF9eFr04I4a9cJMl7mN60FVaq0pZJ8M9hnAoNgdyWHoLnKzwQBurc0O5A-OQ8n-HJRZxsQqCGUwwH8AA_SfXjT7I8',
    'Content-Type': 'application/json' })
};

@Injectable()
export class FlashService {
  private userUrl = 'http://larafla.com/api/user';  // URL to web api
  constructor(
    private http : HttpClient,
  ) { }


  /**Get User from Api */
  getUser() : Observable<User> {
    return this.http.get<User>(this.userUrl, httpOptions)
            .pipe(
              tap(user => console.log(user)),
            );
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
