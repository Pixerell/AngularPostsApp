import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "../views/components/auth-page/auth-page.guard";
import {ROUTE_PATH} from "../core/const/routes.enum";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: "full"
  },
  {
    path: ROUTE_PATH.LOGIN,
    loadChildren: () => import('../views/components/auth-page/auth-page.module').then(m => m.AuthPageModule)
  },
  {
    path: ROUTE_PATH.LIST,
    loadChildren: () => import('../views/components/post-page/post-page.module').then(m => m.PostPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: ROUTE_PATH.EMPTY,
    loadChildren:() => import('../shared/components/empty/empty.module').then(m => m.EmptyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
