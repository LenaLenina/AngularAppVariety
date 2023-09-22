import { Injectable } from '@angular/core';
import { Post } from '../domain/entities/post'
import { IPostsService } from '../services.abstractions/i-posts-service'
import { IPostsRepository } from '../domain/repositories/i-posts-reposioty';

@Injectable()
export class PostsService implements IPostsService{

  constructor(private _repository: IPostsRepository) {}

  public getPosts(): Post[] {
    return this._repository.getPosts();
  }

  public getById(id: number): Post | null {
    const post = this.getPosts().find(p => p.id === id);
    return post || null;
  }
}
