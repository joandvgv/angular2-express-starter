import { Injectable} from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService implements CanActivate{


  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });
  
  constructor(private http: Http, private router: Router) { }

   getPeopleLogs(): Observable<any> {
    return this.http.get('/api/logs/persona').map(res => res.json());
  }

  sendMail(contactMail: string, text: string, telf: string, contactName: string){
      return this.http.post(
          'http://totalautos.herokuapp.com/api/mail',
           {contactEmail: contactMail,contactName: contactName, contactMsg: text,contactTelf: telf})
           .map((response: Response)=> {
               // this.router.navigate(['/home']);
           });
  }

    login(username: string, password: string) {
        return this.http.post('/api/authuser', { username: username, password: password })
            .map((response: Response) => {
                let user = response.json();
                if (user && (user.authsucess="true")) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.router.navigate(['/home'])
                }
            });
    }

    logout() {
        localStorage.removeItem('currentUser');
    }


    isAuthenticated(): boolean{
      var aValue = localStorage.getItem('currentUser');
      console.log("called to authenticated");
      if (aValue!=null)
        return true;
      else
        return false;
    }
    

    canActivate(): boolean{
        const isAuth = this.isAuthenticated();
        if(!isAuth){
            this.router.navigate(['/login'])
        }
        return isAuth;
    }

}
