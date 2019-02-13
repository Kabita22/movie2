import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
constructor(){}
ngOnInit(){}
// constructor(private route: ActivatedRoute) { }
//   ngOnInit() {
//     this.sub = this.route.paramMap.pipe(switchMap((params: ParamMap) =>
//       this.movies-list.getBook(+params.get('id'))))
//       .subscribe(book => this.book = book);
//   }

}
