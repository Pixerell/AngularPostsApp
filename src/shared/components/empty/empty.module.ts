import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './empty.component';
import {HeaderModule} from "../header/header.module";
import {RouterModule, Routes} from "@angular/router";

const childRoutes: Routes = [
  {
    path: '',
    component: EmptyComponent
  }
];

@NgModule({
  declarations: [
    EmptyComponent
  ],
    imports: [
      [RouterModule.forChild(childRoutes)],
        CommonModule,
        HeaderModule
    ]
})
export class EmptyModule { }
