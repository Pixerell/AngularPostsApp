import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ApiService, IPost} from "../../../api/api.service";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html'
})

export class PostPageComponent implements OnInit {
  posts: IPost[] = [];

  constructor(
    private apiService: ApiService,
    private changeDetectionRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.apiService.getPosts().subscribe((data: IPost[]) => {
      this.posts = data;
      this.changeDetectionRef.detectChanges()
    });

  }

}
