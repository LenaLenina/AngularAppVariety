import {Component} from '@angular/core'
import { IPostsService } from '../../../core/services.abstractions/i-posts-service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  constructor(public postsService: IPostsService) {}
}
