import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public pageTitle = 'Welcome';

    constructor() {
      sessionStorage.clear();
          document.getElementById('login').innerHTML = 'Login';
       document.getElementById('location').style.display = 'none';
        document.getElementById('symbol').style.display = 'none';
        document.getElementById('welcomemsg').style.display = 'none';
        document.getElementById('login').style.display = '';
        
    }

  ngOnInit() {
  }

}
