import { Component, OnInit } from '@angular/core';
import { Movies } from './movies';
import { MoviesListService } from './movies-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
movies:any[];
 imageWidth = 100;
    imageMargin = 2;
    imageHeight=100;
      listFilter: string;
      errorMessage:string;
  constructor(private router: Router,private service: MoviesListService) { 
    document.getElementById('welcomemsg').style.display = '';
      document.getElementById('login').style.display = '';
        document.getElementById('location').style.display = '';
        document.getElementById('login').innerHTML = 'Logout';

this.service.getMovies('assets/Movies.json')
            .subscribe(
            products => {
                //this.service.products = products;
                this.movies = products;
            },
            error => this.errorMessage = <any>error);

      
  }
  

  ngOnInit() {
//     console.log(document.getElementById('location'));
    
//     if(document.getElementById('location').innerText=="Bengaluru"){
      
//   this.service.getMovies('assets/bengaluruMovies.json')
//             .subscribe(movies => this.movies = movies);
//     }
//     else if(document.getElementById('location').innerHTML=="Chennai"){
//       this.service.getMovies('assets/chennaiMovies.json')
//             .subscribe(movies => this.movies = movies);
//   }
//   else if(document.getElementById('location').innerHTML=="Chandigarh"){
//     this.service.getMovies('assets/chandigarhMovies.json')
//             .subscribe(movies => this.movies = movies);
//   }else{
//  this.service.getMovies('assets/Movies.json')
//             .subscribe(movies => this.movies = movies);
//   }

}
searchtext() {
        //this.movies = this.service.products;
        if (this.listFilter.length > 0) {
            this.movies = this.movies.filter((product: Movies) =>
                product.name.toLowerCase().indexOf(this.listFilter) !== -1);
        }
    }
    book(movie:any){
      // this.router.navigate(['/movie-details',movie]);
      this.router.navigate(['/movie-details']);
    }
}
