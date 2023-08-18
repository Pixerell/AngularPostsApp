import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostModalComponent } from './post-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    PostModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class PostModalModule { }
