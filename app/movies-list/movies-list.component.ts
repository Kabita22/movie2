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
  constructor(private router: Router,private loginService: MoviesListService) { 
    document.getElementById('welcomemsg').style.display = '';
      document.getElementById('login').style.display = '';
        document.getElementById('location').style.display = '';
        document.getElementById('login').innerHTML = 'Logout';

         this.loginService.getMovies()
            .subscribe(movies => this.movies = movies);
  }

  ngOnInit() {
    if(document.getElementById('location').innerHTML=="Bengaluru"){
 
    }
    else if(document.getElementById('location').innerHTML=="Chennai"){
  }
  else if(document.getElementById('location').innerHTML=="Chandigarh"){

  }

}}
