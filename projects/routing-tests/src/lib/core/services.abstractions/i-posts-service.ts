import { Post } from "../domain/entities/post";

export abstract class IPostsService {

  abstract getPosts(): Post[];

  abstract getById(id: number): Post | null;
}
