import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Movies } from './movies';
@Injectable({
  providedIn: 'root'
})
export class MoviesListService {

  constructor(private http: HttpClient) { }
  getMovies(): Observable<Movies[]> {
         return this.http.get<Movies[]>('assets/Movies.json').pipe(
            catchError(this.handleError));
    }

     private handleError(err: HttpErrorResponse) {
        console.error(err);
        return Observable.throw(err.error() || 'Server error');
    }
}
