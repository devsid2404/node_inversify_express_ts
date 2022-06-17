export interface IPostSearchAndPaginationFilter {
    name?:string,
    description?: string,
    sortBy?: string,
    start?: string
    limit?: string
}


export interface IPostEntry {
    id: number,
    name: string,
    post: string
}

export interface IFilteredPosts {
    paginatedPosts: IPostEntry[],
    totalPosts: number
}