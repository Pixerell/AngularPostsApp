import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Router} from "@angular/router";
import {ROUTE_PATH} from "../../../core/const/routes.enum";

@Injectable({
  providedIn: 'root'
})
export class AuthPageService {
  private validCredentials: { login: string, password: string }[] = [
    {login: 'user1', password: 'password1'},
    {login: 'user2', password: 'password2'}
  ];

  constructor(
    private router: Router,
  ) {
  }

  public login(login: string, password: string): Observable<boolean> {
    const user = this.validCredentials.find(u => u.login === login && u.password === password);
    if (user) {
      localStorage.setItem('loggedIn', 'true');
      return of(true);
    } else {
      return of(false);
    }
  }

  public logout(): void {
    localStorage.removeItem('loggedIn');
    this.router.navigate([ROUTE_PATH.LOGIN])
  }

  public isAuthenticated(): boolean {
    return  localStorage.getItem('loggedIn') === 'true';
  }
}
