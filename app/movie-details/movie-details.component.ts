import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {Movies } from '../movies-list/movies';
import { MoviesListService } from '../movies-list/movies-list.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  n:string;
  m:any[];
constructor(private service: MoviesListService,private route: ActivatedRoute){
  this.route.queryParams.subscribe(params => {
            this.n = params["name"];
            
        });
}
movie:Movies[];
ngOnInit(){
// constructor(private route: ActivatedRoute) { }
//   ngOnInit() {
//     this.sub = this.route.paramMap.pipe(switchMap((params: ParamMap) =>
//       this.movies-list.getBook(+params.get('id'))))
//       .subscribe(book => this.book = book);
//   }

 this.m = this.service.products;
    console.log(this.m);   
            this.movie = this.m.filter((product: Movies) =>
                product.name.toLowerCase().indexOf(this.n) !== -1);
        
}
}
