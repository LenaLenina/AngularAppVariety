import { Injectable } from "@angular/core";
import { Post } from "../../../core/domain/entities/post";
import { IPostsRepository } from "../../../core/domain/repositories/i-posts-reposioty";

@Injectable()
export class PostsRepository implements IPostsRepository {
    public getPosts(): Post[] {
        return [
            {title: 'Post 1', text: 'Sample text for post 1', id: 11},
            {title: 'Post 2', text: 'Sample text for post 2', id: 22},
            {title: 'Post 3', text: 'Sample text for post 3', id: 33},
            {title: 'Post 4', text: 'Sample text for post 4', id: 44},
          ];
    }
}
