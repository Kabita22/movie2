import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  login = new Login();

    users: any[];
    valid = true;
    isLoggedIn = 'false';

    constructor(private router: Router,private loginService: LoginService) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('location').style.display = '';
        document.getElementById('welcomemsg').style.display = 'none';
        document.getElementById('symbol').style.display = '';
        this.loginService.getUsers()
            .subscribe(users => this.users = users);
    }
    ngOnInit(){}

    onSubmit() {
        this.valid = true;
        const name = this.login.userName;
        sessionStorage.setItem('username', this.login.userName);
        const password = this.login.password;
        const user = this.users.filter(currUser => currUser.userName === name && currUser.password === password)[0];
        if (user) {
            this.isLoggedIn = 'true';
            sessionStorage.setItem('isLoggedIn', this.isLoggedIn);
            this.router.navigate(['/movies-list']);
        } else {
            this.isLoggedIn = 'false';
            sessionStorage.setItem('isLoggedIn', this.isLoggedIn);
            this.valid = false;
        }
    }

}
