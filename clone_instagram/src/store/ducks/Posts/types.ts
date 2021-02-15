export enum PostTypes {
    GET_POSTS = 'GET_POSTS'
  }
  
  export interface PostItem {
    id: number,
    user: string,
    userPicture: string,
    postPicture: string,
    description: string,
    location: string,
    likes: number
  }
  
  export interface Posts {
    postsList: PostItem[]
  }
  
  export interface PostsState {
    posts: Posts
  }