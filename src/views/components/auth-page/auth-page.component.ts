import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthPageService} from "./auth-page.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ROUTE_PATH} from "../../../core/const/routes.enum";

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent {
  public showPassword: boolean = true;

  public form: FormGroup = new FormGroup({
    login: new FormControl('user1', [Validators.required, Validators.min(3)]),
    password: new FormControl('password1', [Validators.required])
  })
  constructor(
    private authService: AuthPageService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
  }
  public onSubmit(): void {
    if (this.form.valid) {
      this.authService.login(this.form.value.login, this.form.value.password).subscribe(result => {
        if (result) {
          this.router.navigate([ROUTE_PATH.LIST]);
        } else {
          this.snackBar.open('Ошибка Авторизации. Неверные данные', 'Закрыть', {
            duration: 5000,
          });
        }
      });
    }
  }

  public loginAsGuest(): void {
    this.router.navigate([ROUTE_PATH.EMPTY])
  }
}
