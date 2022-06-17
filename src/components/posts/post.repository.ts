import { injectable } from "inversify";
import mockPosts from '../../../mockData/posts.json';


@injectable()
export default class PostRepository {
    public async getAllPosts():Promise<any> {
        const posts = await new Promise(resolve => setTimeout(() => resolve(mockPosts), 500));
        return posts;
    }
}