import { inject, injectable } from "inversify";
import Symbols from "../../Symbols";
import PostRepository from "./post.repository";
import * as R from 'ramda';
import { IPostSearchAndPaginationFilter } from "./post.interface";
import CommonUtils from "../../common/common.util";



@injectable()
export default class PostService {
    @inject(Symbols.PostRepository)
    private postRepository: PostRepository;

    @inject(Symbols.CommonUtils)
    private commonUtils: CommonUtils;

    public async getFilteredPosts(
        {name = '', description = '', sortBy= '', start = '0', limit = '10'}: IPostSearchAndPaginationFilter = {},
        ):Promise<any> {
        const posts = await this.postRepository.getAllPosts();
        
        const filteredPosts =  posts.filter(postEntry => {
            if(
                R.and(
                    postEntry.name.toLowerCase().search(name.toLowerCase()) >= 0,
                    this.commonUtils.getSearchArray(description)
                        .some(stringValue => postEntry.post.toLowerCase().search(stringValue) >= 0)
            )) return postEntry;
        });
        
        const paginatedPosts = filteredPosts.slice(parseInt(start), parseInt(start)+parseInt(limit));

        const sortedPosts = this.commonUtils.sortArrayOfObjects(paginatedPosts, sortBy);
        
        return {
            sortedPosts,
            totalPosts: filteredPosts.length
        };

       
    }

}