import {Component, Input} from '@angular/core';
import {PostModalComponent} from "../../post-modal/post-modal.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

export interface IPostModalData {
  postId: number;
  userId: number;
  title: string;
  body: string;
}
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() title!: string;
  @Input() body!: string;
  @Input() postId!: number;
  @Input() userId!: number;

  constructor(public dialog: MatDialog) {}

  public openPost(postId: number, userId: number, title: string, body: string): void {
    console.log(postId, userId, title,body);
    const dialogRef: MatDialogRef<PostModalComponent> = this.dialog.open(PostModalComponent, {
      width: '500px',
      height: '240px',
      data: { postId, userId, title, body }
    });
  }
}


