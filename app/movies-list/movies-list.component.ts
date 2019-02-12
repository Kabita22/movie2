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
movies:Movies[];
location:string;
filteredMovies:Movies[];
 imageWidth = 100;
    imageMargin = 2;
  constructor(private router: Router,private loginService: MoviesListService) { 
    this.location=sessionStorage.getItem('location');
    console.log("movie list constructor");
    document.getElementById('welcomemsg').style.display = '';
      document.getElementById('login').style.display = '';
        document.getElementById('location').style.display = '';
        document.getElementById('login').innerHTML = 'Logout';
        this.loginService.getMovies()
            .subscribe(movies => this.movies = movies);
            if(this.movies!=null)
    this.filteredMovies=this.movies.filter(movie=> movie.location == this.location);
  }

  ngOnInit() {
    console.log("movie list ngonit");
    this.location=sessionStorage.getItem('location');
    this.loginService.getMovies()
            .subscribe(movies => this.movies = movies);
    this.loginService.getMovies()
            .subscribe(movies => this.filteredMovies = movies);
            

}}
