import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {IPostModalData} from "../components/post/post.component";

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss']
})
export class PostModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IPostModalData) {}
}
