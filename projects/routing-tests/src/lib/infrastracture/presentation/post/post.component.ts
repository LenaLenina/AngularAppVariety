import {Component, OnInit} from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IPostsService } from '../../../core/services.abstractions/i-posts-service';
import { Post } from '../../../core/domain/entities/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  post!: Post | null;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: IPostsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.post = this.postService.getById(+params['id']);
    });
  }

  loadPost(): void {
    this.router.navigate(['/posts', 44])
  }
}
