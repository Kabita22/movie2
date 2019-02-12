import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieTicketBooking';

    loginTitle = 'Login';
    userName: string;
    constructor(private _router: Router) { }

    ngDoCheck(): void {
        this.userName = sessionStorage.getItem('username');
    }

    login() {
        const value = document.getElementById('login').innerHTML;

        if (value === 'Login') {
            this._router.navigate(['/login']);
        } else if (value === 'Logout') {
            sessionStorage.clear();
            document.getElementById('login').innerHTML = 'Login';
           // document.getElementById('welcomemsg').style.display = 'none';
            this._router.navigate(['/welcome']);
        }
    }

    changeLocation(location:string){
        sessionStorage.setItem('location',location);
        console.log(sessionStorage.getItem('location'));
        if(sessionStorage.getItem('isLoggedIn') == 'true'){            
            this._router.navigate(['/movies-list']);
        }
    }
}
