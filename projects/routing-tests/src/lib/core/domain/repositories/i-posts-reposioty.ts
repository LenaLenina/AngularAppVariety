import { Post } from "../entities/post";

export abstract class IPostsRepository {
    abstract getPosts(): Post[];
}
