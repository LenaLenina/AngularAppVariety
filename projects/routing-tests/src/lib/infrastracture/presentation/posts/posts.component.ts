import {Component, OnInit} from '@angular/core'
import { IPostsService } from '../../../core/services.abstractions/i-posts-service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  showIds = false;

  constructor(
    public postsService: IPostsService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.showIds = !!params['showIds'];
    });
  }

  showIdsProgram(): void {
    this.router.navigate(['/posts'], { queryParams: { showIds: true }, fragment: 'program-fragment'});
  }
}
