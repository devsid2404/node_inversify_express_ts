import { inject } from "inversify";
import { controller, httpGet } from "inversify-express-utils";
import PostService from "../../components/posts/post.service";
import * as express from 'express';
import Symbols from "../../Symbols";



@controller('/posts')
export default class PostController {
    @inject(Symbols.PostService)
    private postService: PostService;


    @httpGet('/')
    public async getFilteredPosts(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ){
        try {

            res.json(await this.postService.getFilteredPosts(
                {...req.query}));
        } catch (err) {
            next(err);
        }
    }

}