import { Component } from '@angular/core';
import {AuthPageService} from "../../../views/components/auth-page/auth-page.service";
import {Router} from "@angular/router";
import {ROUTE_PATH} from "../../../core/const/routes.enum";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private authService: AuthPageService,
    private router: Router,
  ) {
  }

  public logout(): void {
    this.authService.logout();
  }

  public login(): void {
    this.router.navigate([ROUTE_PATH.LOGIN])
  }

  public isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }
}
