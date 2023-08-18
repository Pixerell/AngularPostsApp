import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostPageComponent } from './post-page.component';
import {HeaderModule} from "../../../shared/components/header/header.module";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {PostModule} from "../../../shared/components/post/post.module";
import {RouterModule, Routes} from "@angular/router";

const childRoutes: Routes = [
  {
    path: '',
    component: PostPageComponent
  }
];

@NgModule({
  declarations: [
    PostPageComponent,
  ],
  imports: [
    [RouterModule.forChild(childRoutes)],
    CommonModule,
    HeaderModule,
    MatIconModule,
    MatFormFieldModule,
    PostModule
  ]
})
export class PostPageModule { }
